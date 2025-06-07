import { useState, useEffect, useCallback, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { MultiValue, OnChangeValue } from "react-select";
import CustomSelect from "../CusomSelect";
import Instructions from "../instructions";
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

export interface Option {
  readonly value: string;
  readonly label: string;
}

const commonSelectSettings = {
  hideSelectedOptions: false,
  isClearable: true,
  closeMenuOnSelect: false,
  styles: {
    container: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
    }),
    placeholder: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      color: "black",
    }),
    option: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      whiteSpace: "nowrap",
    }),
    menu: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
      width: "fit-content",
      flexDirection: "column",
    }),
    menuList: (baseStyles: React.CSSProperties) => ({
      ...baseStyles,
      display: "flex",
      width: "100%",
      flexDirection: "column",
    }),
  },
};

// First, define the dependency tree structure
const OPTION_DEPENDENCIES = {
  levels: ["subject", "assessments"], // when levels change, clear subject and assessments
  subject: ["topics", "papers", "schools"], // when subject changes, clear topics, papers, and schools
  topics: [], // topics has no children
  papers: [], // papers has no children
  assessments: [], // assessments has no children
  schools: [], // schools has no children
} as const;

// Helper function to get all descendants of a node
function getAllDescendants(node: keyof typeof OPTION_DEPENDENCIES): string[] {
  const children = OPTION_DEPENDENCIES[node];
  const descendants = [...children];

  children.forEach((child) => {
    descendants.push(
      ...getAllDescendants(child as keyof typeof OPTION_DEPENDENCIES)
    );
  });

  return descendants;
}

type OptionType =
  | "levels"
  | "subject"
  | "topics"
  | "papers"
  | "assessments"
  | "schools";

