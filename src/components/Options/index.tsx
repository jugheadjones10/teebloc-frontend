import { useQuery } from "@apollo/client";
import { OnChangeValue } from "react-select";
import CustomSelect from "../CusomSelect";
import Questions from "../Questions";
import {
  GET_ASSESSMENTS,
  GET_LEVELS,
  GET_PAPERS,
  GET_QUESTIONS,
  GET_SCHOOLS,
  GET_SUBJECTS,
  GET_TOPICS,
} from "./data";
import { useBatchQueryParamState, useQueryParamsState } from "./hook";

interface Option {
  readonly value: string;
  readonly label: string;
}

const commonSelectSettings = {
  hideSelectedOptions: false,
  isClearable: true,
  isSearchable: true,
  closeMenuOnSelect: false,
  styles: {
    container: (baseStyles) => ({
      ...baseStyles,
      display: "flex",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "black",
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      whiteSpace: "nowrap",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      display: "flex",
      width: "fit-content",
      flexDirection: "column",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      display: "flex",
      width: "100%",
      flexDirection: "column",
    }),
  },
};

export default function Options() {
  // Subjects
  const { loading, error, data } = useQuery(GET_SUBJECTS);
  // const [selectedSubject, setSelectedSubject] = useState<Option>();
  let [selectedSubject, setSelectedSubject] = useQueryParamsState("subject");

  // Topics
  const {
    loading: t_loading,
    error: t_error,
    data: t_data,
  } = useQuery(GET_TOPICS, {
    variables: { subject: selectedSubject?.value || "" },
  });
  const [selectedTopics, setSelectedTopics] = useQueryParamsState("topics", []);

  // Levels
  const {
    loading: l_loading,
    error: l_error,
    data: l_data,
  } = useQuery(GET_LEVELS, {
    variables: { subject: selectedSubject?.value || "" },
  });
  const [selectedLevels, setSelectedLevels] = useQueryParamsState("levels", []);

  // Papers
  const {
    loading: p_loading,
    error: p_error,
    data: p_data,
  } = useQuery(GET_PAPERS, {
    variables: {
      subject: selectedSubject?.value || "",
    },
  });
  const [selectedPapers, setSelectedPapers] = useQueryParamsState("papers", []);

  // Assessments
  const {
    loading: a_loading,
    error: a_error,
    data: a_data,
  } = useQuery(GET_ASSESSMENTS, {
    variables: {
      levels: selectedLevels?.map((l) => l.value) || [],
    },
  });
  const [selectedAssessments, setSelectedAssessments] = useQueryParamsState(
    "assessments",
    []
  );

  // Schools
  const {
    loading: s_loading,
    error: s_error,
    data: s_data,
  } = useQuery(GET_SCHOOLS, {
    variables: {
      subject: selectedSubject?.value || "",
    },
  });
  const [selectedSchools, setSelectedSchools] = useQueryParamsState(
    "schools",
    []
  );

  // Questions
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

  const setBatchQuery = useBatchQueryParamState();

  if (error || t_error || l_error || p_error || a_error || s_error || q_error) {
    console.log(error, t_error, l_error, p_error, a_error, s_error, q_error);
    return `Error! ${error}`;
  }

  return (
    <div className="mx-8 flex flex-wrap gap-8 flex-col">
      <div className="my-2 flex flex-col justify-start gap-2">
        <CustomSelect
          {...commonSelectSettings}
          isClearable={false}
          isLoading={loading}
          placeholder="Subject"
          value={selectedSubject}
          onChange={(selectedOption) => {
            setBatchQuery({
              subject: selectedOption.value,
            });
          }}
          options={
            data &&
            data.subjects.map((s) => {
              return { value: s.subject, label: s.subject };
            })
          }
        />
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedTopics}
          haveSelectAll
          isLoading={t_loading}
          placeholder="Topics"
          isMulti
          value={selectedTopics}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            selectedOptions && setSelectedTopics(selectedOptions);
          }}
          options={
            t_data &&
            t_data.topics.map((s) => {
              return { value: s.topicname, label: s.topicname };
            })
          }
        />
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedLevels}
          haveSelectAll
          isLoading={l_loading}
          placeholder="Levels"
          isMulti
          value={selectedLevels}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            selectedOptions && setSelectedLevels(selectedOptions);
          }}
          options={
            l_data &&
            l_data.levels.map((s) => {
              return { value: s.level, label: s.level };
            })
          }
        />
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedPapers}
          haveSelectAll
          isLoading={p_loading}
          placeholder="Papers"
          isMulti
          value={selectedPapers}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            selectedOptions && setSelectedPapers(selectedOptions);
          }}
          options={
            p_data &&
            p_data.papers.map((s) => {
              return { value: s.paper, label: s.paper };
            })
          }
        />
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedAssessments}
          haveSelectAll
          isLoading={a_loading}
          placeholder="Assessments"
          isMulti
          value={selectedAssessments}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            selectedOptions && setSelectedAssessments(selectedOptions);
          }}
          options={
            a_data &&
            a_data.assessments.map((s) => {
              return { value: s.assessmentname, label: s.assessmentname };
            })
          }
        />
        <CustomSelect
          {...commonSelectSettings}
          setValues={setSelectedSchools}
          haveSelectAll
          isLoading={s_loading}
          placeholder="Schools"
          isMulti
          value={selectedSchools}
          onChange={(selectedOptions: OnChangeValue<Option, true>) => {
            selectedOptions && setSelectedSchools(selectedOptions);
          }}
          options={
            s_data &&
            s_data.schools.map((s) => {
              return { value: s.schoolname, label: s.schoolname };
            })
          }
        />
      </div>

      {/* We only want to show the top loading spinner when no questions have been
      loaded yet. Once some questions have been loaded, the bottom "load more"
      button will be the one doing the loading. */}
      {q_loading && (q_data?.questions || []).length === 0 && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {q_data && <div>{q_data.questions.length} results</div>}

      <Questions
        questions={q_data?.questions || []}
        loading={q_loading}
        onLoadMore={() => {
          fetchMore({
            variables: {
              offset: q_data?.questions.length,
            },
          });
        }}
      />
    </div>
  );
}