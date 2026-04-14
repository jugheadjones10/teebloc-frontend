import { useState, useEffect, useMemo } from "react";
import { useQuery, useReactiveVar } from "@apollo/client";
import { useUser } from "@clerk/clerk-react";
import { useQuestionLimit } from "../../hooks/useQuestionLimit";
import Questions from "../Questions";
import {
  GET_ALL_OPTIONS,
  GET_QUESTION_AGGREGATES,
  GET_QUESTIONS,
  GET_USER_WORKSHEETS,
} from "./data";
import { useQueryParamsState, useQueryUpdater } from "./hook";
import { pdf } from "@react-pdf/renderer";
import { cartItemsVar } from "../CreateWorksheet/data";
import { PDFDocument } from "../MyWorksheets/pdf";
import { DownloadType } from "../MyWorksheets/pdfDownloadButton";
import posthog from "posthog-js";
import { useIsAdmin } from "../../hooks/useIsAdmin";
import { WorksheetsMappingContext } from "../../context/WorksheetsMappingContext";
import RowSelect from "./rowSelect";

export interface Option {
  readonly value: string;
  readonly label: string;
}

function toArray(v: unknown): string[] {
  if (Array.isArray(v)) return v;
  if (typeof v === "string") return v === "" ? [] : [v];
  if (v && typeof v === "object") return Object.values(v);
  return [];
}

const levels = {
  Primary: [
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
  ],
  Secondary: ["Secondary 1", "Secondary 2", "Secondary 3", "Secondary 4"],
  JC: ["Junior College 1", "Junior College 2"],
};