export default function Options() {
  const isAdmin = useIsAdmin();

  // Fetch all options in one query
  const { data: allData, loading: allLoading } = useQuery(GET_ALL_OPTIONS);

  // State management
  const [selectedLevels, setSelectedLevels] = useQueryParamsState("levels", []);
  const [selectedSubject, setSelectedSubject] = useQueryParamsState(
    "subject",
    null
  );
  const [selectedTopics, setSelectedTopics] = useQueryParamsState("topics", []);
  const [selectedPapers, setSelectedPapers] = useQueryParamsState("papers", []);
  const [selectedAssessments, setSelectedAssessments] = useQueryParamsState(
    "assessments",
    []
  );
  const [selectedSchools, setSelectedSchools] = useQueryParamsState(
    "schools",
    []
  );

  const { setQueries } = useQueryUpdater();

  const updateSelection = useCallback(
    (option: OptionType, value: MultiValue<Option>) => {
      // We want to do a batch update
      const dependentsToReset = getAllDescendants(option);
      let batchUpdate = {
        [option]: value,
      };

      dependentsToReset.forEach((dependent) => {
        if (dependent === "subject") {
          batchUpdate[dependent] = null;
        } else if (dependent === "schools") {
          // All schools are selected by default
          const schools = allData?.schools
            .filter((school) =>
              school.school_subjects.some(
                // We use value.value because we know the current option is subject (only possible parent of schools is subject)
                (ss) => ss.subject.subject === value?.value
              )
            )
            .map((s) => ({
              value: s.schoolname,
              label: s.schoolname,
            }));
          batchUpdate[dependent] = schools;
        } else {
          batchUpdate[dependent] = [];
        }
      });

      setQueries(batchUpdate);
    },
    [setQueries, allData]
  );

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);

  // Filtered options based on selections
  const levelOptions = useMemo(
    () =>
      allData?.levels.map((l) => ({
        value: l.level,
        label: l.level,
      })) || [],
    [allData]
  );

  const subjectOptions = useMemo(() => {
    if (!allData?.subjects || selectedLevels.length === 0) return [];
    return allData.subjects
      .filter((subject) =>
        subject.subject_levels.some((sl) =>
          selectedLevels.map((l) => l.value).includes(sl.level.level)
        )
      )
      .map((s) => ({
        value: s.subject,
        label: s.subject,
      }));
  }, [allData, selectedLevels]);

  const topicOptions = useMemo(() => {
    if (!allData?.topics || !selectedSubject) return [];
    return allData.topics
      .filter((topic) => topic.subject.subject === selectedSubject.value)
      .sort((a, b) => a.topicname.localeCompare(b.topicname))
      .map((t) => ({
        value: t.topicname,
        label: t.topicname,
      }));
  }, [allData, selectedSubject]);

  const paperOptions = useMemo(() => {
    if (!allData?.papers || !selectedSubject) return [];
    return allData.papers
      .filter((paper) =>
        paper.subject_papers.some(
          (sp) => sp.subject.subject === selectedSubject.value
        )
      )
      .map((p) => ({
        value: p.paper.toString(),
        label: p.paper.toString(),
      }));
  }, [allData, selectedSubject]);

  const assessmentOptions = useMemo(() => {
    if (!allData?.assessments || selectedLevels.length === 0) return [];
    return allData.assessments
      .filter((assessment) =>
        assessment.assessment_levels.some((al) =>
          selectedLevels.map((l) => l.value).includes(al.level.level)
        )
      )
      .map((a) => ({
        value: a.assessmentname,
        label: a.assessmentname,
      }));
  }, [allData, selectedLevels]);

  const schoolOptions = useMemo(() => {
    if (!allData?.schools || !selectedSubject) return [];
    return allData.schools
      .filter((school) =>
        school.school_subjects.some(
          (ss) => ss.subject.subject === selectedSubject.value
        )
      )
      .map((s) => ({
        value: s.schoolname,
        label: s.schoolname,
      }));
  }, [allData, selectedSubject]);

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
      topics: selectedTopics?.map((t) => t.value) || [],
      levels: selectedLevels?.map((l) => l.value) || [],
      papers: selectedPapers?.map((p) => p.value) || [],
      assessments: selectedAssessments?.map((a) => a.value) || [],
      schools: selectedSchools?.map((s) => s.value) || [],
    },
  });
  const { user } = useUser();
  const { data: worksheetsData } = useQuery(GET_USER_WORKSHEETS, {
    variables: { userid: user?.id },
    skip: !user?.id,
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
        topics: selectedTopics?.map((t) => t.value) || [],
        levels: selectedLevels?.map((l) => l.value) || [],
        papers: selectedPapers?.map((p) => p.value) || [],
        assessments: selectedAssessments?.map((a) => a.value) || [],
        schools: selectedSchools?.map((s) => s.value) || [],
        excludedIds: usedIDs,
      },
    }
  );

  const totalQuestions = aggregatesData?.all?.aggregate?.count || 0;
  const totalExcludingUsed = aggregatesData?.excluding?.aggregate?.count || 0;

  // Once you have totalExcludingUsed, you can filter your displayedQuestions
  const displayedQuestions = excludeUsedQuestions
    ? (q_data?.questions || []).filter((q) => !usedIDs.includes(q.id))
    : q_data?.questions || [];

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
        subject: selectedSubject?.value,
        topics: selectedTopics.map((t) => t.value),
        levels: selectedLevels.map((l) => l.value),
        papers: selectedPapers.map((p) => p.value),
        assessments: selectedAssessments.map((a) => a.value),
        schools: selectedSchools.map((s) => s.value),
      });
    }
  }, [q_data]);

  if (q_error) {
    console.error(q_error);
    return `Error! ${q_error.message}`;
  }

  const allOptionsSelected =
    selectedLevels.length > 0 &&
    selectedSubject &&
    selectedTopics.length > 0 &&
    selectedPapers.length > 0 &&
    selectedAssessments.length > 0 &&
    selectedSchools.length > 0;

  // Use when debugging PDF layout:
  // const pdfQuestions =
  //   cartItemsVar().length > 0 && q_data?.questions.length > 0
  //     ? cartItemsVar().map((id) => {
  //         return q_data?.questions.find((q) => q.id === id);
  //       })
  //     : [];

  return (
    <div className="flex flex-col gap-8 mx-8 mb-8">
      <Instructions />
      {/* 
      Use when debugging PDF layout:
      {pdfQuestions.length > 0 && (
        <PDFViewer width="100%" height="1200px">
          <PDFDocument questionsData={{ questions: pdfQuestions }} />
        </PDFViewer>
      )} */}
      <div className="flex flex-col justify-start gap-2 my-2">
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedLevels}
          haveSelectAll
          isLoading={allLoading}
          placeholder="Levels"
          isSearchable={false}
          isMulti
          value={selectedLevels}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            updateSelection("levels", selectedOptions || []);
          }}
          options={levelOptions}
        />

        <CustomSelect
          {...commonSelectSettings}
          isLoading={allLoading}
          placeholder="Subject"
          isSearchable={false}
          value={selectedSubject}
          onChange={(selectedOption: OnChangeValue<Option, false>) => {
            updateSelection("subject", selectedOption);
          }}
          options={subjectOptions}
        />

        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedTopics}
          haveSelectAll
          isLoading={allLoading}
          placeholder="Topics"
          isSearchable
          isMulti
          value={selectedTopics}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            updateSelection("topics", selectedOptions || []);
          }}
          options={topicOptions}
        />

        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedPapers}
          haveSelectAll
          isLoading={allLoading}
          placeholder="Papers"
          isSearchable={false}
          isMulti
          value={selectedPapers}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            updateSelection("papers", selectedOptions || []);
          }}
          options={paperOptions}
        />
        <span className="text-xs text-gray-500">
          Paper 1 is MCQ, Paper 2 and Paper 3 are Open Ended
        </span>

        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedAssessments}
          haveSelectAll
          isLoading={allLoading}
          placeholder="Assessments"
          isSearchable={false}
          isMulti
          value={selectedAssessments}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            updateSelection("assessments", selectedOptions || []);
          }}
          options={assessmentOptions}
        />

        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedSchools}
          haveSelectAll
          isLoading={allLoading}
          placeholder="Schools"
          isSearchable={false}
          isMulti
          value={selectedSchools}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            updateSelection("schools", selectedOptions || []);
          }}
          options={schoolOptions}
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
      </div>
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
