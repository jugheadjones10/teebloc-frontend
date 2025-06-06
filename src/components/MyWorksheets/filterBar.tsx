import { useMemo, useEffect, useState } from "react";
import { Option } from "../Options/index";
import CustomSelect from "../CusomSelect";
import { GetUserWorksheetsQuery } from "../../__generated__/graphql";

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

export default function FilterBar({
  worksheets,
  setFilteredWorksheets,
  setIsChanged,
}: {
  worksheets: GetUserWorksheetsQuery["worksheets"];
  setFilteredWorksheets: (
    worksheets: GetUserWorksheetsQuery["worksheets"]
  ) => void;
  setIsChanged: (isChanged: boolean) => void;
}) {
  // State management
  const [filteredLevels, setfilteredLevels] = useState<Option[]>([]);
  const [filteredTopics, setfilteredTopics] = useState<Option[]>([]);
  const [filteredPapers, setfilteredPapers] = useState<Option[]>([]);
  const [filteredAssessments, setfilteredAssessments] = useState<Option[]>([]);
  const [filteredSubjects, setfilteredSubjects] = useState<Option[]>([]);

  // Helper to extract .value from Option[]
  const getValues = (arr: Option[]) => arr.map((o) => o.value);

  // Memoize filtered worksheets to avoid unnecessary rerenders
  const filtered = useMemo(() => {
    const selectedLevels = getValues(filteredLevels);
    const selectedTopics = getValues(filteredTopics);
    const selectedPapers = getValues(filteredPapers);
    const selectedAssessments = getValues(filteredAssessments);
    const selectedSubjects = getValues(filteredSubjects);

    // If no filters are selected, return all worksheets
    const anyFilterSelected =
      selectedLevels.length > 0 ||
      selectedTopics.length > 0 ||
      selectedPapers.length > 0 ||
      selectedAssessments.length > 0 ||
      selectedSubjects.length > 0;

    if (!anyFilterSelected) return worksheets;

    return worksheets.filter((worksheet) => {
      const levels = worksheet.worksheets_to_questions.map(
        (wtq) => wtq.question.level.level
      );
      const topics = worksheet.worksheets_to_questions.flatMap((wtq) =>
        wtq.question.question_topics.map((qt) => qt.topic.topicname)
      );
      const papers = worksheet.worksheets_to_questions.map(
        (wtq) => wtq.question.paper.paper
      );
      const assessments = worksheet.worksheets_to_questions.map(
        (wtq) => wtq.question.assessment.assessmentname
      );
      const subjects = worksheet.worksheets_to_questions.flatMap((wtq) =>
        wtq.question.question_topics.map((qt) => qt.topic.subject.subject)
      );

      // Disjunctive (OR) logic: include if matches ANY filter type
      return (
        (selectedLevels.length > 0 &&
          levels.some((level) => selectedLevels.includes(level))) ||
        (selectedTopics.length > 0 &&
          topics.some((topic) => selectedTopics.includes(topic))) ||
        (selectedPapers.length > 0 &&
          papers.some((paper) => selectedPapers.includes(paper.toString()))) ||
        (selectedAssessments.length > 0 &&
          assessments.some((assessment) =>
            selectedAssessments.includes(assessment)
          )) ||
        (selectedSubjects.length > 0 &&
          subjects.some((subject) => selectedSubjects.includes(subject)))
      );
    });
  }, [
    filteredLevels,
    filteredTopics,
    filteredPapers,
    filteredAssessments,
    filteredSubjects,
    worksheets,
  ]);

  // Only update filteredWorksheets when the filtered result changes
  useEffect(() => {
    setFilteredWorksheets(filtered);
    setIsChanged(true);
  }, [filtered]);

  const updateFilter = (filterType: string, values: Option[]) => {
    switch (filterType) {
      case "levels":
        setfilteredLevels(values);
        break;
      case "topics":
        setfilteredTopics(values);
        break;
      case "papers":
        setfilteredPapers(values);
        break;
      case "assessments":
        setfilteredAssessments(values);
        break;
      case "subjects":
        setfilteredSubjects(values);
        break;
      default:
        break;
    }
  };

  // Filtered options based on selections
  const levelOptions = useMemo(() => {
    const levels = new Set();
    worksheets.forEach((w) => {
      w.worksheets_to_questions.forEach((wtq) => {
        levels.add(wtq.question.level.level);
      });
    });
    return (
      Array.from(levels).map((level) => ({
        value: level,
        label: level,
      })) || []
    );
  }, [worksheets]);

  const topicOptions = useMemo(() => {
    const topics = new Set();
    worksheets.forEach((w) => {
      w.worksheets_to_questions.forEach((wtq) => {
        wtq.question.question_topics.forEach((qt) =>
          topics.add(qt.topic.topicname)
        );
      });
    });
    return Array.from(topics).map((topic) => ({
      value: topic,
      label: topic,
    }));
  }, [worksheets]);

  const paperOptions = useMemo(() => {
    const papers = new Set();
    worksheets.forEach((w) => {
      w.worksheets_to_questions.forEach((wtq) => {
        papers.add(wtq.question.paper.paper);
      });
    });
    return Array.from(papers).map((paper) => ({
      value: paper,
      label: paper,
    }));
  }, [worksheets]);

  const assessmentOptions = useMemo(() => {
    const assessments = new Set();
    worksheets.forEach((w) => {
      w.worksheets_to_questions.forEach((wtq) => {
        assessments.add(wtq.question.assessment.assessmentname);
      });
    });
    return Array.from(assessments).map((assessment) => ({
      value: assessment,
      label: assessment,
    }));
  }, [worksheets]);

  const subjectOptions = useMemo(() => {
    const subjects = new Set();
    worksheets.forEach((w) => {
      w.worksheets_to_questions.forEach((wtq) => {
        wtq.question.question_topics.forEach((qt) =>
          subjects.add(qt.topic.subject.subject)
        );
      });
    });
    return Array.from(subjects).map((subject) => ({
      value: subject,
      label: subject,
    }));
  }, [worksheets]);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <CustomSelect
        {...commonSelectSettings}
        setValues={setfilteredLevels}
        haveSelectAll
        isLoading={false}
        placeholder="Levels"
        isSearchable={false}
        isMulti
        value={filteredLevels}
        onChange={(filteredLevels: Option[]) => {
          updateFilter("levels", filteredLevels || []);
        }}
        options={levelOptions}
        includeFooter={false}
      />

      <CustomSelect
        {...commonSelectSettings}
        setValues={setfilteredSubjects}
        haveSelectAll
        isLoading={false}
        placeholder="Subjects"
        isSearchable={false}
        isMulti
        value={filteredSubjects}
        onChange={(filteredSubjects: Option[]) => {
          updateFilter("subjects", filteredSubjects || []);
        }}
        options={subjectOptions}
        includeFooter={false}
      />

      <CustomSelect
        {...commonSelectSettings}
        setValues={setfilteredTopics}
        haveSelectAll
        isLoading={false}
        placeholder="Topics"
        isSearchable
        isMulti
        value={filteredTopics}
        onChange={(filteredTopics: Option[]) => {
          updateFilter("topics", filteredTopics || []);
        }}
        options={topicOptions}
        includeFooter={false}
      />

      <CustomSelect
        {...commonSelectSettings}
        setValues={setfilteredPapers}
        haveSelectAll
        isLoading={false}
        placeholder="Papers"
        isSearchable={false}
        isMulti
        value={filteredPapers}
        onChange={(filteredPapers: Option[]) => {
          updateFilter("papers", filteredPapers || []);
        }}
        options={paperOptions}
        includeFooter={false}
      />

      <CustomSelect
        {...commonSelectSettings}
        setValues={setfilteredAssessments}
        haveSelectAll
        isLoading={false}
        placeholder="Assessments"
        isSearchable={false}
        isMulti
        value={filteredAssessments}
        onChange={(filteredAssessments: Option[]) => {
          updateFilter("assessments", filteredAssessments || []);
        }}
        options={assessmentOptions}
        includeFooter={false}
      />
    </div>
  );
}
