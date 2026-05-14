import { makeVar } from "@apollo/client";
import { gql } from "../../__generated__/gql";

const getCleanValueForStorage = (value: unknown) => {
  return typeof value === "string" ? value : JSON.stringify(value);
};

const makeVarPersisted = (initialValue: any, storageName: string) => {
  let value = initialValue;

  // Try to fetch the value from local storage
  const previousValue = localStorage.getItem(storageName);
  if (previousValue !== null) {
    try {
      const parsed = JSON.parse(previousValue);
      value = parsed;
    } catch {
      // It wasn't JSON, assume a valid value
      value = previousValue as unknown;
    }
  }

  // Create a reactive var with stored/initial value
  const rv = makeVar(value);

  const onNextChange = (newValue: any) => {
    try {
      // Try to add the value to local storage
      if (newValue === undefined) {
        localStorage.removeItem(storageName);
      } else {
        localStorage.setItem(storageName, getCleanValueForStorage(newValue));
      }
    } catch (e) {
      console.error(e);
    }

    // Re-register for the next change
    rv.onNextChange(onNextChange);
  };

  // Register for the first change
  rv.onNextChange(onNextChange);

  return rv;
};

export const cartItemsVar = makeVarPersisted([], "cartItems");

export const isReorderModeVar = makeVar(false);

export const GET_QUESTIONS_BY_ID = gql(`
query GetQuestionsById($ids: [String!]) {
  questions(
    where: {
        id: {_in: $ids}
    }
  ) {
    answerimgs {
      answerimgname
      answerimgid
    }
    questionimgs {
      questionimgname
      questionimgid
    }
    assessment {
      assessmentname
    }
    level {
      level
    }
    paper {
      paper
    }
    school {
      schoolname
    }
    id
    mcqanswer
    question_topics {
      topic {
        topicname
      }
    }
  }
}
`);

// isInCart @client

export const GET_FREE_WORKSHEETS_LEFT = gql(`
  query GetFreeWorksheetsLeft($userid: String!) {
    users(where: { id: { _eq: $userid } }) {
      free_worksheets_count
    }
  }
`);

export const DECREMENT_FREE_WORKSHEETS = gql(`
  mutation DecrementFreeWorksheets($userid: String!) {
    update_users_by_pk(
      pk_columns: { id: $userid }
      _inc: { free_worksheets_count: -1 }
    ) {
      id
      free_worksheets_count
    }
  }
`);

export const CREATE_WORKSHEET = gql(`
  mutation CreateWorksheet($name: String!, $questions_order: [String!]!) {
    insert_worksheets_one(object: {
      name: $name,
      questions_order: $questions_order
    }) {
      id
      name
      created
    }
  }
`);

export const CREATE_WORKSHEET_QUESTIONS = gql(`
  mutation CreateWorksheetQuestions($objects: [worksheets_to_questions_insert_input!]!) {
    insert_worksheets_to_questions(objects: $objects) {
      affected_rows
      returning {
        worksheet_id
        question_id
      }
    }
  }
`);
