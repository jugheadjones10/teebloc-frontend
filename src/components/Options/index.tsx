import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/clerk-react";
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
import SearchSelect from "./searchSelect";

export interface Option {
  readonly value: string;
  readonly label: string;
}

const levels = {
  Primary: [
    "Primary 1",
    "Primary 2",
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

  const [levelChosen, setLevelChosen] = useState<string>(
    useQueryParamsState("level", "")
  );

  const specificLevels = useMemo(
    () =>
      Object.values(levels)
        .flat()
        .filter((level) => levelChosen === "" || level[0] === levelChosen[0]),
    [levelChosen]
  );
  const [specificLevelsChosen, setSpecificLevelsChosen] = useState<string[]>(
    useQueryParamsState("specificLevels", [])
  );
  const [resetSpecificLevels, setResetSpecificLevels] = useState(false);

  const subjects = useMemo(
    () =>
      allData?.subjects
        .filter((subject) =>
          subject.subject_levels.some((sl) =>
            (specificLevelsChosen || []).includes(sl.level.level)
          )
        )
        .map((s) => s.subject) || [],
    [allData, specificLevelsChosen]
  );
  const [subjectChosen, setSubjectChosen] = useState<string>(
    useQueryParamsState("subject", "")
  );
  const [resetSubject, setResetSubject] = useState(false);

  const topics = useMemo(
    () =>
      allData?.topics
        .filter((topic) => topic.subject.subject === subjectChosen)
        .sort((a, b) => a.topicname.localeCompare(b.topicname))
        .map((t) => t.topicname) || [],
    [allData, subjectChosen]
  );
  const [topicsChosen, setTopicsChosen] = useState<string[]>(
    useQueryParamsState("topics", [])
  );
  const [resetTopics, setResetTopics] = useState(false);

  const papers = useMemo(
    () =>
      allData?.papers
        .concat([{ paper: "All", subject_papers: [] }])
        .filter(
          (paper) =>
            paper.subject_papers.some(
              (sp) => sp.subject.subject === subjectChosen
            ) ||
            (paper.paper === "All" && subjectChosen !== "")
        )
        .sort((a: any, b: any) => {
          if (a.paper === "All") return -1; // "All" should come first
          if (b.paper === "All") return 1;
          return 0;
        })
        .map((p) =>
          typeof p.paper === "number" ? p.paper.toString() : p.paper
        ) || [],
    [allData, subjectChosen]
  );
  const papersWithoutAll = papers.filter((p) => p !== "All");
  const [papersChosen, setPapersChosen] = useState<string[]>(
    useQueryParamsState("papers", [])
  );
  const [resetPapers, setResetPapers] = useState(false);

  const assessments = useMemo(
    () =>
      allData?.assessments
        .concat([{ assessmentname: "All", assessment_levels: [] }])
        .filter(
          (assessment) =>
            assessment.assessment_levels.some((al) =>
              (specificLevelsChosen || []).includes(al.level.level)
            ) ||
            (assessment.assessmentname === "All" &&
              specificLevelsChosen.length !== 0)
        )
        .sort((a: any, b: any) => {
          if (a.assessmentname === "All") return -1; // "All" should come first
          if (b.assessmentname === "All") return 1;
          return a.assessmentname < b.assessmentname ? -1 : 1;
        })
        .map((a) => a.assessmentname) || [],
    [allData, specificLevelsChosen]
  );
  const assessmentsWithoutAll = assessments.filter((a) => a !== "All");
  const [assessmentsChosen, setAssessmentsChosen] = useState<string[]>(
    useQueryParamsState("assessments", [])
  );
  const [resetAssessments, setResetAssessments] = useState(false);

  const schools = useMemo(() => {
    return (
      allData?.schools
        .filter((school) =>
          school.school_subjects.some(
            (ss) => ss.subject.subject === subjectChosen
          )
        )
        .map((s) => s.schoolname) || []
    );
  }, [allData, subjectChosen]);
  const [schoolsChosen, setSchoolsChosen] = useState<string[]>(
    useQueryParamsState("schools", [])
  );
  const [resetSchools, setResetSchools] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState(
    useQueryParamsState("search", "")
  );
  const [questionIdsFromSearch, setQuestionIdsFromSearch] = useState<string[]>(
    []
  );

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
      topics: topicsChosen || [],
      levels: specificLevelsChosen || [],
      papers: papersChosen || [],
      assessments: assessmentsChosen || [],
      schools: schoolsChosen || [],
    },
  });
  const { user } = useUser();
  const { data: worksheetsData } = useQuery(GET_USER_WORKSHEETS, {
    variables: { userid: user?.id },
    skip: !user?.id,
  });

  // Leave PR comment: FetchPolicy set to "network-only" to get around caching issue
  const { data: allQuestionsData } = useQuery(GET_QUESTIONS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      offset: 0,
      limit: 1000,
      topics: topicsChosen.length > 0 ? topicsChosen : topics,
      levels: specificLevelsChosen,
      papers: papersChosen.length > 0 ? papersChosen : papersWithoutAll,
      assessments:
        assessmentsChosen.length > 0
          ? assessmentsChosen
          : assessmentsWithoutAll,
      schools: schoolsChosen.length > 0 ? schoolsChosen : schools,
    },
  });

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
        topics: topicsChosen || [],
        levels: specificLevelsChosen || [],
        papers: papersChosen || [],
        assessments: assessmentsChosen || [],
        schools: schoolsChosen || [],
        excludedIds: usedIDs,
      },
    }
  );

  const totalQuestions = aggregatesData?.all?.aggregate?.count || 0;
  const totalExcludingUsed = aggregatesData?.excluding?.aggregate?.count || 0;

  const searchIncludedQuestions = useMemo(() => {
    if (!allQuestionsData || questionIdsFromSearch.length === 0) return [];
    const res = questionIdsFromSearch
      .map((id) => allQuestionsData.questions.find((q) => q.id === id))
      .filter((q) => q !== undefined);

    return excludeUsedQuestions
      ? res.filter((q) => !usedIDs.includes(q.id))
      : res;
  }, [allQuestionsData, questionIdsFromSearch, excludeUsedQuestions, usedIDs]);

  const [
    searchIncludedQuestionsDisplayCount,
    setSearchIncludedQuestionsDisplayCount,
  ] = useState<number>(Math.min(20, searchIncludedQuestions.length));

  useEffect(() => {
    setSearchIncludedQuestionsDisplayCount(
      Math.min(20, searchIncludedQuestions.length)
    );
    // console.log(searchIncludedQuestions.map((q) => q.id));
  }, [searchIncludedQuestions]);

  // Once you have totalExcludingUsed, you can filter your displayedQuestions
  const [displayedQuestions, setDisplayedQuestions] = useState(
    excludeUsedQuestions
      ? (q_data?.questions || []).filter((q) => !usedIDs.includes(q.id))
      : q_data?.questions || []
  );

  useEffect(() => {
    if (searchQuery.length > 0 && questionIdsFromSearch.length > 0) {
      const searchResults = [...searchIncludedQuestions];
      searchResults.length = Math.max(20, searchIncludedQuestionsDisplayCount);
      setDisplayedQuestions(searchResults);
    } else if (
      topicsChosen.length > 0 &&
      papersChosen.length > 0 &&
      assessmentsChosen.length > 0 &&
      schoolsChosen.length > 0
    ) {
      setDisplayedQuestions(
        excludeUsedQuestions
          ? (q_data?.questions || []).filter((q) => !usedIDs.includes(q.id))
          : q_data?.questions || []
      );
    } else {
      setDisplayedQuestions([]);
    }
  }, [
    q_data,
    excludeUsedQuestions,
    questionIdsFromSearch,
    subjectChosen,
    searchQuery,
    searchIncludedQuestions,
    searchIncludedQuestionsDisplayCount,
  ]);

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
    specificLevelsChosen.length > 0 &&
    subjectChosen &&
    topicsChosen.length > 0 &&
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
      papers: papersChosen,
      assessments: assessmentsChosen,
      schools: schoolsChosen,
      search: searchQuery ? searchQuery : null,
    });
  }, [
    levelChosen,
    specificLevelsChosen,
    subjectChosen,
    topicsChosen,
    papersChosen,
    assessmentsChosen,
    schoolsChosen,
    searchQuery,
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
    setSearchQuery("");
    setQuestionIdsFromSearch([]);
    setPapersChosen([]);
    setAssessmentsChosen([]);
    setLevelChosen(selected ? level : "");
    setResetSpecificLevels(true);
    setResetSubject(true);
    setResetTopics(true);
    setResetPapers(true);
    setResetAssessments(true);
    setResetSchools(true);
  };

  const handleSpecificLevelChange =
    (specificLevel: string) => (selected: boolean) => {
      if (selected) {
        setSpecificLevelsChosen([...specificLevelsChosen, specificLevel]);
      } else {
        setSpecificLevelsChosen(
          specificLevelsChosen.filter((level) => level !== specificLevel)
        );
      }
      if (
        specificLevelsChosen.length === 1 &&
        specificLevelsChosen[0] === specificLevel
      ) {
        setSubjectChosen("");
        setSearchQuery("");
        setQuestionIdsFromSearch([]);
        setResetSubject(true);
        setResetTopics(true);
        setResetPapers(true);
        setResetAssessments(true);
        setResetSchools(true);
      }
    };

  const handleSubjectChange = (subject: string) => (selected: boolean) => {
    setSubjectChosen(selected ? subject : "");
    setSearchQuery("");
    setQuestionIdsFromSearch([]);
    setResetPapers(true);
    setResetTopics(true);
    setResetAssessments(true);
    setSchoolsChosen([]);
  };

  const handleTopicChange = (topic: string) => (selected: boolean) => {
    if (selected) {
      setResetPapers(true);
      setResetAssessments(true);
      setSchoolsChosen([]);
    }
  };

  useEffect(() => {
    if (topicsChosen.length === 0) {
      setPapersChosen([]);
      setResetPapers(true);
      setAssessmentsChosen([]);
      setResetAssessments(true);
      setSchoolsChosen([]);
    } else {
      if (!allLoading) {
        if (papersChosen.length === 0) setPapersChosen(papersWithoutAll);
        if (assessmentsChosen.length === 0)
          setAssessmentsChosen(assessmentsWithoutAll);
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

  const handlePaperChange = (paper: string) => (selected: boolean) => {
    if (selected) {
      if (paper === "All") {
        setPapersChosen(papersWithoutAll);
      } else if (papersChosen.length === papersWithoutAll.length) {
        setPapersChosen([paper]);
      } else {
        setPapersChosen([...papersChosen, paper]);
      }
    } else {
      if (paper === "All") {
        setPapersChosen([]);
      } else {
        setPapersChosen(papersChosen.filter((p) => p !== paper));
      }
    }
  };

  const handleAssessmentChange =
    (assessment: string) => (selected: boolean) => {
      if (selected) {
        if (assessment === "All") {
          setAssessmentsChosen(assessmentsWithoutAll);
        } else if (assessmentsChosen.length === assessmentsWithoutAll.length) {
          setAssessmentsChosen([assessment]);
        } else {
          setAssessmentsChosen([...assessmentsChosen, assessment]);
        }
      } else {
        if (assessment === "All") {
          setAssessmentsChosen([]);
        } else {
          setAssessmentsChosen(
            assessmentsChosen.filter((a) => a !== assessment)
          );
        }
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
          preselected: specificLevelsChosen.includes(level),
        }))}
        multiselect={true}
        showCondition={!allLoading}
        reset={resetSpecificLevels}
        setReset={setResetSpecificLevels}
        disabled={specificLevels.map(
          (level) =>
            !allData?.levels.map((l) => l.level).includes(level) ||
            levelChosen === ""
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
        disabled={subjects.map((s) => specificLevelsChosen.length === 0)}
      />

      <SearchSelect
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setQuestionIdsFromSearch={setQuestionIdsFromSearch}
        showCondition={!allLoading && subjectChosen !== ""}
      />

      <RowSelect
        rowLabel="Topics"
        options={topics.map((topic) => ({
          label: topic,
          onChange: handleTopicChange(topic),
          preselected: topicsChosen.includes(topic),
        }))}
        multiselect={true}
        showCondition={!allLoading && subjectChosen !== ""}
        allLoading={allLoading}
        reset={resetTopics}
        setReset={setResetTopics}
        useCustomSelect={{
          selectedValues: topicsChosen.map((t) => ({
            label: t,
            value: t,
          })),
          setSelectedValues: (values: Option[]) =>
            setTopicsChosen(values.map((v) => v.value)),
        }}
      />

      <RowSelect
        rowLabel="Papers"
        options={papers.map((paper) => ({
          label: paper !== "All" ? `Paper ${paper}` : paper,
          onChange: handlePaperChange(paper),
          preselected:
            papersChosen.length === papersWithoutAll.length
              ? paper === "All"
              : papersChosen.includes(paper),
        }))}
        showCondition={!allLoading && subjectChosen !== ""}
        hasAllOption={true}
        multiselect={true}
        allLoading={allLoading}
        reset={resetPapers}
        setReset={setResetPapers}
        disabled={papers.map((p) => topicsChosen.length === 0)}
      />

      <RowSelect
        rowLabel="Assessments"
        options={assessments.map((assessment) => ({
          label: assessment,
          onChange: handleAssessmentChange(assessment),
          preselected:
            assessmentsChosen.length === assessmentsWithoutAll.length
              ? assessment === "All"
              : assessmentsChosen.includes(assessment),
        }))}
        showCondition={!allLoading && subjectChosen !== ""}
        hasAllOption={true}
        multiselect={true}
        allLoading={allLoading}
        reset={resetAssessments}
        setReset={setResetAssessments}
        disabled={assessments.map((a) => topicsChosen.length === 0)}
      />

      <RowSelect
        rowLabel="Schools"
        options={
          schools.map((school) => ({
            label: school,
            onChange: (selected: boolean) => {},
            preselected: schoolsChosen.includes(school),
          })) || []
        }
        showCondition={!allLoading && subjectChosen !== ""}
        multiselect={true}
        reset={resetSchools}
        allLoading={allLoading}
        setReset={setResetSchools}
        useCustomSelect={{
          selectedValues: schoolsChosen.map((s) => ({
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

      {q_loading && (!q_data?.questions || q_data.questions.length === 0) && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {q_data && (
        <div>
          {searchQuery
            ? searchIncludedQuestions.length
            : excludeUsedQuestions
            ? totalExcludingUsed
            : totalQuestions}{" "}
          results
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
          searchIncludedQuestionsLength={searchIncludedQuestions.length}
          searchIncludedQuestionsDisplayCount={
            searchIncludedQuestionsDisplayCount
          }
          onLoadMore={() => {
            if (searchQuery.length === 0) {
              fetchMore({
                variables: {
                  offset: q_data?.questions.length,
                },
              });
            } else {
              setSearchIncludedQuestionsDisplayCount(
                Math.min(
                  searchIncludedQuestionsDisplayCount + 20,
                  searchIncludedQuestions.length
                )
              );
            }
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