export default function Options() {
  const isAdmin = useIsAdmin();

  // Fetch all options in one query
  const { data: allData, loading: allLoading } = useQuery(GET_ALL_OPTIONS);

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const isactiveFilter = showArchived ? [true, false] : [true];

  const [levelChosen, setLevelChosen] = useState<string>(
    useQueryParamsState("level", ""),
  );

  const specificLevels = useMemo(
    () =>
      Object.values(levels)
        .flat()
        .filter((level) => levelChosen === "" || level[0] === levelChosen[0]),
    [levelChosen],
  );
  const [specificLevelsChosen, setSpecificLevelsChosen] = useState<string[]>(
    useQueryParamsState("specificLevels", []),
  );
  const [resetSpecificLevels, setResetSpecificLevels] = useState(false);

  const cumulativeQueryLevels = useMemo(() => {
    const chosen = toArray(specificLevelsChosen);
    const hasS2 = chosen.includes("Secondary 2");
    if (!hasS2) return chosen;

    const hasS1 = chosen.includes("Secondary 1");
    return hasS1 ? chosen : [...chosen, "Secondary 1"];
  }, [specificLevelsChosen]);

  const subjects = useMemo(
    () =>
      allData?.subjects
        .filter((subject) =>
          subject.subject_levels.some((sl) =>
            toArray(specificLevelsChosen).includes(sl.level.level),
          ),
        )
        .map((s) => s.subject) || [],
    [allData, specificLevelsChosen],
  );
  const [subjectChosen, setSubjectChosen] = useState<string>(
    useQueryParamsState("subject", ""),
  );
  const [resetSubject, setResetSubject] = useState(false);

  const levelAbbreviations = useMemo(() => {
    if (!allData?.levels) return new Map<string, string>();
    return new Map(
      allData.levels.map((l) => [
        String(l.levelid),
        l.level
          .split(" ")
          .map((w: string) => w[0])
          .join(""),
      ]),
    );
  }, [allData]);

  const topics = useMemo(() => {
    if (!allData?.topics) return [];

    let filtered = allData.topics.filter(
      (topic) => topic.subject.subject === subjectChosen,
    );

    // Cumulative filtering for subjects with levelid-tagged topics (e.g. Primary Science)
    const hasLevelIds = filtered.some((t) => t.levelid != null);

    if (hasLevelIds && toArray(specificLevelsChosen).length > 0) {
      const selectedPrimaryNumbers = specificLevelsChosen
        .filter((l) => l.startsWith("Primary"))
        .map((l) => parseInt(l.split(" ")[1]));

      if (selectedPrimaryNumbers.length > 0) {
        const highestLevel = Math.max(...selectedPrimaryNumbers);

        const cumulativeLevelIds = new Set(
          allData.levels
            .filter((l) => {
              if (!l.level.startsWith("Primary")) return false;
              const num = parseInt(l.level.split(" ")[1]);
              return num <= highestLevel;
            })
            .map((l) => l.levelid),
        );

        filtered = filtered.filter(
          (t) => t.levelid == null || cumulativeLevelIds.has(t.levelid),
        );
      }
    }

    return filtered
      .sort((a, b) => {
        const aNum = a.levelid
          ? parseInt(
              allData.levels
                .find((l) => l.levelid === a.levelid)
                ?.level.split(" ")[1] ?? "0",
            )
          : 0;
        const bNum = b.levelid
          ? parseInt(
              allData.levels
                .find((l) => l.levelid === b.levelid)
                ?.level.split(" ")[1] ?? "0",
            )
          : 0;
        if (aNum !== bNum) return aNum - bNum;
        return a.topicname.localeCompare(b.topicname);
      })
      .map((t) => {
        const prefix = t.levelid
          ? levelAbbreviations.get(String(t.levelid))
          : null;
        return {
          label: prefix ? `${prefix} ${t.topicname}` : t.topicname,
          value: t.topicname,
        };
      });
  }, [allData, subjectChosen, specificLevelsChosen, levelAbbreviations]);

  const [topicsChosen, setTopicsChosen] = useState<string[]>(
    useQueryParamsState("topics", []),
  );
  const [resetTopics, setResetTopics] = useState(false);

  // Prune selected topics that are no longer valid after level changes
  useEffect(() => {
    if (toArray(topicsChosen).length > 0 && topics.length > 0) {
      const validValues = new Set(topics.map((t) => t.value));
      const validTopics = toArray(topicsChosen).filter((t) => validValues.has(t));
      if (validTopics.length !== toArray(topicsChosen).length) {
        setTopicsChosen(validTopics);
      }
    }
  }, [topics]);

  const questionTypes = ["MCQ", "OE"];
  const [questionTypesChosen, setQuestionTypesChosen] = useState<string[]>(
    useQueryParamsState("questionTypes", []),
  );
  const [resetQuestionTypes, setResetQuestionTypes] = useState(false);

  const papers = useMemo(
    () =>
      allData?.papers
        .filter((paper) =>
          paper.subject_papers.some(
            (sp) => sp.subject.subject === subjectChosen,
          ),
        )
        .map((p) =>
          typeof p.paper === "number" ? p.paper.toString() : p.paper,
        ) || [],
    [allData, subjectChosen],
  );
  const [papersChosen, setPapersChosen] = useState<string[]>(
    useQueryParamsState("papers", []),
  );
  const [resetPapers, setResetPapers] = useState(false);

  const assessments = useMemo(
    () =>
      allData?.assessments
        .filter((assessment) =>
          assessment.assessment_levels.some((al) =>
            toArray(cumulativeQueryLevels).includes(al.level.level),
          ),
        )
        .sort((a: any, b: any) =>
          a.assessmentname < b.assessmentname ? -1 : 1,
        )
        .map((a) => a.assessmentname) || [],
    [allData, cumulativeQueryLevels],
  );
  const [assessmentsChosen, setAssessmentsChosen] = useState<string[]>(
    useQueryParamsState("assessments", []),
  );
  const [resetAssessments, setResetAssessments] = useState(false);

  const schools = useMemo(() => {
    return (
      allData?.schools
        .filter((school) =>
          school.school_subjects.some(
            (ss) => ss.subject.subject === subjectChosen,
          ),
        )
        .map((s) => s.schoolname) || []
    );
  }, [allData, subjectChosen]);
  const [schoolsChosen, setSchoolsChosen] = useState<string[]>(
    useQueryParamsState("schools", []),
  );
  const [resetSchools, setResetSchools] = useState(false);

  // Scroll button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mcqanswerFilter = useMemo(() => {
    if (questionTypesChosen.length === 0 || questionTypesChosen.length === 2) {
      return {};
    }
    return { _is_null: questionTypesChosen[0] === "OE" };
  }, [questionTypesChosen]);

  // Questions query
  const {
    loading: q_loading,
    error: q_error,
    data: q_data,
    fetchMore,
  } = useQuery(GET_QUESTIONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 20,
      topics: toArray(topicsChosen),
      levels: cumulativeQueryLevels,
      papers: toArray(papersChosen),
      assessments: toArray(assessmentsChosen),
      schools: toArray(schoolsChosen),
      isactiveFilter,
      mcqanswerFilter,
    },
  });
  const { user } = useUser();
  const { data: worksheetsData } = useQuery(GET_USER_WORKSHEETS, {
    variables: { userid: user?.id },
    skip: !user?.id,
  });

  // Bulk-add + limit state
  const { maxQuestions, cartCount } = useQuestionLimit();
  const cartItems = useReactiveVar(cartItemsVar);
  const [topXQuestionsToAdd, setTopXQuestionsToAdd] = useState<number>(10);

  // Exclude questions logic
  const [excludeUsedQuestions, setExcludeUsedQuestions] = useState(false);
  const worksheetsMapping = useMemo(() => {
    // Map question ids to worksheets
    const mapping: { [key: string]: { id: number; name: string }[] } = {};
    if (worksheetsData?.worksheets) {
      worksheetsData.worksheets.forEach((ws: any) => {
        ws.worksheets_to_questions.forEach((qt: any) => {
          if (!mapping[qt.question_id]) {
            mapping[qt.question_id] = [];
          }
          mapping[qt.question_id].push({ id: ws.id, name: ws.name });
        });
      });
    }
    return mapping;
  }, [worksheetsData]);

  const usedIDs = useMemo(() => {
    if (!worksheetsMapping) return [];
    return Object.keys(worksheetsMapping);
  }, [worksheetsMapping]);

  // NEW aggregator query: returns two counts (all + excluding)
  const { data: aggregatesData, loading: aggregatesLoading } = useQuery(
    GET_QUESTION_AGGREGATES,
    {
      variables: {
        topics: toArray(topicsChosen),
        levels: cumulativeQueryLevels,
        papers: toArray(papersChosen),
        assessments: toArray(assessmentsChosen),
        schools: toArray(schoolsChosen),
        excludedIds: usedIDs,
        isactiveFilter,
        mcqanswerFilter,
      },
    },
  );

  const totalQuestions = aggregatesData?.all?.aggregate?.count || 0;
  const totalExcludingUsed = aggregatesData?.excluding?.aggregate?.count || 0;

  // Once you have totalExcludingUsed, you can filter your displayedQuestions
  const displayedQuestions = excludeUsedQuestions
    ? (q_data?.questions || []).filter((q) => !usedIDs.includes(q.id))
    : q_data?.questions || [];

  const availableToAdd = displayedQuestions.filter(
    (q) => !cartItems.includes(q.id),
  ).length;
  const wouldExceedLimit =
    maxQuestions !== Infinity && topXQuestionsToAdd + cartCount > maxQuestions;
  const exceedsAvailable = topXQuestionsToAdd > availableToAdd;
  const bulkAddDisabled =
    topXQuestionsToAdd === 0 ||
    wouldExceedLimit ||
    exceedsAvailable ||
    availableToAdd === 0;

  const handleBulkAdd = () => {
    if (bulkAddDisabled) return;
    const newIds = displayedQuestions
      .filter((q) => !cartItems.includes(q.id))
      .slice(0, topXQuestionsToAdd)
      .map((q) => q.id);
    cartItemsVar([...cartItems, ...newIds]);
  };

  // PDF download logic
  async function downloadPDF() {
    setDownloadLoading(true);
    const cartItems = cartItemsVar();
    const questions = cartItems.map((id) => {
      return q_data?.questions.find((q) => q.id === id);
    });

    if (questions.length === 0) {
      setDownloadLoading(false);
      return;
    }

    const doc = (
      <PDFDocument
        questionsData={{ questions }}
        downloadType={DownloadType.FULL}
      />
    );
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
    const url = URL.createObjectURL(blob);
    const newTab = window.open(url, "_blank");
    newTab.focus();
    setDownloadLoading(false);
  }

  // Analytics
  useEffect(() => {
    if (q_data?.questions.length > 0) {
      posthog.capture("questions_shown", {
        count: q_data.questions.length,
        subject: subjectChosen,
        topics: topicsChosen,
        levels: specificLevelsChosen,
        papers: papersChosen,
        assessments: assessmentsChosen,
        schools: schoolsChosen,
      });
    }
  }, [q_data]);

  if (q_error) {
    console.error(q_error);
    return `Error! ${q_error.message}`;
  }

  const allOptionsSelected =
    toArray(specificLevelsChosen).length > 0 &&
    subjectChosen &&
    topicsChosen.length > 0 &&
    questionTypesChosen.length > 0 &&
    papersChosen.length > 0 &&
    assessmentsChosen.length > 0 &&
    schoolsChosen.length > 0;

  const { setQueries } = useQueryUpdater();

  useEffect(() => {
    setQueries({
      level: levelChosen ? levelChosen : null,
      specificLevels: specificLevelsChosen,
      subject: subjectChosen ? subjectChosen : null,
      topics: topicsChosen,
      questionTypes: questionTypesChosen,
      papers: papersChosen,
      assessments: assessmentsChosen,
      schools: schoolsChosen,
    });
  }, [
    levelChosen,
    specificLevelsChosen,
    subjectChosen,
    topicsChosen,
    questionTypesChosen,
    papersChosen,
    assessmentsChosen,
    schoolsChosen,
  ]);

  // Use when debugging PDF layout:
  // const pdfQuestions =
  //   cartItemsVar().length > 0 && q_data?.questions.length > 0
  //     ? cartItemsVar().map((id) => {
  //         return q_data?.questions.find((q) => q.id === id);
  //       })
  //     : [];

  const handleLevelChange = (level: string) => (selected: boolean) => {
    setSpecificLevelsChosen([]);
    setSubjectChosen("");
    setQuestionTypesChosen([]);
    setPapersChosen([]);
    setAssessmentsChosen([]);
    setLevelChosen(selected ? level : "");
    setResetSpecificLevels(true);
    setResetSubject(true);
    setResetTopics(true);
    setResetQuestionTypes(true);
    setResetPapers(true);
    setResetAssessments(true);
    setResetSchools(true);
  };

  const handleSpecificLevelChange =
    (specificLevel: string) => (selected: boolean) => {
      const current = toArray(specificLevelsChosen);
      if (selected) {
        setSpecificLevelsChosen([...current, specificLevel]);
      } else {
        setSpecificLevelsChosen(
          current.filter((level) => level !== specificLevel),
        );
      }
      if (
        current.length === 1 &&
        current[0] === specificLevel
      ) {
        setSubjectChosen("");
        setResetSubject(true);
        setResetTopics(true);
        setResetQuestionTypes(true);
        setResetPapers(true);
        setResetAssessments(true);
        setResetSchools(true);
      }
    };

  const handleSubjectChange = (subject: string) => (selected: boolean) => {
    setSubjectChosen(selected ? subject : "");
    setResetQuestionTypes(true);
    setResetPapers(true);
    setResetTopics(true);
    setResetAssessments(true);
    setSchoolsChosen([]);
  };

  const handleTopicChange = (topic: string) => (selected: boolean) => {
    if (selected) {
      setResetQuestionTypes(true);
      setResetPapers(true);
      setResetAssessments(true);
      setSchoolsChosen([]);
    }
  };

  useEffect(() => {
    if (topicsChosen.length === 0) {
      setQuestionTypesChosen([]);
      setResetQuestionTypes(true);
      setPapersChosen([]);
      setResetPapers(true);
      setAssessmentsChosen([]);
      setResetAssessments(true);
      setSchoolsChosen([]);
    } else {
      if (!allLoading) {
        if (questionTypesChosen.length === 0)
          setQuestionTypesChosen(questionTypes);
        if (papersChosen.length === 0) setPapersChosen(papers);
        if (assessmentsChosen.length === 0) setAssessmentsChosen(assessments);
        if (schoolsChosen.length === 0) setSchoolsChosen(schools);
      }
    }
  }, [topicsChosen]);

  // useEffect(() => {
  //   console.log("Specific levels chosen:", specificLevelsChosen);
  //   console.log("Subject chosen:", subjectChosen);
  //   console.log("Topics chosen:", topicsChosen);
  //   console.log("Papers chosen:", papersChosen);
  //   console.log("Assessments chosen:", assessmentsChosen);
  //   console.log("Schools chosen:", schoolsChosen);
  // }, [topicsChosen, papersChosen, assessmentsChosen]);

  const handleQuestionTypeChange = (type: string) => (selected: boolean) => {
    const newTypes = selected
      ? [...toArray(questionTypesChosen), type]
      : toArray(questionTypesChosen).filter((t) => t !== type);
    setQuestionTypesChosen(newTypes);

    // Paper constraint: MCQ only → lock to Paper 1, otherwise reset to all
    const isMcqOnly = newTypes.length === 1 && newTypes[0] === "MCQ";
    if (isMcqOnly) {
      setPapersChosen(["1"]);
    } else {
      setPapersChosen(papers);
    }
    setResetPapers(true);
  };

  const handlePaperChange = (paper: string) => (selected: boolean) => {
    if (selected) {
      setPapersChosen([...toArray(papersChosen), paper]);
    } else {
      setPapersChosen(toArray(papersChosen).filter((p) => p !== paper));
    }
  };

  const handleAssessmentChange =
    (assessment: string) => (selected: boolean) => {
      if (selected) {
        setAssessmentsChosen([...toArray(assessmentsChosen), assessment]);
      } else {
        setAssessmentsChosen(toArray(assessmentsChosen).filter((a) => a !== assessment));
      }
    };

  return (
    <div className="flex flex-col gap-4 mx-8 mb-8">
      {/* <Instructions /> */}
      {/* 
      Use when debugging PDF layout:
      {pdfQuestions.length > 0 && (
        <PDFViewer width="100%" height="1200px">
          <PDFDocument questionsData={{ questions: pdfQuestions }} />
        </PDFViewer>
      )} */}

      <RowSelect
        rowLabel="Level"
        options={Object.keys(levels).map((level) => ({
          label: level,
          onChange: handleLevelChange(level),
          preselected: levelChosen === level,
        }))}
        showCondition={!allLoading}
      />

      <RowSelect
        rowLabel="Specific level"
        options={specificLevels.map((level) => ({
          label: level
            .split(" ")
            .map((word) => word[0])
            .join(""),
          onChange: handleSpecificLevelChange(level),
          preselected: toArray(specificLevelsChosen).includes(level),
        }))}
        multiselect={true}
        showCondition={!allLoading}
        reset={resetSpecificLevels}
        setReset={setResetSpecificLevels}
        disabled={specificLevels.map(
          (level) =>
            !allData?.levels.map((l) => l.level).includes(level) ||
            levelChosen === "",
        )}
      />

      <RowSelect
        rowLabel="Subject"
        options={
          subjects.map((subject) => ({
            label: subject,
            onChange: handleSubjectChange(subject),
            preselected: subjectChosen === subject,
          })) || []
        }
        showCondition={!allLoading}
        allLoading={allLoading}
        reset={resetSubject}
        setReset={setResetSubject}
        disabled={subjects.map((s) => toArray(specificLevelsChosen).length === 0)}
      />

      <RowSelect
        rowLabel="Topics"
        options={topics.map((topic) => ({
          label: topic.label,
          value: topic.value,
          onChange: handleTopicChange(topic.value),
          preselected: toArray(topicsChosen).includes(topic.value),
        }))}
        multiselect={true}
        showCondition={!allLoading && subjectChosen !== ""}
        allLoading={allLoading}
        reset={resetTopics}
        setReset={setResetTopics}
        useCustomSelect={{
          selectedValues: toArray(topicsChosen).map((t) => {
            const match = topics.find((topic) => topic.value === t);
            return { label: match?.label ?? t, value: t };
          }),
          setSelectedValues: (values: Option[]) =>
            setTopicsChosen(values.map((v) => v.value)),
        }}
      />

      <RowSelect
        rowLabel="Question Type"
        options={questionTypes.map((type) => ({
          label: type,
          onChange: handleQuestionTypeChange(type),
          preselected: toArray(questionTypesChosen).includes(type),
        }))}
        showCondition={!allLoading && subjectChosen !== ""}
        multiselect={true}
        allLoading={allLoading}
        reset={resetQuestionTypes}
        setReset={setResetQuestionTypes}
        disabled={questionTypes.map(() => topicsChosen.length === 0)}
      />

      <div
        className="flex flex-row cursor-pointer select-none"
        onClick={() => setShowMoreOptions((prev) => !prev)}
      >
        <div className="flex-shrink-0 w-40">
          <label className="font-medium cursor-pointer">
            {showMoreOptions ? "▼" : "▶"} More options
          </label>
        </div>
      </div>

      {showMoreOptions && (
        <>
          <RowSelect
            rowLabel="Paper"
            options={papers.map((paper) => ({
              label: `Paper ${paper}`,
              onChange: handlePaperChange(paper),
              preselected: toArray(papersChosen).includes(paper),
            }))}
            showCondition={!allLoading && subjectChosen !== ""}
            multiselect={true}
            allLoading={allLoading}
            reset={resetPapers}
            setReset={setResetPapers}
            disabled={papers.map((paper) => {
              if (topicsChosen.length === 0) return true;
              const isMcqOnly =
                questionTypesChosen.length === 1 &&
                questionTypesChosen[0] === "MCQ";
              if (isMcqOnly && paper !== "1") return true;
              return false;
            })}
          />

          <RowSelect
            rowLabel="Assessments"
            options={assessments.map((assessment) => ({
              label: assessment,
              onChange: handleAssessmentChange(assessment),
              preselected: toArray(assessmentsChosen).includes(assessment),
            }))}
            showCondition={!allLoading && subjectChosen !== ""}
            multiselect={true}
            allLoading={allLoading}
            reset={resetAssessments}
            setReset={setResetAssessments}
            disabled={assessments.map(() => topicsChosen.length === 0)}
          />

          <RowSelect
            rowLabel="Schools"
            options={
              schools.map((school) => ({
                label: school,
                onChange: (selected: boolean) => {},
                preselected: toArray(schoolsChosen).includes(school),
              })) || []
            }
            showCondition={!allLoading && subjectChosen !== ""}
            multiselect={true}
            reset={resetSchools}
            allLoading={allLoading}
            setReset={setResetSchools}
            useCustomSelect={{
              selectedValues: toArray(schoolsChosen).map((s) => ({
                label: s,
                value: s,
              })),
              setSelectedValues: (values: Option[]) =>
                setSchoolsChosen(values.map((v) => v.value)),
            }}
          />

          <span className="text-xs text-gray-500">
            All schools are selected by default
          </span>
        </>
      )}

      {/* Add the toggle switch right after Instructions */}
      <div className="form-control w-fit">
        <label className="gap-4 cursor-pointer label">
          <span className="label-text">
            Exclude questions included in my worksheets
          </span>
          <input
            type="checkbox"
            className="checkbox"
            checked={excludeUsedQuestions}
            onChange={(e) => setExcludeUsedQuestions(e.target.checked)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 w-fit">
        <div className="flex items-center gap-3">
          <span className="label-text whitespace-nowrap">Add top</span>
          <input
            type="number"
            min={0}
            max={maxQuestions === Infinity ? 9999 : maxQuestions - cartCount}
            value={topXQuestionsToAdd}
            onChange={(e) =>
              setTopXQuestionsToAdd(Math.max(0, parseInt(e.target.value) || 0))
            }
            className="input input-bordered input-sm w-20"
          />
          <span className="label-text whitespace-nowrap">
            questions to worksheet
          </span>
          <button
            className="btn btn-sm btn-primary"
            disabled={bulkAddDisabled}
            onClick={handleBulkAdd}
          >
            Add
          </button>
        </div>
        {wouldExceedLimit && (
          <span className="text-xs text-error">
            Adding {topXQuestionsToAdd} would exceed your limit of{" "}
            {maxQuestions} questions ({cartCount} already in worksheet).
          </span>
        )}
        {exceedsAvailable && !wouldExceedLimit && (
          <span className="text-xs text-error">
            Only {availableToAdd} questions available to add.
          </span>
        )}
        {availableToAdd === 0 && displayedQuestions.length > 0 && (
          <span className="text-xs text-warning">
            All displayed questions are already in your worksheet. Load more in
            order to add more questions.
          </span>
        )}
      </div>

      {isAdmin && (
        <div className="form-control w-fit">
          <label className="gap-4 cursor-pointer label">
            <span className="label-text">Show archived questions</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={showArchived}
              onChange={(e) => setShowArchived(e.target.checked)}
            />
          </label>
        </div>
      )}

      {q_loading && (!q_data?.questions || q_data.questions.length === 0) && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {q_data && (
        <div>
          {excludeUsedQuestions ? totalExcludingUsed : totalQuestions} results
        </div>
      )}
      {isAdmin && (
        <>
          <div
            onClick={downloadPDF}
            className="fixed z-10 btn btn-neutral btn-lg w-60 bottom-4 right-4"
          >
            {downloadLoading && (
              <span className="loading loading-spinner"></span>
            )}
            {downloadLoading ? "Loading" : "Download worksheet"}
          </div>

          <div
            onClick={() => cartItemsVar([])}
            className="fixed z-10 btn btn-neutral btn-lg bottom-4 right-72"
          >
            Clear questions
          </div>
        </>
      )}
      {q_data?.questions.length === 0 && allOptionsSelected && (
        <div>
          No results. Try selecting more options to broaden your search!
        </div>
      )}
      <WorksheetsMappingContext.Provider value={worksheetsMapping}>
        <Questions
          questions={displayedQuestions}
          loading={q_loading}
          onLoadMore={() => {
            fetchMore({
              variables: {
                offset: q_data?.questions.length,
              },
            });
          }}
        />
      </WorksheetsMappingContext.Provider>
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-10 p-2 text-white transform -translate-x-1/2 bg-gray-500 rounded-full top-24 left-1/2"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
