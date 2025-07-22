import { gql } from "../../__generated__/gql";

export const GET_WORKSHEET_BY_ID = gql(`
query GetWorksheetById($worksheetId: Int!) {
  worksheets(where: {
    id:  {
       _eq: $worksheetId
    }
  }) {
    creator
    questions_order
  }
}
`);

export const GET_QUESTION_IMAGES = gql(`
query GetQuestionImages($ids: [String!]) {
  questions(
    where: {
        id: {_in: $ids}
    }
  ) {
    id
    answerimgs {
      answerimgid
      answerimgname
    }
    questionimgs {
      questionimgid
      questionimgname
    }
    paper {
      paper
    }
  }
}
`);

export const GET_PUBLISHED_STATUS = gql(`
query GetPublishedStatus($authorId: String!, $worksheetId: Int!) {
  published_worksheets(
    where: {
      author_id: {_eq: $authorId},
      worksheet_id: {_eq: $worksheetId}
    }
  ) {
    published
  }
}
`);

export const PUBLISH_WORKSHEET = gql(`
mutation PublishWorksheet($authorId: String!, $worksheetId: Int!) {
  insert_published_worksheets(
    objects: [
      {
        author_id: $authorId,
        worksheet_id: $worksheetId,
        published: true
      }
    ]
  ) {
    affected_rows
    returning {
      worksheet_id
    }
  }
}
`);

export const SET_PUBLISHED_STATUS = gql(`
mutation UpdatePublishedStatus($authorId: String!, $worksheetId: Int!, $published: Boolean!) {
  update_published_worksheets(
    where: {
      author_id: {_eq: $authorId},
      worksheet_id: {_eq: $worksheetId},
    }
		_set: {
      published: $published
    }
  ) {
    affected_rows
    returning {
      worksheet_id
    }
  }
}
`);

export const GET_CUSTOM_ANSWER = gql(`
query GetCustomAnswer($authorId: String!, $questionId: String!) {
  custom_answers_for_worksheets(
    where: {
      author_id: {_eq: $authorId},
      question_id: {_eq: $questionId}
    }
  ) {
    answer
  }
}
`);

export const INSERT_CUSTOM_ANSWER = gql(`
mutation InsertCustomAnswer(
  $authorId: String!
  $questionId: String!
  $answerJson: json!
) {
  insert_custom_answers_for_worksheets(
    objects: [
      {
        author_id: $authorId,
        question_id: $questionId,
        answer: $answerJson
      }
    ]
  ) {
    affected_rows
    returning {
      question_id
    }
  }
}
`);

export const UPDATE_CUSTOM_ANSWER = gql(`
mutation UpdateCustomAnswer($authorId: String!, $questionId: String!, $answerJson: json!) {
  update_custom_answers_for_worksheets(
    where: {
      author_id: {_eq: $authorId},
      question_id: {_eq: $questionId}
    }
    _set: {
      answer: $answerJson
    }
  ) {
    affected_rows
    returning {
      question_id
    }
  }
}
`);

export const DELETE_CUSTOM_ANSWER = gql(`
mutation DeleteCustomAnswer(
  $authorId: String!,
  $questionId: String!
) {
  delete_custom_answers_for_worksheets(
    where: {
      author_id: {_eq: $authorId},
      question_id: {_eq: $questionId}
    }
  ) {
    affected_rows
    returning {
      question_id
    }
  }
}
`);
