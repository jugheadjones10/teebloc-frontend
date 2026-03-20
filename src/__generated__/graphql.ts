/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bpchar: { input: any; output: any; }
  bytea: { input: any; output: any; }
  json: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "answerimgs" */
export type Answerimgs = {
  __typename?: 'answerimgs';
  answerimg: Scalars['bytea']['output'];
  answerimgid: Scalars['bigint']['output'];
  answerimgname: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
};

/** aggregated selection of "answerimgs" */
export type Answerimgs_Aggregate = {
  __typename?: 'answerimgs_aggregate';
  aggregate?: Maybe<Answerimgs_Aggregate_Fields>;
  nodes: Array<Answerimgs>;
};

export type Answerimgs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Answerimgs_Aggregate_Bool_Exp_Count>;
};

export type Answerimgs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Answerimgs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Answerimgs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "answerimgs" */
export type Answerimgs_Aggregate_Fields = {
  __typename?: 'answerimgs_aggregate_fields';
  avg?: Maybe<Answerimgs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Answerimgs_Max_Fields>;
  min?: Maybe<Answerimgs_Min_Fields>;
  stddev?: Maybe<Answerimgs_Stddev_Fields>;
  stddev_pop?: Maybe<Answerimgs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Answerimgs_Stddev_Samp_Fields>;
  sum?: Maybe<Answerimgs_Sum_Fields>;
  var_pop?: Maybe<Answerimgs_Var_Pop_Fields>;
  var_samp?: Maybe<Answerimgs_Var_Samp_Fields>;
  variance?: Maybe<Answerimgs_Variance_Fields>;
};


/** aggregate fields of "answerimgs" */
export type Answerimgs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Answerimgs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "answerimgs" */
export type Answerimgs_Aggregate_Order_By = {
  avg?: InputMaybe<Answerimgs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answerimgs_Max_Order_By>;
  min?: InputMaybe<Answerimgs_Min_Order_By>;
  stddev?: InputMaybe<Answerimgs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Answerimgs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Answerimgs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Answerimgs_Sum_Order_By>;
  var_pop?: InputMaybe<Answerimgs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Answerimgs_Var_Samp_Order_By>;
  variance?: InputMaybe<Answerimgs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "answerimgs" */
export type Answerimgs_Arr_Rel_Insert_Input = {
  data: Array<Answerimgs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Answerimgs_On_Conflict>;
};

/** aggregate avg on columns */
export type Answerimgs_Avg_Fields = {
  __typename?: 'answerimgs_avg_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "answerimgs" */
export type Answerimgs_Avg_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "answerimgs". All fields are combined with a logical 'AND'. */
export type Answerimgs_Bool_Exp = {
  _and?: InputMaybe<Array<Answerimgs_Bool_Exp>>;
  _not?: InputMaybe<Answerimgs_Bool_Exp>;
  _or?: InputMaybe<Array<Answerimgs_Bool_Exp>>;
  answerimg?: InputMaybe<Bytea_Comparison_Exp>;
  answerimgid?: InputMaybe<Bigint_Comparison_Exp>;
  answerimgname?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "answerimgs" */
export enum Answerimgs_Constraint {
  /** unique or primary key constraint on columns "answerimgid" */
  AnswerimgsPkey = 'answerimgs_pkey'
}

/** input type for incrementing numeric columns in table "answerimgs" */
export type Answerimgs_Inc_Input = {
  answerimgid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "answerimgs" */
export type Answerimgs_Insert_Input = {
  answerimg?: InputMaybe<Scalars['bytea']['input']>;
  answerimgid?: InputMaybe<Scalars['bigint']['input']>;
  answerimgname?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Answerimgs_Max_Fields = {
  __typename?: 'answerimgs_max_fields';
  answerimgid?: Maybe<Scalars['bigint']['output']>;
  answerimgname?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "answerimgs" */
export type Answerimgs_Max_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
  answerimgname?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Answerimgs_Min_Fields = {
  __typename?: 'answerimgs_min_fields';
  answerimgid?: Maybe<Scalars['bigint']['output']>;
  answerimgname?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "answerimgs" */
export type Answerimgs_Min_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
  answerimgname?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "answerimgs" */
export type Answerimgs_Mutation_Response = {
  __typename?: 'answerimgs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Answerimgs>;
};

/** on_conflict condition type for table "answerimgs" */
export type Answerimgs_On_Conflict = {
  constraint: Answerimgs_Constraint;
  update_columns?: Array<Answerimgs_Update_Column>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};

/** Ordering options when selecting data from "answerimgs". */
export type Answerimgs_Order_By = {
  answerimg?: InputMaybe<Order_By>;
  answerimgid?: InputMaybe<Order_By>;
  answerimgname?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: answerimgs */
export type Answerimgs_Pk_Columns_Input = {
  answerimgid: Scalars['bigint']['input'];
};

/** select columns of table "answerimgs" */
export enum Answerimgs_Select_Column {
  /** column name */
  Answerimg = 'answerimg',
  /** column name */
  Answerimgid = 'answerimgid',
  /** column name */
  Answerimgname = 'answerimgname',
  /** column name */
  Questionid = 'questionid'
}

/** input type for updating data in table "answerimgs" */
export type Answerimgs_Set_Input = {
  answerimg?: InputMaybe<Scalars['bytea']['input']>;
  answerimgid?: InputMaybe<Scalars['bigint']['input']>;
  answerimgname?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Answerimgs_Stddev_Fields = {
  __typename?: 'answerimgs_stddev_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "answerimgs" */
export type Answerimgs_Stddev_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Answerimgs_Stddev_Pop_Fields = {
  __typename?: 'answerimgs_stddev_pop_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "answerimgs" */
export type Answerimgs_Stddev_Pop_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Answerimgs_Stddev_Samp_Fields = {
  __typename?: 'answerimgs_stddev_samp_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "answerimgs" */
export type Answerimgs_Stddev_Samp_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "answerimgs" */
export type Answerimgs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Answerimgs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Answerimgs_Stream_Cursor_Value_Input = {
  answerimg?: InputMaybe<Scalars['bytea']['input']>;
  answerimgid?: InputMaybe<Scalars['bigint']['input']>;
  answerimgname?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Answerimgs_Sum_Fields = {
  __typename?: 'answerimgs_sum_fields';
  answerimgid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "answerimgs" */
export type Answerimgs_Sum_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** update columns of table "answerimgs" */
export enum Answerimgs_Update_Column {
  /** column name */
  Answerimg = 'answerimg',
  /** column name */
  Answerimgid = 'answerimgid',
  /** column name */
  Answerimgname = 'answerimgname',
  /** column name */
  Questionid = 'questionid'
}

export type Answerimgs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Answerimgs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answerimgs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Answerimgs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Answerimgs_Var_Pop_Fields = {
  __typename?: 'answerimgs_var_pop_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "answerimgs" */
export type Answerimgs_Var_Pop_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Answerimgs_Var_Samp_Fields = {
  __typename?: 'answerimgs_var_samp_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "answerimgs" */
export type Answerimgs_Var_Samp_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Answerimgs_Variance_Fields = {
  __typename?: 'answerimgs_variance_fields';
  answerimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "answerimgs" */
export type Answerimgs_Variance_Order_By = {
  answerimgid?: InputMaybe<Order_By>;
};

/** columns and relationships of "assessment_level" */
export type Assessment_Level = {
  __typename?: 'assessment_level';
  /** An object relationship */
  assessment: Assessments;
  assessmentid: Scalars['bigint']['output'];
  /** An object relationship */
  level: Levels;
  levelid: Scalars['bigint']['output'];
};

/** aggregated selection of "assessment_level" */
export type Assessment_Level_Aggregate = {
  __typename?: 'assessment_level_aggregate';
  aggregate?: Maybe<Assessment_Level_Aggregate_Fields>;
  nodes: Array<Assessment_Level>;
};

export type Assessment_Level_Aggregate_Bool_Exp = {
  count?: InputMaybe<Assessment_Level_Aggregate_Bool_Exp_Count>;
};

export type Assessment_Level_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assessment_Level_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "assessment_level" */
export type Assessment_Level_Aggregate_Fields = {
  __typename?: 'assessment_level_aggregate_fields';
  avg?: Maybe<Assessment_Level_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Assessment_Level_Max_Fields>;
  min?: Maybe<Assessment_Level_Min_Fields>;
  stddev?: Maybe<Assessment_Level_Stddev_Fields>;
  stddev_pop?: Maybe<Assessment_Level_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assessment_Level_Stddev_Samp_Fields>;
  sum?: Maybe<Assessment_Level_Sum_Fields>;
  var_pop?: Maybe<Assessment_Level_Var_Pop_Fields>;
  var_samp?: Maybe<Assessment_Level_Var_Samp_Fields>;
  variance?: Maybe<Assessment_Level_Variance_Fields>;
};


/** aggregate fields of "assessment_level" */
export type Assessment_Level_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "assessment_level" */
export type Assessment_Level_Aggregate_Order_By = {
  avg?: InputMaybe<Assessment_Level_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assessment_Level_Max_Order_By>;
  min?: InputMaybe<Assessment_Level_Min_Order_By>;
  stddev?: InputMaybe<Assessment_Level_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Assessment_Level_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assessment_Level_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assessment_Level_Sum_Order_By>;
  var_pop?: InputMaybe<Assessment_Level_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assessment_Level_Var_Samp_Order_By>;
  variance?: InputMaybe<Assessment_Level_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "assessment_level" */
export type Assessment_Level_Arr_Rel_Insert_Input = {
  data: Array<Assessment_Level_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Assessment_Level_On_Conflict>;
};

/** aggregate avg on columns */
export type Assessment_Level_Avg_Fields = {
  __typename?: 'assessment_level_avg_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "assessment_level" */
export type Assessment_Level_Avg_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assessment_level". All fields are combined with a logical 'AND'. */
export type Assessment_Level_Bool_Exp = {
  _and?: InputMaybe<Array<Assessment_Level_Bool_Exp>>;
  _not?: InputMaybe<Assessment_Level_Bool_Exp>;
  _or?: InputMaybe<Array<Assessment_Level_Bool_Exp>>;
  assessment?: InputMaybe<Assessments_Bool_Exp>;
  assessmentid?: InputMaybe<Bigint_Comparison_Exp>;
  level?: InputMaybe<Levels_Bool_Exp>;
  levelid?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "assessment_level" */
export enum Assessment_Level_Constraint {
  /** unique or primary key constraint on columns "assessmentid", "levelid" */
  AssessmentLevelPkey = 'assessment_level_pkey'
}

/** input type for incrementing numeric columns in table "assessment_level" */
export type Assessment_Level_Inc_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "assessment_level" */
export type Assessment_Level_Insert_Input = {
  assessment?: InputMaybe<Assessments_Obj_Rel_Insert_Input>;
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  level?: InputMaybe<Levels_Obj_Rel_Insert_Input>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Assessment_Level_Max_Fields = {
  __typename?: 'assessment_level_max_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "assessment_level" */
export type Assessment_Level_Max_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assessment_Level_Min_Fields = {
  __typename?: 'assessment_level_min_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "assessment_level" */
export type Assessment_Level_Min_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assessment_level" */
export type Assessment_Level_Mutation_Response = {
  __typename?: 'assessment_level_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessment_Level>;
};

/** on_conflict condition type for table "assessment_level" */
export type Assessment_Level_On_Conflict = {
  constraint: Assessment_Level_Constraint;
  update_columns?: Array<Assessment_Level_Update_Column>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};

/** Ordering options when selecting data from "assessment_level". */
export type Assessment_Level_Order_By = {
  assessment?: InputMaybe<Assessments_Order_By>;
  assessmentid?: InputMaybe<Order_By>;
  level?: InputMaybe<Levels_Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assessment_level */
export type Assessment_Level_Pk_Columns_Input = {
  assessmentid: Scalars['bigint']['input'];
  levelid: Scalars['bigint']['input'];
};

/** select columns of table "assessment_level" */
export enum Assessment_Level_Select_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Levelid = 'levelid'
}

/** input type for updating data in table "assessment_level" */
export type Assessment_Level_Set_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Assessment_Level_Stddev_Fields = {
  __typename?: 'assessment_level_stddev_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "assessment_level" */
export type Assessment_Level_Stddev_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assessment_Level_Stddev_Pop_Fields = {
  __typename?: 'assessment_level_stddev_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "assessment_level" */
export type Assessment_Level_Stddev_Pop_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assessment_Level_Stddev_Samp_Fields = {
  __typename?: 'assessment_level_stddev_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "assessment_level" */
export type Assessment_Level_Stddev_Samp_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "assessment_level" */
export type Assessment_Level_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assessment_Level_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assessment_Level_Stream_Cursor_Value_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Assessment_Level_Sum_Fields = {
  __typename?: 'assessment_level_sum_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "assessment_level" */
export type Assessment_Level_Sum_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** update columns of table "assessment_level" */
export enum Assessment_Level_Update_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Levelid = 'levelid'
}

export type Assessment_Level_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Assessment_Level_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Assessment_Level_Set_Input>;
  /** filter the rows which have to be updated */
  where: Assessment_Level_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assessment_Level_Var_Pop_Fields = {
  __typename?: 'assessment_level_var_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "assessment_level" */
export type Assessment_Level_Var_Pop_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assessment_Level_Var_Samp_Fields = {
  __typename?: 'assessment_level_var_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "assessment_level" */
export type Assessment_Level_Var_Samp_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Assessment_Level_Variance_Fields = {
  __typename?: 'assessment_level_variance_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "assessment_level" */
export type Assessment_Level_Variance_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
};

/** columns and relationships of "assessments" */
export type Assessments = {
  __typename?: 'assessments';
  /** An array relationship */
  assessment_levels: Array<Assessment_Level>;
  /** An aggregate relationship */
  assessment_levels_aggregate: Assessment_Level_Aggregate;
  assessmentid: Scalars['bigint']['output'];
  assessmentname: Scalars['String']['output'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
};


/** columns and relationships of "assessments" */
export type AssessmentsAssessment_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


/** columns and relationships of "assessments" */
export type AssessmentsAssessment_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


/** columns and relationships of "assessments" */
export type AssessmentsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "assessments" */
export type AssessmentsQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** aggregated selection of "assessments" */
export type Assessments_Aggregate = {
  __typename?: 'assessments_aggregate';
  aggregate?: Maybe<Assessments_Aggregate_Fields>;
  nodes: Array<Assessments>;
};

/** aggregate fields of "assessments" */
export type Assessments_Aggregate_Fields = {
  __typename?: 'assessments_aggregate_fields';
  avg?: Maybe<Assessments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Assessments_Max_Fields>;
  min?: Maybe<Assessments_Min_Fields>;
  stddev?: Maybe<Assessments_Stddev_Fields>;
  stddev_pop?: Maybe<Assessments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assessments_Stddev_Samp_Fields>;
  sum?: Maybe<Assessments_Sum_Fields>;
  var_pop?: Maybe<Assessments_Var_Pop_Fields>;
  var_samp?: Maybe<Assessments_Var_Samp_Fields>;
  variance?: Maybe<Assessments_Variance_Fields>;
};


/** aggregate fields of "assessments" */
export type Assessments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assessments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Assessments_Avg_Fields = {
  __typename?: 'assessments_avg_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "assessments". All fields are combined with a logical 'AND'. */
export type Assessments_Bool_Exp = {
  _and?: InputMaybe<Array<Assessments_Bool_Exp>>;
  _not?: InputMaybe<Assessments_Bool_Exp>;
  _or?: InputMaybe<Array<Assessments_Bool_Exp>>;
  assessment_levels?: InputMaybe<Assessment_Level_Bool_Exp>;
  assessment_levels_aggregate?: InputMaybe<Assessment_Level_Aggregate_Bool_Exp>;
  assessmentid?: InputMaybe<Bigint_Comparison_Exp>;
  assessmentname?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "assessments" */
export enum Assessments_Constraint {
  /** unique or primary key constraint on columns "assessmentname" */
  AssessmentsAssessmentnameKey = 'assessments_assessmentname_key',
  /** unique or primary key constraint on columns "assessmentid" */
  AssessmentsPkey = 'assessments_pkey'
}

/** input type for incrementing numeric columns in table "assessments" */
export type Assessments_Inc_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "assessments" */
export type Assessments_Insert_Input = {
  assessment_levels?: InputMaybe<Assessment_Level_Arr_Rel_Insert_Input>;
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  assessmentname?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Assessments_Max_Fields = {
  __typename?: 'assessments_max_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  assessmentname?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Assessments_Min_Fields = {
  __typename?: 'assessments_min_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  assessmentname?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "assessments" */
export type Assessments_Mutation_Response = {
  __typename?: 'assessments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Assessments>;
};

/** input type for inserting object relation for remote table "assessments" */
export type Assessments_Obj_Rel_Insert_Input = {
  data: Assessments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Assessments_On_Conflict>;
};

/** on_conflict condition type for table "assessments" */
export type Assessments_On_Conflict = {
  constraint: Assessments_Constraint;
  update_columns?: Array<Assessments_Update_Column>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};

/** Ordering options when selecting data from "assessments". */
export type Assessments_Order_By = {
  assessment_levels_aggregate?: InputMaybe<Assessment_Level_Aggregate_Order_By>;
  assessmentid?: InputMaybe<Order_By>;
  assessmentname?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
};

/** primary key columns input for table: assessments */
export type Assessments_Pk_Columns_Input = {
  assessmentid: Scalars['bigint']['input'];
};

/** select columns of table "assessments" */
export enum Assessments_Select_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Assessmentname = 'assessmentname'
}

/** input type for updating data in table "assessments" */
export type Assessments_Set_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  assessmentname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Assessments_Stddev_Fields = {
  __typename?: 'assessments_stddev_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Assessments_Stddev_Pop_Fields = {
  __typename?: 'assessments_stddev_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Assessments_Stddev_Samp_Fields = {
  __typename?: 'assessments_stddev_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "assessments" */
export type Assessments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assessments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assessments_Stream_Cursor_Value_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  assessmentname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Assessments_Sum_Fields = {
  __typename?: 'assessments_sum_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "assessments" */
export enum Assessments_Update_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Assessmentname = 'assessmentname'
}

export type Assessments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Assessments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Assessments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Assessments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assessments_Var_Pop_Fields = {
  __typename?: 'assessments_var_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Assessments_Var_Samp_Fields = {
  __typename?: 'assessments_var_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Assessments_Variance_Fields = {
  __typename?: 'assessments_variance_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "completedquestions" */
export type Completedquestions = {
  __typename?: 'completedquestions';
  email: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "completedquestions" */
export type Completedquestions_Aggregate = {
  __typename?: 'completedquestions_aggregate';
  aggregate?: Maybe<Completedquestions_Aggregate_Fields>;
  nodes: Array<Completedquestions>;
};

export type Completedquestions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Completedquestions_Aggregate_Bool_Exp_Count>;
};

export type Completedquestions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Completedquestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Completedquestions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "completedquestions" */
export type Completedquestions_Aggregate_Fields = {
  __typename?: 'completedquestions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Completedquestions_Max_Fields>;
  min?: Maybe<Completedquestions_Min_Fields>;
};


/** aggregate fields of "completedquestions" */
export type Completedquestions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Completedquestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "completedquestions" */
export type Completedquestions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Completedquestions_Max_Order_By>;
  min?: InputMaybe<Completedquestions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "completedquestions" */
export type Completedquestions_Arr_Rel_Insert_Input = {
  data: Array<Completedquestions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Completedquestions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "completedquestions". All fields are combined with a logical 'AND'. */
export type Completedquestions_Bool_Exp = {
  _and?: InputMaybe<Array<Completedquestions_Bool_Exp>>;
  _not?: InputMaybe<Completedquestions_Bool_Exp>;
  _or?: InputMaybe<Array<Completedquestions_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "completedquestions" */
export enum Completedquestions_Constraint {
  /** unique or primary key constraint on columns "email", "questionid" */
  CompletedquestionsPkey = 'completedquestions_pkey'
}

/** input type for inserting data into table "completedquestions" */
export type Completedquestions_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Completedquestions_Max_Fields = {
  __typename?: 'completedquestions_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "completedquestions" */
export type Completedquestions_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Completedquestions_Min_Fields = {
  __typename?: 'completedquestions_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "completedquestions" */
export type Completedquestions_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "completedquestions" */
export type Completedquestions_Mutation_Response = {
  __typename?: 'completedquestions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Completedquestions>;
};

/** on_conflict condition type for table "completedquestions" */
export type Completedquestions_On_Conflict = {
  constraint: Completedquestions_Constraint;
  update_columns?: Array<Completedquestions_Update_Column>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};

/** Ordering options when selecting data from "completedquestions". */
export type Completedquestions_Order_By = {
  email?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: completedquestions */
export type Completedquestions_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};

/** select columns of table "completedquestions" */
export enum Completedquestions_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

/** input type for updating data in table "completedquestions" */
export type Completedquestions_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "completedquestions" */
export type Completedquestions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Completedquestions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Completedquestions_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "completedquestions" */
export enum Completedquestions_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

export type Completedquestions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Completedquestions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Completedquestions_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "custom_answer_imgs" */
export type Custom_Answer_Imgs = {
  __typename?: 'custom_answer_imgs';
  author_id: Scalars['String']['output'];
  customanswerimg: Scalars['bytea']['output'];
  customanswerimgid: Scalars['bigint']['output'];
  question_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_answer_imgs" */
export type Custom_Answer_Imgs_Aggregate = {
  __typename?: 'custom_answer_imgs_aggregate';
  aggregate?: Maybe<Custom_Answer_Imgs_Aggregate_Fields>;
  nodes: Array<Custom_Answer_Imgs>;
};

/** aggregate fields of "custom_answer_imgs" */
export type Custom_Answer_Imgs_Aggregate_Fields = {
  __typename?: 'custom_answer_imgs_aggregate_fields';
  avg?: Maybe<Custom_Answer_Imgs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Answer_Imgs_Max_Fields>;
  min?: Maybe<Custom_Answer_Imgs_Min_Fields>;
  stddev?: Maybe<Custom_Answer_Imgs_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Answer_Imgs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Answer_Imgs_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Answer_Imgs_Sum_Fields>;
  var_pop?: Maybe<Custom_Answer_Imgs_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Answer_Imgs_Var_Samp_Fields>;
  variance?: Maybe<Custom_Answer_Imgs_Variance_Fields>;
};


/** aggregate fields of "custom_answer_imgs" */
export type Custom_Answer_Imgs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Answer_Imgs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Answer_Imgs_Avg_Fields = {
  __typename?: 'custom_answer_imgs_avg_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_answer_imgs". All fields are combined with a logical 'AND'. */
export type Custom_Answer_Imgs_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Answer_Imgs_Bool_Exp>>;
  _not?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Answer_Imgs_Bool_Exp>>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  customanswerimg?: InputMaybe<Bytea_Comparison_Exp>;
  customanswerimgid?: InputMaybe<Bigint_Comparison_Exp>;
  question_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_answer_imgs" */
export enum Custom_Answer_Imgs_Constraint {
  /** unique or primary key constraint on columns "customanswerimgid" */
  CustomAnswerImgsPkey = 'custom_answer_imgs_pkey'
}

/** input type for incrementing numeric columns in table "custom_answer_imgs" */
export type Custom_Answer_Imgs_Inc_Input = {
  customanswerimgid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "custom_answer_imgs" */
export type Custom_Answer_Imgs_Insert_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  customanswerimg?: InputMaybe<Scalars['bytea']['input']>;
  customanswerimgid?: InputMaybe<Scalars['bigint']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Answer_Imgs_Max_Fields = {
  __typename?: 'custom_answer_imgs_max_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  customanswerimgid?: Maybe<Scalars['bigint']['output']>;
  question_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Answer_Imgs_Min_Fields = {
  __typename?: 'custom_answer_imgs_min_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  customanswerimgid?: Maybe<Scalars['bigint']['output']>;
  question_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_answer_imgs" */
export type Custom_Answer_Imgs_Mutation_Response = {
  __typename?: 'custom_answer_imgs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Answer_Imgs>;
};

/** on_conflict condition type for table "custom_answer_imgs" */
export type Custom_Answer_Imgs_On_Conflict = {
  constraint: Custom_Answer_Imgs_Constraint;
  update_columns?: Array<Custom_Answer_Imgs_Update_Column>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_answer_imgs". */
export type Custom_Answer_Imgs_Order_By = {
  author_id?: InputMaybe<Order_By>;
  customanswerimg?: InputMaybe<Order_By>;
  customanswerimgid?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_answer_imgs */
export type Custom_Answer_Imgs_Pk_Columns_Input = {
  customanswerimgid: Scalars['bigint']['input'];
};

/** select columns of table "custom_answer_imgs" */
export enum Custom_Answer_Imgs_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Customanswerimg = 'customanswerimg',
  /** column name */
  Customanswerimgid = 'customanswerimgid',
  /** column name */
  QuestionId = 'question_id'
}

/** input type for updating data in table "custom_answer_imgs" */
export type Custom_Answer_Imgs_Set_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  customanswerimg?: InputMaybe<Scalars['bytea']['input']>;
  customanswerimgid?: InputMaybe<Scalars['bigint']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Answer_Imgs_Stddev_Fields = {
  __typename?: 'custom_answer_imgs_stddev_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Answer_Imgs_Stddev_Pop_Fields = {
  __typename?: 'custom_answer_imgs_stddev_pop_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Answer_Imgs_Stddev_Samp_Fields = {
  __typename?: 'custom_answer_imgs_stddev_samp_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_answer_imgs" */
export type Custom_Answer_Imgs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Answer_Imgs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Answer_Imgs_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  customanswerimg?: InputMaybe<Scalars['bytea']['input']>;
  customanswerimgid?: InputMaybe<Scalars['bigint']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Answer_Imgs_Sum_Fields = {
  __typename?: 'custom_answer_imgs_sum_fields';
  customanswerimgid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "custom_answer_imgs" */
export enum Custom_Answer_Imgs_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Customanswerimg = 'customanswerimg',
  /** column name */
  Customanswerimgid = 'customanswerimgid',
  /** column name */
  QuestionId = 'question_id'
}

export type Custom_Answer_Imgs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Answer_Imgs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Answer_Imgs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Answer_Imgs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Answer_Imgs_Var_Pop_Fields = {
  __typename?: 'custom_answer_imgs_var_pop_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Answer_Imgs_Var_Samp_Fields = {
  __typename?: 'custom_answer_imgs_var_samp_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Answer_Imgs_Variance_Fields = {
  __typename?: 'custom_answer_imgs_variance_fields';
  customanswerimgid?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets = {
  __typename?: 'custom_answers_for_worksheets';
  answer: Scalars['json']['output'];
  author_id: Scalars['String']['output'];
  question_id: Scalars['String']['output'];
};


/** columns and relationships of "custom_answers_for_worksheets" */
export type Custom_Answers_For_WorksheetsAnswerArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Aggregate = {
  __typename?: 'custom_answers_for_worksheets_aggregate';
  aggregate?: Maybe<Custom_Answers_For_Worksheets_Aggregate_Fields>;
  nodes: Array<Custom_Answers_For_Worksheets>;
};

/** aggregate fields of "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Aggregate_Fields = {
  __typename?: 'custom_answers_for_worksheets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Answers_For_Worksheets_Max_Fields>;
  min?: Maybe<Custom_Answers_For_Worksheets_Min_Fields>;
};


/** aggregate fields of "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Answers_For_Worksheets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "custom_answers_for_worksheets". All fields are combined with a logical 'AND'. */
export type Custom_Answers_For_Worksheets_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Answers_For_Worksheets_Bool_Exp>>;
  _not?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Answers_For_Worksheets_Bool_Exp>>;
  answer?: InputMaybe<Json_Comparison_Exp>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  question_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Insert_Input = {
  answer?: InputMaybe<Scalars['json']['input']>;
  author_id?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Answers_For_Worksheets_Max_Fields = {
  __typename?: 'custom_answers_for_worksheets_max_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  question_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Answers_For_Worksheets_Min_Fields = {
  __typename?: 'custom_answers_for_worksheets_min_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  question_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Mutation_Response = {
  __typename?: 'custom_answers_for_worksheets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Answers_For_Worksheets>;
};

/** Ordering options when selecting data from "custom_answers_for_worksheets". */
export type Custom_Answers_For_Worksheets_Order_By = {
  answer?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** select columns of table "custom_answers_for_worksheets" */
export enum Custom_Answers_For_Worksheets_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  QuestionId = 'question_id'
}

/** input type for updating data in table "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Set_Input = {
  answer?: InputMaybe<Scalars['json']['input']>;
  author_id?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "custom_answers_for_worksheets" */
export type Custom_Answers_For_Worksheets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Answers_For_Worksheets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Answers_For_Worksheets_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['json']['input']>;
  author_id?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['String']['input']>;
};

export type Custom_Answers_For_Worksheets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Answers_For_Worksheets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Answers_For_Worksheets_Bool_Exp;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** columns and relationships of "levels" */
export type Levels = {
  __typename?: 'levels';
  /** An array relationship */
  assessment_levels: Array<Assessment_Level>;
  /** An aggregate relationship */
  assessment_levels_aggregate: Assessment_Level_Aggregate;
  level: Scalars['String']['output'];
  levelid: Scalars['bigint']['output'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  subject_levels: Array<Subject_Level>;
  /** An aggregate relationship */
  subject_levels_aggregate: Subject_Level_Aggregate;
};


/** columns and relationships of "levels" */
export type LevelsAssessment_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


/** columns and relationships of "levels" */
export type LevelsAssessment_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


/** columns and relationships of "levels" */
export type LevelsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "levels" */
export type LevelsQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "levels" */
export type LevelsSubject_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


/** columns and relationships of "levels" */
export type LevelsSubject_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};

/** aggregated selection of "levels" */
export type Levels_Aggregate = {
  __typename?: 'levels_aggregate';
  aggregate?: Maybe<Levels_Aggregate_Fields>;
  nodes: Array<Levels>;
};

/** aggregate fields of "levels" */
export type Levels_Aggregate_Fields = {
  __typename?: 'levels_aggregate_fields';
  avg?: Maybe<Levels_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Levels_Max_Fields>;
  min?: Maybe<Levels_Min_Fields>;
  stddev?: Maybe<Levels_Stddev_Fields>;
  stddev_pop?: Maybe<Levels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Levels_Stddev_Samp_Fields>;
  sum?: Maybe<Levels_Sum_Fields>;
  var_pop?: Maybe<Levels_Var_Pop_Fields>;
  var_samp?: Maybe<Levels_Var_Samp_Fields>;
  variance?: Maybe<Levels_Variance_Fields>;
};


/** aggregate fields of "levels" */
export type Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Levels_Avg_Fields = {
  __typename?: 'levels_avg_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "levels". All fields are combined with a logical 'AND'. */
export type Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Levels_Bool_Exp>>;
  _not?: InputMaybe<Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Levels_Bool_Exp>>;
  assessment_levels?: InputMaybe<Assessment_Level_Bool_Exp>;
  assessment_levels_aggregate?: InputMaybe<Assessment_Level_Aggregate_Bool_Exp>;
  level?: InputMaybe<String_Comparison_Exp>;
  levelid?: InputMaybe<Bigint_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  subject_levels?: InputMaybe<Subject_Level_Bool_Exp>;
  subject_levels_aggregate?: InputMaybe<Subject_Level_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "levels" */
export enum Levels_Constraint {
  /** unique or primary key constraint on columns "level" */
  LevelsLevelKey = 'levels_level_key',
  /** unique or primary key constraint on columns "levelid" */
  LevelsPkey = 'levels_pkey'
}

/** input type for incrementing numeric columns in table "levels" */
export type Levels_Inc_Input = {
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "levels" */
export type Levels_Insert_Input = {
  assessment_levels?: InputMaybe<Assessment_Level_Arr_Rel_Insert_Input>;
  level?: InputMaybe<Scalars['String']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  subject_levels?: InputMaybe<Subject_Level_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Levels_Max_Fields = {
  __typename?: 'levels_max_fields';
  level?: Maybe<Scalars['String']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Levels_Min_Fields = {
  __typename?: 'levels_min_fields';
  level?: Maybe<Scalars['String']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "levels" */
export type Levels_Mutation_Response = {
  __typename?: 'levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Levels>;
};

/** input type for inserting object relation for remote table "levels" */
export type Levels_Obj_Rel_Insert_Input = {
  data: Levels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};

/** on_conflict condition type for table "levels" */
export type Levels_On_Conflict = {
  constraint: Levels_Constraint;
  update_columns?: Array<Levels_Update_Column>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "levels". */
export type Levels_Order_By = {
  assessment_levels_aggregate?: InputMaybe<Assessment_Level_Aggregate_Order_By>;
  level?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  subject_levels_aggregate?: InputMaybe<Subject_Level_Aggregate_Order_By>;
};

/** primary key columns input for table: levels */
export type Levels_Pk_Columns_Input = {
  levelid: Scalars['bigint']['input'];
};

/** select columns of table "levels" */
export enum Levels_Select_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Levelid = 'levelid'
}

/** input type for updating data in table "levels" */
export type Levels_Set_Input = {
  level?: InputMaybe<Scalars['String']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Levels_Stddev_Fields = {
  __typename?: 'levels_stddev_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Levels_Stddev_Pop_Fields = {
  __typename?: 'levels_stddev_pop_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Levels_Stddev_Samp_Fields = {
  __typename?: 'levels_stddev_samp_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "levels" */
export type Levels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Levels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Levels_Stream_Cursor_Value_Input = {
  level?: InputMaybe<Scalars['String']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Levels_Sum_Fields = {
  __typename?: 'levels_sum_fields';
  levelid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "levels" */
export enum Levels_Update_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Levelid = 'levelid'
}

export type Levels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Levels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Levels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Levels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Levels_Var_Pop_Fields = {
  __typename?: 'levels_var_pop_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Levels_Var_Samp_Fields = {
  __typename?: 'levels_var_samp_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Levels_Variance_Fields = {
  __typename?: 'levels_variance_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "answerimgs" */
  delete_answerimgs?: Maybe<Answerimgs_Mutation_Response>;
  /** delete single row from the table: "answerimgs" */
  delete_answerimgs_by_pk?: Maybe<Answerimgs>;
  /** delete data from the table: "assessment_level" */
  delete_assessment_level?: Maybe<Assessment_Level_Mutation_Response>;
  /** delete single row from the table: "assessment_level" */
  delete_assessment_level_by_pk?: Maybe<Assessment_Level>;
  /** delete data from the table: "assessments" */
  delete_assessments?: Maybe<Assessments_Mutation_Response>;
  /** delete single row from the table: "assessments" */
  delete_assessments_by_pk?: Maybe<Assessments>;
  /** delete data from the table: "completedquestions" */
  delete_completedquestions?: Maybe<Completedquestions_Mutation_Response>;
  /** delete single row from the table: "completedquestions" */
  delete_completedquestions_by_pk?: Maybe<Completedquestions>;
  /** delete data from the table: "custom_answer_imgs" */
  delete_custom_answer_imgs?: Maybe<Custom_Answer_Imgs_Mutation_Response>;
  /** delete single row from the table: "custom_answer_imgs" */
  delete_custom_answer_imgs_by_pk?: Maybe<Custom_Answer_Imgs>;
  /** delete data from the table: "custom_answers_for_worksheets" */
  delete_custom_answers_for_worksheets?: Maybe<Custom_Answers_For_Worksheets_Mutation_Response>;
  /** delete data from the table: "levels" */
  delete_levels?: Maybe<Levels_Mutation_Response>;
  /** delete single row from the table: "levels" */
  delete_levels_by_pk?: Maybe<Levels>;
  /** delete data from the table: "otps" */
  delete_otps?: Maybe<Otps_Mutation_Response>;
  /** delete single row from the table: "otps" */
  delete_otps_by_pk?: Maybe<Otps>;
  /** delete data from the table: "papers" */
  delete_papers?: Maybe<Papers_Mutation_Response>;
  /** delete single row from the table: "papers" */
  delete_papers_by_pk?: Maybe<Papers>;
  /** delete data from the table: "pendingpayments" */
  delete_pendingpayments?: Maybe<Pendingpayments_Mutation_Response>;
  /** delete single row from the table: "pendingpayments" */
  delete_pendingpayments_by_pk?: Maybe<Pendingpayments>;
  /** delete data from the table: "promo_code_redemptions" */
  delete_promo_code_redemptions?: Maybe<Promo_Code_Redemptions_Mutation_Response>;
  /** delete data from the table: "published_worksheets" */
  delete_published_worksheets?: Maybe<Published_Worksheets_Mutation_Response>;
  /** delete data from the table: "pyps" */
  delete_pyps?: Maybe<Pyps_Mutation_Response>;
  /** delete single row from the table: "pyps" */
  delete_pyps_by_pk?: Maybe<Pyps>;
  /** delete data from the table: "question_topic" */
  delete_question_topic?: Maybe<Question_Topic_Mutation_Response>;
  /** delete single row from the table: "question_topic" */
  delete_question_topic_by_pk?: Maybe<Question_Topic>;
  /** delete data from the table: "questionimgs" */
  delete_questionimgs?: Maybe<Questionimgs_Mutation_Response>;
  /** delete single row from the table: "questionimgs" */
  delete_questionimgs_by_pk?: Maybe<Questionimgs>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "reports" */
  delete_reports?: Maybe<Reports_Mutation_Response>;
  /** delete single row from the table: "reports" */
  delete_reports_by_pk?: Maybe<Reports>;
  /** delete data from the table: "savedquestions" */
  delete_savedquestions?: Maybe<Savedquestions_Mutation_Response>;
  /** delete single row from the table: "savedquestions" */
  delete_savedquestions_by_pk?: Maybe<Savedquestions>;
  /** delete data from the table: "school_subject" */
  delete_school_subject?: Maybe<School_Subject_Mutation_Response>;
  /** delete single row from the table: "school_subject" */
  delete_school_subject_by_pk?: Maybe<School_Subject>;
  /** delete data from the table: "schools" */
  delete_schools?: Maybe<Schools_Mutation_Response>;
  /** delete single row from the table: "schools" */
  delete_schools_by_pk?: Maybe<Schools>;
  /** delete data from the table: "subject_level" */
  delete_subject_level?: Maybe<Subject_Level_Mutation_Response>;
  /** delete single row from the table: "subject_level" */
  delete_subject_level_by_pk?: Maybe<Subject_Level>;
  /** delete data from the table: "subject_paper" */
  delete_subject_paper?: Maybe<Subject_Paper_Mutation_Response>;
  /** delete single row from the table: "subject_paper" */
  delete_subject_paper_by_pk?: Maybe<Subject_Paper>;
  /** delete data from the table: "subjects" */
  delete_subjects?: Maybe<Subjects_Mutation_Response>;
  /** delete single row from the table: "subjects" */
  delete_subjects_by_pk?: Maybe<Subjects>;
  /** delete data from the table: "subscriptions" */
  delete_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** delete single row from the table: "subscriptions" */
  delete_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** delete data from the table: "temp_worksheets" */
  delete_temp_worksheets?: Maybe<Temp_Worksheets_Mutation_Response>;
  /** delete single row from the table: "temp_worksheets" */
  delete_temp_worksheets_by_pk?: Maybe<Temp_Worksheets>;
  /** delete data from the table: "topics" */
  delete_topics?: Maybe<Topics_Mutation_Response>;
  /** delete single row from the table: "topics" */
  delete_topics_by_pk?: Maybe<Topics>;
  /** delete data from the table: "upvotes" */
  delete_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** delete single row from the table: "upvotes" */
  delete_upvotes_by_pk?: Maybe<Upvotes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "worksheets" */
  delete_worksheets?: Maybe<Worksheets_Mutation_Response>;
  /** delete single row from the table: "worksheets" */
  delete_worksheets_by_pk?: Maybe<Worksheets>;
  /** delete data from the table: "worksheets_to_questions" */
  delete_worksheets_to_questions?: Maybe<Worksheets_To_Questions_Mutation_Response>;
  /** delete single row from the table: "worksheets_to_questions" */
  delete_worksheets_to_questions_by_pk?: Maybe<Worksheets_To_Questions>;
  /** insert data into the table: "answerimgs" */
  insert_answerimgs?: Maybe<Answerimgs_Mutation_Response>;
  /** insert a single row into the table: "answerimgs" */
  insert_answerimgs_one?: Maybe<Answerimgs>;
  /** insert data into the table: "assessment_level" */
  insert_assessment_level?: Maybe<Assessment_Level_Mutation_Response>;
  /** insert a single row into the table: "assessment_level" */
  insert_assessment_level_one?: Maybe<Assessment_Level>;
  /** insert data into the table: "assessments" */
  insert_assessments?: Maybe<Assessments_Mutation_Response>;
  /** insert a single row into the table: "assessments" */
  insert_assessments_one?: Maybe<Assessments>;
  /** insert data into the table: "completedquestions" */
  insert_completedquestions?: Maybe<Completedquestions_Mutation_Response>;
  /** insert a single row into the table: "completedquestions" */
  insert_completedquestions_one?: Maybe<Completedquestions>;
  /** insert data into the table: "custom_answer_imgs" */
  insert_custom_answer_imgs?: Maybe<Custom_Answer_Imgs_Mutation_Response>;
  /** insert a single row into the table: "custom_answer_imgs" */
  insert_custom_answer_imgs_one?: Maybe<Custom_Answer_Imgs>;
  /** insert data into the table: "custom_answers_for_worksheets" */
  insert_custom_answers_for_worksheets?: Maybe<Custom_Answers_For_Worksheets_Mutation_Response>;
  /** insert a single row into the table: "custom_answers_for_worksheets" */
  insert_custom_answers_for_worksheets_one?: Maybe<Custom_Answers_For_Worksheets>;
  /** insert data into the table: "levels" */
  insert_levels?: Maybe<Levels_Mutation_Response>;
  /** insert a single row into the table: "levels" */
  insert_levels_one?: Maybe<Levels>;
  /** insert data into the table: "otps" */
  insert_otps?: Maybe<Otps_Mutation_Response>;
  /** insert a single row into the table: "otps" */
  insert_otps_one?: Maybe<Otps>;
  /** insert data into the table: "papers" */
  insert_papers?: Maybe<Papers_Mutation_Response>;
  /** insert a single row into the table: "papers" */
  insert_papers_one?: Maybe<Papers>;
  /** insert data into the table: "pendingpayments" */
  insert_pendingpayments?: Maybe<Pendingpayments_Mutation_Response>;
  /** insert a single row into the table: "pendingpayments" */
  insert_pendingpayments_one?: Maybe<Pendingpayments>;
  /** insert data into the table: "promo_code_redemptions" */
  insert_promo_code_redemptions?: Maybe<Promo_Code_Redemptions_Mutation_Response>;
  /** insert a single row into the table: "promo_code_redemptions" */
  insert_promo_code_redemptions_one?: Maybe<Promo_Code_Redemptions>;
  /** insert data into the table: "published_worksheets" */
  insert_published_worksheets?: Maybe<Published_Worksheets_Mutation_Response>;
  /** insert a single row into the table: "published_worksheets" */
  insert_published_worksheets_one?: Maybe<Published_Worksheets>;
  /** insert data into the table: "pyps" */
  insert_pyps?: Maybe<Pyps_Mutation_Response>;
  /** insert a single row into the table: "pyps" */
  insert_pyps_one?: Maybe<Pyps>;
  /** insert data into the table: "question_topic" */
  insert_question_topic?: Maybe<Question_Topic_Mutation_Response>;
  /** insert a single row into the table: "question_topic" */
  insert_question_topic_one?: Maybe<Question_Topic>;
  /** insert data into the table: "questionimgs" */
  insert_questionimgs?: Maybe<Questionimgs_Mutation_Response>;
  /** insert a single row into the table: "questionimgs" */
  insert_questionimgs_one?: Maybe<Questionimgs>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "reports" */
  insert_reports?: Maybe<Reports_Mutation_Response>;
  /** insert a single row into the table: "reports" */
  insert_reports_one?: Maybe<Reports>;
  /** insert data into the table: "savedquestions" */
  insert_savedquestions?: Maybe<Savedquestions_Mutation_Response>;
  /** insert a single row into the table: "savedquestions" */
  insert_savedquestions_one?: Maybe<Savedquestions>;
  /** insert data into the table: "school_subject" */
  insert_school_subject?: Maybe<School_Subject_Mutation_Response>;
  /** insert a single row into the table: "school_subject" */
  insert_school_subject_one?: Maybe<School_Subject>;
  /** insert data into the table: "schools" */
  insert_schools?: Maybe<Schools_Mutation_Response>;
  /** insert a single row into the table: "schools" */
  insert_schools_one?: Maybe<Schools>;
  /** insert data into the table: "subject_level" */
  insert_subject_level?: Maybe<Subject_Level_Mutation_Response>;
  /** insert a single row into the table: "subject_level" */
  insert_subject_level_one?: Maybe<Subject_Level>;
  /** insert data into the table: "subject_paper" */
  insert_subject_paper?: Maybe<Subject_Paper_Mutation_Response>;
  /** insert a single row into the table: "subject_paper" */
  insert_subject_paper_one?: Maybe<Subject_Paper>;
  /** insert data into the table: "subjects" */
  insert_subjects?: Maybe<Subjects_Mutation_Response>;
  /** insert a single row into the table: "subjects" */
  insert_subjects_one?: Maybe<Subjects>;
  /** insert data into the table: "subscriptions" */
  insert_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "subscriptions" */
  insert_subscriptions_one?: Maybe<Subscriptions>;
  /** insert data into the table: "temp_worksheets" */
  insert_temp_worksheets?: Maybe<Temp_Worksheets_Mutation_Response>;
  /** insert a single row into the table: "temp_worksheets" */
  insert_temp_worksheets_one?: Maybe<Temp_Worksheets>;
  /** insert data into the table: "topics" */
  insert_topics?: Maybe<Topics_Mutation_Response>;
  /** insert a single row into the table: "topics" */
  insert_topics_one?: Maybe<Topics>;
  /** insert data into the table: "upvotes" */
  insert_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** insert a single row into the table: "upvotes" */
  insert_upvotes_one?: Maybe<Upvotes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "worksheets" */
  insert_worksheets?: Maybe<Worksheets_Mutation_Response>;
  /** insert a single row into the table: "worksheets" */
  insert_worksheets_one?: Maybe<Worksheets>;
  /** insert data into the table: "worksheets_to_questions" */
  insert_worksheets_to_questions?: Maybe<Worksheets_To_Questions_Mutation_Response>;
  /** insert a single row into the table: "worksheets_to_questions" */
  insert_worksheets_to_questions_one?: Maybe<Worksheets_To_Questions>;
  /** update data of the table: "answerimgs" */
  update_answerimgs?: Maybe<Answerimgs_Mutation_Response>;
  /** update single row of the table: "answerimgs" */
  update_answerimgs_by_pk?: Maybe<Answerimgs>;
  /** update multiples rows of table: "answerimgs" */
  update_answerimgs_many?: Maybe<Array<Maybe<Answerimgs_Mutation_Response>>>;
  /** update data of the table: "assessment_level" */
  update_assessment_level?: Maybe<Assessment_Level_Mutation_Response>;
  /** update single row of the table: "assessment_level" */
  update_assessment_level_by_pk?: Maybe<Assessment_Level>;
  /** update multiples rows of table: "assessment_level" */
  update_assessment_level_many?: Maybe<Array<Maybe<Assessment_Level_Mutation_Response>>>;
  /** update data of the table: "assessments" */
  update_assessments?: Maybe<Assessments_Mutation_Response>;
  /** update single row of the table: "assessments" */
  update_assessments_by_pk?: Maybe<Assessments>;
  /** update multiples rows of table: "assessments" */
  update_assessments_many?: Maybe<Array<Maybe<Assessments_Mutation_Response>>>;
  /** update data of the table: "completedquestions" */
  update_completedquestions?: Maybe<Completedquestions_Mutation_Response>;
  /** update single row of the table: "completedquestions" */
  update_completedquestions_by_pk?: Maybe<Completedquestions>;
  /** update multiples rows of table: "completedquestions" */
  update_completedquestions_many?: Maybe<Array<Maybe<Completedquestions_Mutation_Response>>>;
  /** update data of the table: "custom_answer_imgs" */
  update_custom_answer_imgs?: Maybe<Custom_Answer_Imgs_Mutation_Response>;
  /** update single row of the table: "custom_answer_imgs" */
  update_custom_answer_imgs_by_pk?: Maybe<Custom_Answer_Imgs>;
  /** update multiples rows of table: "custom_answer_imgs" */
  update_custom_answer_imgs_many?: Maybe<Array<Maybe<Custom_Answer_Imgs_Mutation_Response>>>;
  /** update data of the table: "custom_answers_for_worksheets" */
  update_custom_answers_for_worksheets?: Maybe<Custom_Answers_For_Worksheets_Mutation_Response>;
  /** update multiples rows of table: "custom_answers_for_worksheets" */
  update_custom_answers_for_worksheets_many?: Maybe<Array<Maybe<Custom_Answers_For_Worksheets_Mutation_Response>>>;
  /** update data of the table: "levels" */
  update_levels?: Maybe<Levels_Mutation_Response>;
  /** update single row of the table: "levels" */
  update_levels_by_pk?: Maybe<Levels>;
  /** update multiples rows of table: "levels" */
  update_levels_many?: Maybe<Array<Maybe<Levels_Mutation_Response>>>;
  /** update data of the table: "otps" */
  update_otps?: Maybe<Otps_Mutation_Response>;
  /** update single row of the table: "otps" */
  update_otps_by_pk?: Maybe<Otps>;
  /** update multiples rows of table: "otps" */
  update_otps_many?: Maybe<Array<Maybe<Otps_Mutation_Response>>>;
  /** update data of the table: "papers" */
  update_papers?: Maybe<Papers_Mutation_Response>;
  /** update single row of the table: "papers" */
  update_papers_by_pk?: Maybe<Papers>;
  /** update multiples rows of table: "papers" */
  update_papers_many?: Maybe<Array<Maybe<Papers_Mutation_Response>>>;
  /** update data of the table: "pendingpayments" */
  update_pendingpayments?: Maybe<Pendingpayments_Mutation_Response>;
  /** update single row of the table: "pendingpayments" */
  update_pendingpayments_by_pk?: Maybe<Pendingpayments>;
  /** update multiples rows of table: "pendingpayments" */
  update_pendingpayments_many?: Maybe<Array<Maybe<Pendingpayments_Mutation_Response>>>;
  /** update data of the table: "promo_code_redemptions" */
  update_promo_code_redemptions?: Maybe<Promo_Code_Redemptions_Mutation_Response>;
  /** update multiples rows of table: "promo_code_redemptions" */
  update_promo_code_redemptions_many?: Maybe<Array<Maybe<Promo_Code_Redemptions_Mutation_Response>>>;
  /** update data of the table: "published_worksheets" */
  update_published_worksheets?: Maybe<Published_Worksheets_Mutation_Response>;
  /** update multiples rows of table: "published_worksheets" */
  update_published_worksheets_many?: Maybe<Array<Maybe<Published_Worksheets_Mutation_Response>>>;
  /** update data of the table: "pyps" */
  update_pyps?: Maybe<Pyps_Mutation_Response>;
  /** update single row of the table: "pyps" */
  update_pyps_by_pk?: Maybe<Pyps>;
  /** update multiples rows of table: "pyps" */
  update_pyps_many?: Maybe<Array<Maybe<Pyps_Mutation_Response>>>;
  /** update data of the table: "question_topic" */
  update_question_topic?: Maybe<Question_Topic_Mutation_Response>;
  /** update single row of the table: "question_topic" */
  update_question_topic_by_pk?: Maybe<Question_Topic>;
  /** update multiples rows of table: "question_topic" */
  update_question_topic_many?: Maybe<Array<Maybe<Question_Topic_Mutation_Response>>>;
  /** update data of the table: "questionimgs" */
  update_questionimgs?: Maybe<Questionimgs_Mutation_Response>;
  /** update single row of the table: "questionimgs" */
  update_questionimgs_by_pk?: Maybe<Questionimgs>;
  /** update multiples rows of table: "questionimgs" */
  update_questionimgs_many?: Maybe<Array<Maybe<Questionimgs_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
  /** update data of the table: "reports" */
  update_reports?: Maybe<Reports_Mutation_Response>;
  /** update single row of the table: "reports" */
  update_reports_by_pk?: Maybe<Reports>;
  /** update multiples rows of table: "reports" */
  update_reports_many?: Maybe<Array<Maybe<Reports_Mutation_Response>>>;
  /** update data of the table: "savedquestions" */
  update_savedquestions?: Maybe<Savedquestions_Mutation_Response>;
  /** update single row of the table: "savedquestions" */
  update_savedquestions_by_pk?: Maybe<Savedquestions>;
  /** update multiples rows of table: "savedquestions" */
  update_savedquestions_many?: Maybe<Array<Maybe<Savedquestions_Mutation_Response>>>;
  /** update data of the table: "school_subject" */
  update_school_subject?: Maybe<School_Subject_Mutation_Response>;
  /** update single row of the table: "school_subject" */
  update_school_subject_by_pk?: Maybe<School_Subject>;
  /** update multiples rows of table: "school_subject" */
  update_school_subject_many?: Maybe<Array<Maybe<School_Subject_Mutation_Response>>>;
  /** update data of the table: "schools" */
  update_schools?: Maybe<Schools_Mutation_Response>;
  /** update single row of the table: "schools" */
  update_schools_by_pk?: Maybe<Schools>;
  /** update multiples rows of table: "schools" */
  update_schools_many?: Maybe<Array<Maybe<Schools_Mutation_Response>>>;
  /** update data of the table: "subject_level" */
  update_subject_level?: Maybe<Subject_Level_Mutation_Response>;
  /** update single row of the table: "subject_level" */
  update_subject_level_by_pk?: Maybe<Subject_Level>;
  /** update multiples rows of table: "subject_level" */
  update_subject_level_many?: Maybe<Array<Maybe<Subject_Level_Mutation_Response>>>;
  /** update data of the table: "subject_paper" */
  update_subject_paper?: Maybe<Subject_Paper_Mutation_Response>;
  /** update single row of the table: "subject_paper" */
  update_subject_paper_by_pk?: Maybe<Subject_Paper>;
  /** update multiples rows of table: "subject_paper" */
  update_subject_paper_many?: Maybe<Array<Maybe<Subject_Paper_Mutation_Response>>>;
  /** update data of the table: "subjects" */
  update_subjects?: Maybe<Subjects_Mutation_Response>;
  /** update single row of the table: "subjects" */
  update_subjects_by_pk?: Maybe<Subjects>;
  /** update multiples rows of table: "subjects" */
  update_subjects_many?: Maybe<Array<Maybe<Subjects_Mutation_Response>>>;
  /** update data of the table: "subscriptions" */
  update_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** update single row of the table: "subscriptions" */
  update_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** update multiples rows of table: "subscriptions" */
  update_subscriptions_many?: Maybe<Array<Maybe<Subscriptions_Mutation_Response>>>;
  /** update data of the table: "temp_worksheets" */
  update_temp_worksheets?: Maybe<Temp_Worksheets_Mutation_Response>;
  /** update single row of the table: "temp_worksheets" */
  update_temp_worksheets_by_pk?: Maybe<Temp_Worksheets>;
  /** update multiples rows of table: "temp_worksheets" */
  update_temp_worksheets_many?: Maybe<Array<Maybe<Temp_Worksheets_Mutation_Response>>>;
  /** update data of the table: "topics" */
  update_topics?: Maybe<Topics_Mutation_Response>;
  /** update single row of the table: "topics" */
  update_topics_by_pk?: Maybe<Topics>;
  /** update multiples rows of table: "topics" */
  update_topics_many?: Maybe<Array<Maybe<Topics_Mutation_Response>>>;
  /** update data of the table: "upvotes" */
  update_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** update single row of the table: "upvotes" */
  update_upvotes_by_pk?: Maybe<Upvotes>;
  /** update multiples rows of table: "upvotes" */
  update_upvotes_many?: Maybe<Array<Maybe<Upvotes_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "worksheets" */
  update_worksheets?: Maybe<Worksheets_Mutation_Response>;
  /** update single row of the table: "worksheets" */
  update_worksheets_by_pk?: Maybe<Worksheets>;
  /** update multiples rows of table: "worksheets" */
  update_worksheets_many?: Maybe<Array<Maybe<Worksheets_Mutation_Response>>>;
  /** update data of the table: "worksheets_to_questions" */
  update_worksheets_to_questions?: Maybe<Worksheets_To_Questions_Mutation_Response>;
  /** update single row of the table: "worksheets_to_questions" */
  update_worksheets_to_questions_by_pk?: Maybe<Worksheets_To_Questions>;
  /** update multiples rows of table: "worksheets_to_questions" */
  update_worksheets_to_questions_many?: Maybe<Array<Maybe<Worksheets_To_Questions_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AnswerimgsArgs = {
  where: Answerimgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answerimgs_By_PkArgs = {
  answerimgid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Assessment_LevelArgs = {
  where: Assessment_Level_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessment_Level_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
  levelid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AssessmentsArgs = {
  where: Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assessments_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CompletedquestionsArgs = {
  where: Completedquestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Completedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Answer_ImgsArgs = {
  where: Custom_Answer_Imgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Answer_Imgs_By_PkArgs = {
  customanswerimgid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Answers_For_WorksheetsArgs = {
  where: Custom_Answers_For_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LevelsArgs = {
  where: Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Levels_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OtpsArgs = {
  where: Otps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Otps_By_PkArgs = {
  otp: Scalars['bpchar']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PapersArgs = {
  where: Papers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Papers_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PendingpaymentsArgs = {
  where: Pendingpayments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pendingpayments_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Promo_Code_RedemptionsArgs = {
  where: Promo_Code_Redemptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Published_WorksheetsArgs = {
  where: Published_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PypsArgs = {
  where: Pyps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pyps_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Question_TopicArgs = {
  where: Question_Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_Topic_By_PkArgs = {
  questionid: Scalars['String']['input'];
  topicid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionimgsArgs = {
  where: Questionimgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionimgs_By_PkArgs = {
  questionimgid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReportsArgs = {
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reports_By_PkArgs = {
  reportid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SavedquestionsArgs = {
  where: Savedquestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Savedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_School_SubjectArgs = {
  where: School_Subject_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_School_Subject_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SchoolsArgs = {
  where: Schools_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schools_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subject_LevelArgs = {
  where: Subject_Level_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subject_Level_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subject_PaperArgs = {
  where: Subject_Paper_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subject_Paper_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubjectsArgs = {
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subjects_By_PkArgs = {
  subjectid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubscriptionsArgs = {
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscriptions_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Temp_WorksheetsArgs = {
  where: Temp_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Temp_Worksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TopicsArgs = {
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topics_By_PkArgs = {
  topicid: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UpvotesArgs = {
  where: Upvotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Upvotes_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorksheetsArgs = {
  where: Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Worksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Worksheets_To_QuestionsArgs = {
  where: Worksheets_To_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Worksheets_To_Questions_By_PkArgs = {
  question_id: Scalars['String']['input'];
  worksheet_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AnswerimgsArgs = {
  objects: Array<Answerimgs_Insert_Input>;
  on_conflict?: InputMaybe<Answerimgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answerimgs_OneArgs = {
  object: Answerimgs_Insert_Input;
  on_conflict?: InputMaybe<Answerimgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assessment_LevelArgs = {
  objects: Array<Assessment_Level_Insert_Input>;
  on_conflict?: InputMaybe<Assessment_Level_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assessment_Level_OneArgs = {
  object: Assessment_Level_Insert_Input;
  on_conflict?: InputMaybe<Assessment_Level_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AssessmentsArgs = {
  objects: Array<Assessments_Insert_Input>;
  on_conflict?: InputMaybe<Assessments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assessments_OneArgs = {
  object: Assessments_Insert_Input;
  on_conflict?: InputMaybe<Assessments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompletedquestionsArgs = {
  objects: Array<Completedquestions_Insert_Input>;
  on_conflict?: InputMaybe<Completedquestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Completedquestions_OneArgs = {
  object: Completedquestions_Insert_Input;
  on_conflict?: InputMaybe<Completedquestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Answer_ImgsArgs = {
  objects: Array<Custom_Answer_Imgs_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Answer_Imgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Answer_Imgs_OneArgs = {
  object: Custom_Answer_Imgs_Insert_Input;
  on_conflict?: InputMaybe<Custom_Answer_Imgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Answers_For_WorksheetsArgs = {
  objects: Array<Custom_Answers_For_Worksheets_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Answers_For_Worksheets_OneArgs = {
  object: Custom_Answers_For_Worksheets_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_LevelsArgs = {
  objects: Array<Levels_Insert_Input>;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Levels_OneArgs = {
  object: Levels_Insert_Input;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OtpsArgs = {
  objects: Array<Otps_Insert_Input>;
  on_conflict?: InputMaybe<Otps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Otps_OneArgs = {
  object: Otps_Insert_Input;
  on_conflict?: InputMaybe<Otps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PapersArgs = {
  objects: Array<Papers_Insert_Input>;
  on_conflict?: InputMaybe<Papers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Papers_OneArgs = {
  object: Papers_Insert_Input;
  on_conflict?: InputMaybe<Papers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PendingpaymentsArgs = {
  objects: Array<Pendingpayments_Insert_Input>;
  on_conflict?: InputMaybe<Pendingpayments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pendingpayments_OneArgs = {
  object: Pendingpayments_Insert_Input;
  on_conflict?: InputMaybe<Pendingpayments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Promo_Code_RedemptionsArgs = {
  objects: Array<Promo_Code_Redemptions_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Promo_Code_Redemptions_OneArgs = {
  object: Promo_Code_Redemptions_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Published_WorksheetsArgs = {
  objects: Array<Published_Worksheets_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Published_Worksheets_OneArgs = {
  object: Published_Worksheets_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PypsArgs = {
  objects: Array<Pyps_Insert_Input>;
  on_conflict?: InputMaybe<Pyps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pyps_OneArgs = {
  object: Pyps_Insert_Input;
  on_conflict?: InputMaybe<Pyps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_TopicArgs = {
  objects: Array<Question_Topic_Insert_Input>;
  on_conflict?: InputMaybe<Question_Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_Topic_OneArgs = {
  object: Question_Topic_Insert_Input;
  on_conflict?: InputMaybe<Question_Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionimgsArgs = {
  objects: Array<Questionimgs_Insert_Input>;
  on_conflict?: InputMaybe<Questionimgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionimgs_OneArgs = {
  object: Questionimgs_Insert_Input;
  on_conflict?: InputMaybe<Questionimgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportsArgs = {
  objects: Array<Reports_Insert_Input>;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reports_OneArgs = {
  object: Reports_Insert_Input;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SavedquestionsArgs = {
  objects: Array<Savedquestions_Insert_Input>;
  on_conflict?: InputMaybe<Savedquestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Savedquestions_OneArgs = {
  object: Savedquestions_Insert_Input;
  on_conflict?: InputMaybe<Savedquestions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_School_SubjectArgs = {
  objects: Array<School_Subject_Insert_Input>;
  on_conflict?: InputMaybe<School_Subject_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_School_Subject_OneArgs = {
  object: School_Subject_Insert_Input;
  on_conflict?: InputMaybe<School_Subject_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SchoolsArgs = {
  objects: Array<Schools_Insert_Input>;
  on_conflict?: InputMaybe<Schools_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schools_OneArgs = {
  object: Schools_Insert_Input;
  on_conflict?: InputMaybe<Schools_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_LevelArgs = {
  objects: Array<Subject_Level_Insert_Input>;
  on_conflict?: InputMaybe<Subject_Level_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_Level_OneArgs = {
  object: Subject_Level_Insert_Input;
  on_conflict?: InputMaybe<Subject_Level_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_PaperArgs = {
  objects: Array<Subject_Paper_Insert_Input>;
  on_conflict?: InputMaybe<Subject_Paper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subject_Paper_OneArgs = {
  object: Subject_Paper_Insert_Input;
  on_conflict?: InputMaybe<Subject_Paper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubjectsArgs = {
  objects: Array<Subjects_Insert_Input>;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subjects_OneArgs = {
  object: Subjects_Insert_Input;
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscriptionsArgs = {
  objects: Array<Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscriptions_OneArgs = {
  object: Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Temp_WorksheetsArgs = {
  objects: Array<Temp_Worksheets_Insert_Input>;
  on_conflict?: InputMaybe<Temp_Worksheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Temp_Worksheets_OneArgs = {
  object: Temp_Worksheets_Insert_Input;
  on_conflict?: InputMaybe<Temp_Worksheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TopicsArgs = {
  objects: Array<Topics_Insert_Input>;
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topics_OneArgs = {
  object: Topics_Insert_Input;
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UpvotesArgs = {
  objects: Array<Upvotes_Insert_Input>;
  on_conflict?: InputMaybe<Upvotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Upvotes_OneArgs = {
  object: Upvotes_Insert_Input;
  on_conflict?: InputMaybe<Upvotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorksheetsArgs = {
  objects: Array<Worksheets_Insert_Input>;
  on_conflict?: InputMaybe<Worksheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Worksheets_OneArgs = {
  object: Worksheets_Insert_Input;
  on_conflict?: InputMaybe<Worksheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Worksheets_To_QuestionsArgs = {
  objects: Array<Worksheets_To_Questions_Insert_Input>;
  on_conflict?: InputMaybe<Worksheets_To_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Worksheets_To_Questions_OneArgs = {
  object: Worksheets_To_Questions_Insert_Input;
  on_conflict?: InputMaybe<Worksheets_To_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AnswerimgsArgs = {
  _inc?: InputMaybe<Answerimgs_Inc_Input>;
  _set?: InputMaybe<Answerimgs_Set_Input>;
  where: Answerimgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answerimgs_By_PkArgs = {
  _inc?: InputMaybe<Answerimgs_Inc_Input>;
  _set?: InputMaybe<Answerimgs_Set_Input>;
  pk_columns: Answerimgs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Answerimgs_ManyArgs = {
  updates: Array<Answerimgs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Assessment_LevelArgs = {
  _inc?: InputMaybe<Assessment_Level_Inc_Input>;
  _set?: InputMaybe<Assessment_Level_Set_Input>;
  where: Assessment_Level_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessment_Level_By_PkArgs = {
  _inc?: InputMaybe<Assessment_Level_Inc_Input>;
  _set?: InputMaybe<Assessment_Level_Set_Input>;
  pk_columns: Assessment_Level_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessment_Level_ManyArgs = {
  updates: Array<Assessment_Level_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AssessmentsArgs = {
  _inc?: InputMaybe<Assessments_Inc_Input>;
  _set?: InputMaybe<Assessments_Set_Input>;
  where: Assessments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_By_PkArgs = {
  _inc?: InputMaybe<Assessments_Inc_Input>;
  _set?: InputMaybe<Assessments_Set_Input>;
  pk_columns: Assessments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assessments_ManyArgs = {
  updates: Array<Assessments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CompletedquestionsArgs = {
  _set?: InputMaybe<Completedquestions_Set_Input>;
  where: Completedquestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Completedquestions_By_PkArgs = {
  _set?: InputMaybe<Completedquestions_Set_Input>;
  pk_columns: Completedquestions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Completedquestions_ManyArgs = {
  updates: Array<Completedquestions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Answer_ImgsArgs = {
  _inc?: InputMaybe<Custom_Answer_Imgs_Inc_Input>;
  _set?: InputMaybe<Custom_Answer_Imgs_Set_Input>;
  where: Custom_Answer_Imgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Answer_Imgs_By_PkArgs = {
  _inc?: InputMaybe<Custom_Answer_Imgs_Inc_Input>;
  _set?: InputMaybe<Custom_Answer_Imgs_Set_Input>;
  pk_columns: Custom_Answer_Imgs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Answer_Imgs_ManyArgs = {
  updates: Array<Custom_Answer_Imgs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Answers_For_WorksheetsArgs = {
  _set?: InputMaybe<Custom_Answers_For_Worksheets_Set_Input>;
  where: Custom_Answers_For_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Answers_For_Worksheets_ManyArgs = {
  updates: Array<Custom_Answers_For_Worksheets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LevelsArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  where: Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Levels_By_PkArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  pk_columns: Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Levels_ManyArgs = {
  updates: Array<Levels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OtpsArgs = {
  _set?: InputMaybe<Otps_Set_Input>;
  where: Otps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Otps_By_PkArgs = {
  _set?: InputMaybe<Otps_Set_Input>;
  pk_columns: Otps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Otps_ManyArgs = {
  updates: Array<Otps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PapersArgs = {
  _inc?: InputMaybe<Papers_Inc_Input>;
  _set?: InputMaybe<Papers_Set_Input>;
  where: Papers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Papers_By_PkArgs = {
  _inc?: InputMaybe<Papers_Inc_Input>;
  _set?: InputMaybe<Papers_Set_Input>;
  pk_columns: Papers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Papers_ManyArgs = {
  updates: Array<Papers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PendingpaymentsArgs = {
  _set?: InputMaybe<Pendingpayments_Set_Input>;
  where: Pendingpayments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pendingpayments_By_PkArgs = {
  _set?: InputMaybe<Pendingpayments_Set_Input>;
  pk_columns: Pendingpayments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pendingpayments_ManyArgs = {
  updates: Array<Pendingpayments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Promo_Code_RedemptionsArgs = {
  _set?: InputMaybe<Promo_Code_Redemptions_Set_Input>;
  where: Promo_Code_Redemptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Promo_Code_Redemptions_ManyArgs = {
  updates: Array<Promo_Code_Redemptions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Published_WorksheetsArgs = {
  _inc?: InputMaybe<Published_Worksheets_Inc_Input>;
  _set?: InputMaybe<Published_Worksheets_Set_Input>;
  where: Published_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Published_Worksheets_ManyArgs = {
  updates: Array<Published_Worksheets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PypsArgs = {
  _inc?: InputMaybe<Pyps_Inc_Input>;
  _set?: InputMaybe<Pyps_Set_Input>;
  where: Pyps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pyps_By_PkArgs = {
  _inc?: InputMaybe<Pyps_Inc_Input>;
  _set?: InputMaybe<Pyps_Set_Input>;
  pk_columns: Pyps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pyps_ManyArgs = {
  updates: Array<Pyps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Question_TopicArgs = {
  _inc?: InputMaybe<Question_Topic_Inc_Input>;
  _set?: InputMaybe<Question_Topic_Set_Input>;
  where: Question_Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Topic_By_PkArgs = {
  _inc?: InputMaybe<Question_Topic_Inc_Input>;
  _set?: InputMaybe<Question_Topic_Set_Input>;
  pk_columns: Question_Topic_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Topic_ManyArgs = {
  updates: Array<Question_Topic_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionimgsArgs = {
  _inc?: InputMaybe<Questionimgs_Inc_Input>;
  _set?: InputMaybe<Questionimgs_Set_Input>;
  where: Questionimgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionimgs_By_PkArgs = {
  _inc?: InputMaybe<Questionimgs_Inc_Input>;
  _set?: InputMaybe<Questionimgs_Set_Input>;
  pk_columns: Questionimgs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionimgs_ManyArgs = {
  updates: Array<Questionimgs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReportsArgs = {
  _inc?: InputMaybe<Reports_Inc_Input>;
  _set?: InputMaybe<Reports_Set_Input>;
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_By_PkArgs = {
  _inc?: InputMaybe<Reports_Inc_Input>;
  _set?: InputMaybe<Reports_Set_Input>;
  pk_columns: Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_ManyArgs = {
  updates: Array<Reports_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SavedquestionsArgs = {
  _set?: InputMaybe<Savedquestions_Set_Input>;
  where: Savedquestions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Savedquestions_By_PkArgs = {
  _set?: InputMaybe<Savedquestions_Set_Input>;
  pk_columns: Savedquestions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Savedquestions_ManyArgs = {
  updates: Array<Savedquestions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_School_SubjectArgs = {
  _inc?: InputMaybe<School_Subject_Inc_Input>;
  _set?: InputMaybe<School_Subject_Set_Input>;
  where: School_Subject_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_School_Subject_By_PkArgs = {
  _inc?: InputMaybe<School_Subject_Inc_Input>;
  _set?: InputMaybe<School_Subject_Set_Input>;
  pk_columns: School_Subject_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_School_Subject_ManyArgs = {
  updates: Array<School_Subject_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SchoolsArgs = {
  _inc?: InputMaybe<Schools_Inc_Input>;
  _set?: InputMaybe<Schools_Set_Input>;
  where: Schools_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schools_By_PkArgs = {
  _inc?: InputMaybe<Schools_Inc_Input>;
  _set?: InputMaybe<Schools_Set_Input>;
  pk_columns: Schools_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Schools_ManyArgs = {
  updates: Array<Schools_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_LevelArgs = {
  _inc?: InputMaybe<Subject_Level_Inc_Input>;
  _set?: InputMaybe<Subject_Level_Set_Input>;
  where: Subject_Level_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Level_By_PkArgs = {
  _inc?: InputMaybe<Subject_Level_Inc_Input>;
  _set?: InputMaybe<Subject_Level_Set_Input>;
  pk_columns: Subject_Level_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Level_ManyArgs = {
  updates: Array<Subject_Level_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_PaperArgs = {
  _inc?: InputMaybe<Subject_Paper_Inc_Input>;
  _set?: InputMaybe<Subject_Paper_Set_Input>;
  where: Subject_Paper_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Paper_By_PkArgs = {
  _inc?: InputMaybe<Subject_Paper_Inc_Input>;
  _set?: InputMaybe<Subject_Paper_Set_Input>;
  pk_columns: Subject_Paper_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subject_Paper_ManyArgs = {
  updates: Array<Subject_Paper_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubjectsArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  where: Subjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subjects_By_PkArgs = {
  _inc?: InputMaybe<Subjects_Inc_Input>;
  _set?: InputMaybe<Subjects_Set_Input>;
  pk_columns: Subjects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subjects_ManyArgs = {
  updates: Array<Subjects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubscriptionsArgs = {
  _set?: InputMaybe<Subscriptions_Set_Input>;
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscriptions_By_PkArgs = {
  _set?: InputMaybe<Subscriptions_Set_Input>;
  pk_columns: Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscriptions_ManyArgs = {
  updates: Array<Subscriptions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Temp_WorksheetsArgs = {
  _inc?: InputMaybe<Temp_Worksheets_Inc_Input>;
  _set?: InputMaybe<Temp_Worksheets_Set_Input>;
  where: Temp_Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Temp_Worksheets_By_PkArgs = {
  _inc?: InputMaybe<Temp_Worksheets_Inc_Input>;
  _set?: InputMaybe<Temp_Worksheets_Set_Input>;
  pk_columns: Temp_Worksheets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Temp_Worksheets_ManyArgs = {
  updates: Array<Temp_Worksheets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TopicsArgs = {
  _inc?: InputMaybe<Topics_Inc_Input>;
  _set?: InputMaybe<Topics_Set_Input>;
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topics_By_PkArgs = {
  _inc?: InputMaybe<Topics_Inc_Input>;
  _set?: InputMaybe<Topics_Set_Input>;
  pk_columns: Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Topics_ManyArgs = {
  updates: Array<Topics_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UpvotesArgs = {
  _set?: InputMaybe<Upvotes_Set_Input>;
  where: Upvotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Upvotes_By_PkArgs = {
  _set?: InputMaybe<Upvotes_Set_Input>;
  pk_columns: Upvotes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Upvotes_ManyArgs = {
  updates: Array<Upvotes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorksheetsArgs = {
  _inc?: InputMaybe<Worksheets_Inc_Input>;
  _set?: InputMaybe<Worksheets_Set_Input>;
  where: Worksheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Worksheets_By_PkArgs = {
  _inc?: InputMaybe<Worksheets_Inc_Input>;
  _set?: InputMaybe<Worksheets_Set_Input>;
  pk_columns: Worksheets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Worksheets_ManyArgs = {
  updates: Array<Worksheets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Worksheets_To_QuestionsArgs = {
  _inc?: InputMaybe<Worksheets_To_Questions_Inc_Input>;
  _set?: InputMaybe<Worksheets_To_Questions_Set_Input>;
  where: Worksheets_To_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Worksheets_To_Questions_By_PkArgs = {
  _inc?: InputMaybe<Worksheets_To_Questions_Inc_Input>;
  _set?: InputMaybe<Worksheets_To_Questions_Set_Input>;
  pk_columns: Worksheets_To_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Worksheets_To_Questions_ManyArgs = {
  updates: Array<Worksheets_To_Questions_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "otps" */
export type Otps = {
  __typename?: 'otps';
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  otp: Scalars['bpchar']['output'];
  password: Scalars['String']['output'];
};

/** aggregated selection of "otps" */
export type Otps_Aggregate = {
  __typename?: 'otps_aggregate';
  aggregate?: Maybe<Otps_Aggregate_Fields>;
  nodes: Array<Otps>;
};

/** aggregate fields of "otps" */
export type Otps_Aggregate_Fields = {
  __typename?: 'otps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Otps_Max_Fields>;
  min?: Maybe<Otps_Min_Fields>;
};


/** aggregate fields of "otps" */
export type Otps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Otps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "otps". All fields are combined with a logical 'AND'. */
export type Otps_Bool_Exp = {
  _and?: InputMaybe<Array<Otps_Bool_Exp>>;
  _not?: InputMaybe<Otps_Bool_Exp>;
  _or?: InputMaybe<Array<Otps_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  otp?: InputMaybe<Bpchar_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "otps" */
export enum Otps_Constraint {
  /** unique or primary key constraint on columns "otp" */
  OtpsPkey = 'otps_pkey'
}

/** input type for inserting data into table "otps" */
export type Otps_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['bpchar']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Otps_Max_Fields = {
  __typename?: 'otps_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['bpchar']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Otps_Min_Fields = {
  __typename?: 'otps_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['bpchar']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "otps" */
export type Otps_Mutation_Response = {
  __typename?: 'otps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Otps>;
};

/** on_conflict condition type for table "otps" */
export type Otps_On_Conflict = {
  constraint: Otps_Constraint;
  update_columns?: Array<Otps_Update_Column>;
  where?: InputMaybe<Otps_Bool_Exp>;
};

/** Ordering options when selecting data from "otps". */
export type Otps_Order_By = {
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  otp?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
};

/** primary key columns input for table: otps */
export type Otps_Pk_Columns_Input = {
  otp: Scalars['bpchar']['input'];
};

/** select columns of table "otps" */
export enum Otps_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Otp = 'otp',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "otps" */
export type Otps_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['bpchar']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "otps" */
export type Otps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Otps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Otps_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['bpchar']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "otps" */
export enum Otps_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Otp = 'otp',
  /** column name */
  Password = 'password'
}

export type Otps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Otps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Otps_Bool_Exp;
};

/** columns and relationships of "papers" */
export type Papers = {
  __typename?: 'papers';
  paper: Scalars['bigint']['output'];
  paperid: Scalars['bigint']['output'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  subject_papers: Array<Subject_Paper>;
  /** An aggregate relationship */
  subject_papers_aggregate: Subject_Paper_Aggregate;
};


/** columns and relationships of "papers" */
export type PapersQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "papers" */
export type PapersQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "papers" */
export type PapersSubject_PapersArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


/** columns and relationships of "papers" */
export type PapersSubject_Papers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};

/** aggregated selection of "papers" */
export type Papers_Aggregate = {
  __typename?: 'papers_aggregate';
  aggregate?: Maybe<Papers_Aggregate_Fields>;
  nodes: Array<Papers>;
};

/** aggregate fields of "papers" */
export type Papers_Aggregate_Fields = {
  __typename?: 'papers_aggregate_fields';
  avg?: Maybe<Papers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Papers_Max_Fields>;
  min?: Maybe<Papers_Min_Fields>;
  stddev?: Maybe<Papers_Stddev_Fields>;
  stddev_pop?: Maybe<Papers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Papers_Stddev_Samp_Fields>;
  sum?: Maybe<Papers_Sum_Fields>;
  var_pop?: Maybe<Papers_Var_Pop_Fields>;
  var_samp?: Maybe<Papers_Var_Samp_Fields>;
  variance?: Maybe<Papers_Variance_Fields>;
};


/** aggregate fields of "papers" */
export type Papers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Papers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Papers_Avg_Fields = {
  __typename?: 'papers_avg_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "papers". All fields are combined with a logical 'AND'. */
export type Papers_Bool_Exp = {
  _and?: InputMaybe<Array<Papers_Bool_Exp>>;
  _not?: InputMaybe<Papers_Bool_Exp>;
  _or?: InputMaybe<Array<Papers_Bool_Exp>>;
  paper?: InputMaybe<Bigint_Comparison_Exp>;
  paperid?: InputMaybe<Bigint_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  subject_papers?: InputMaybe<Subject_Paper_Bool_Exp>;
  subject_papers_aggregate?: InputMaybe<Subject_Paper_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "papers" */
export enum Papers_Constraint {
  /** unique or primary key constraint on columns "paper" */
  PapersPaperKey = 'papers_paper_key',
  /** unique or primary key constraint on columns "paperid" */
  PapersPkey = 'papers_pkey'
}

/** input type for incrementing numeric columns in table "papers" */
export type Papers_Inc_Input = {
  paper?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "papers" */
export type Papers_Insert_Input = {
  paper?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  subject_papers?: InputMaybe<Subject_Paper_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Papers_Max_Fields = {
  __typename?: 'papers_max_fields';
  paper?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Papers_Min_Fields = {
  __typename?: 'papers_min_fields';
  paper?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "papers" */
export type Papers_Mutation_Response = {
  __typename?: 'papers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Papers>;
};

/** input type for inserting object relation for remote table "papers" */
export type Papers_Obj_Rel_Insert_Input = {
  data: Papers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Papers_On_Conflict>;
};

/** on_conflict condition type for table "papers" */
export type Papers_On_Conflict = {
  constraint: Papers_Constraint;
  update_columns?: Array<Papers_Update_Column>;
  where?: InputMaybe<Papers_Bool_Exp>;
};

/** Ordering options when selecting data from "papers". */
export type Papers_Order_By = {
  paper?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  subject_papers_aggregate?: InputMaybe<Subject_Paper_Aggregate_Order_By>;
};

/** primary key columns input for table: papers */
export type Papers_Pk_Columns_Input = {
  paperid: Scalars['bigint']['input'];
};

/** select columns of table "papers" */
export enum Papers_Select_Column {
  /** column name */
  Paper = 'paper',
  /** column name */
  Paperid = 'paperid'
}

/** input type for updating data in table "papers" */
export type Papers_Set_Input = {
  paper?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Papers_Stddev_Fields = {
  __typename?: 'papers_stddev_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Papers_Stddev_Pop_Fields = {
  __typename?: 'papers_stddev_pop_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Papers_Stddev_Samp_Fields = {
  __typename?: 'papers_stddev_samp_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "papers" */
export type Papers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Papers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Papers_Stream_Cursor_Value_Input = {
  paper?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Papers_Sum_Fields = {
  __typename?: 'papers_sum_fields';
  paper?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "papers" */
export enum Papers_Update_Column {
  /** column name */
  Paper = 'paper',
  /** column name */
  Paperid = 'paperid'
}

export type Papers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Papers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Papers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Papers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Papers_Var_Pop_Fields = {
  __typename?: 'papers_var_pop_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Papers_Var_Samp_Fields = {
  __typename?: 'papers_var_samp_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Papers_Variance_Fields = {
  __typename?: 'papers_variance_fields';
  paper?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pendingpayments" */
export type Pendingpayments = {
  __typename?: 'pendingpayments';
  email: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "pendingpayments" */
export type Pendingpayments_Aggregate = {
  __typename?: 'pendingpayments_aggregate';
  aggregate?: Maybe<Pendingpayments_Aggregate_Fields>;
  nodes: Array<Pendingpayments>;
};

export type Pendingpayments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pendingpayments_Aggregate_Bool_Exp_Count>;
};

export type Pendingpayments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Pendingpayments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pendingpayments" */
export type Pendingpayments_Aggregate_Fields = {
  __typename?: 'pendingpayments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Pendingpayments_Max_Fields>;
  min?: Maybe<Pendingpayments_Min_Fields>;
};


/** aggregate fields of "pendingpayments" */
export type Pendingpayments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pendingpayments" */
export type Pendingpayments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pendingpayments_Max_Order_By>;
  min?: InputMaybe<Pendingpayments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "pendingpayments" */
export type Pendingpayments_Arr_Rel_Insert_Input = {
  data: Array<Pendingpayments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pendingpayments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pendingpayments". All fields are combined with a logical 'AND'. */
export type Pendingpayments_Bool_Exp = {
  _and?: InputMaybe<Array<Pendingpayments_Bool_Exp>>;
  _not?: InputMaybe<Pendingpayments_Bool_Exp>;
  _or?: InputMaybe<Array<Pendingpayments_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "pendingpayments" */
export enum Pendingpayments_Constraint {
  /** unique or primary key constraint on columns "email", "questionid" */
  PendingpaymentsPkey = 'pendingpayments_pkey'
}

/** input type for inserting data into table "pendingpayments" */
export type Pendingpayments_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Pendingpayments_Max_Fields = {
  __typename?: 'pendingpayments_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "pendingpayments" */
export type Pendingpayments_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pendingpayments_Min_Fields = {
  __typename?: 'pendingpayments_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "pendingpayments" */
export type Pendingpayments_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pendingpayments" */
export type Pendingpayments_Mutation_Response = {
  __typename?: 'pendingpayments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pendingpayments>;
};

/** on_conflict condition type for table "pendingpayments" */
export type Pendingpayments_On_Conflict = {
  constraint: Pendingpayments_Constraint;
  update_columns?: Array<Pendingpayments_Update_Column>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};

/** Ordering options when selecting data from "pendingpayments". */
export type Pendingpayments_Order_By = {
  email?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: pendingpayments */
export type Pendingpayments_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};

/** select columns of table "pendingpayments" */
export enum Pendingpayments_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

/** input type for updating data in table "pendingpayments" */
export type Pendingpayments_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "pendingpayments" */
export type Pendingpayments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pendingpayments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pendingpayments_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "pendingpayments" */
export enum Pendingpayments_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

export type Pendingpayments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pendingpayments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pendingpayments_Bool_Exp;
};

/** columns and relationships of "promo_code_redemptions" */
export type Promo_Code_Redemptions = {
  __typename?: 'promo_code_redemptions';
  redeemed_at: Scalars['timestamp']['output'];
  referee_id: Scalars['String']['output'];
  referrer_id: Scalars['String']['output'];
};

/** aggregated selection of "promo_code_redemptions" */
export type Promo_Code_Redemptions_Aggregate = {
  __typename?: 'promo_code_redemptions_aggregate';
  aggregate?: Maybe<Promo_Code_Redemptions_Aggregate_Fields>;
  nodes: Array<Promo_Code_Redemptions>;
};

/** aggregate fields of "promo_code_redemptions" */
export type Promo_Code_Redemptions_Aggregate_Fields = {
  __typename?: 'promo_code_redemptions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Promo_Code_Redemptions_Max_Fields>;
  min?: Maybe<Promo_Code_Redemptions_Min_Fields>;
};


/** aggregate fields of "promo_code_redemptions" */
export type Promo_Code_Redemptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Promo_Code_Redemptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "promo_code_redemptions". All fields are combined with a logical 'AND'. */
export type Promo_Code_Redemptions_Bool_Exp = {
  _and?: InputMaybe<Array<Promo_Code_Redemptions_Bool_Exp>>;
  _not?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
  _or?: InputMaybe<Array<Promo_Code_Redemptions_Bool_Exp>>;
  redeemed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  referee_id?: InputMaybe<String_Comparison_Exp>;
  referrer_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "promo_code_redemptions" */
export type Promo_Code_Redemptions_Insert_Input = {
  redeemed_at?: InputMaybe<Scalars['timestamp']['input']>;
  referee_id?: InputMaybe<Scalars['String']['input']>;
  referrer_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Promo_Code_Redemptions_Max_Fields = {
  __typename?: 'promo_code_redemptions_max_fields';
  redeemed_at?: Maybe<Scalars['timestamp']['output']>;
  referee_id?: Maybe<Scalars['String']['output']>;
  referrer_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Promo_Code_Redemptions_Min_Fields = {
  __typename?: 'promo_code_redemptions_min_fields';
  redeemed_at?: Maybe<Scalars['timestamp']['output']>;
  referee_id?: Maybe<Scalars['String']['output']>;
  referrer_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "promo_code_redemptions" */
export type Promo_Code_Redemptions_Mutation_Response = {
  __typename?: 'promo_code_redemptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Promo_Code_Redemptions>;
};

/** Ordering options when selecting data from "promo_code_redemptions". */
export type Promo_Code_Redemptions_Order_By = {
  redeemed_at?: InputMaybe<Order_By>;
  referee_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
};

/** select columns of table "promo_code_redemptions" */
export enum Promo_Code_Redemptions_Select_Column {
  /** column name */
  RedeemedAt = 'redeemed_at',
  /** column name */
  RefereeId = 'referee_id',
  /** column name */
  ReferrerId = 'referrer_id'
}

/** input type for updating data in table "promo_code_redemptions" */
export type Promo_Code_Redemptions_Set_Input = {
  redeemed_at?: InputMaybe<Scalars['timestamp']['input']>;
  referee_id?: InputMaybe<Scalars['String']['input']>;
  referrer_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "promo_code_redemptions" */
export type Promo_Code_Redemptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Promo_Code_Redemptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Promo_Code_Redemptions_Stream_Cursor_Value_Input = {
  redeemed_at?: InputMaybe<Scalars['timestamp']['input']>;
  referee_id?: InputMaybe<Scalars['String']['input']>;
  referrer_id?: InputMaybe<Scalars['String']['input']>;
};

export type Promo_Code_Redemptions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Promo_Code_Redemptions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Promo_Code_Redemptions_Bool_Exp;
};

/** columns and relationships of "published_worksheets" */
export type Published_Worksheets = {
  __typename?: 'published_worksheets';
  author_id: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  worksheet_id: Scalars['Int']['output'];
};

/** aggregated selection of "published_worksheets" */
export type Published_Worksheets_Aggregate = {
  __typename?: 'published_worksheets_aggregate';
  aggregate?: Maybe<Published_Worksheets_Aggregate_Fields>;
  nodes: Array<Published_Worksheets>;
};

/** aggregate fields of "published_worksheets" */
export type Published_Worksheets_Aggregate_Fields = {
  __typename?: 'published_worksheets_aggregate_fields';
  avg?: Maybe<Published_Worksheets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Published_Worksheets_Max_Fields>;
  min?: Maybe<Published_Worksheets_Min_Fields>;
  stddev?: Maybe<Published_Worksheets_Stddev_Fields>;
  stddev_pop?: Maybe<Published_Worksheets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Published_Worksheets_Stddev_Samp_Fields>;
  sum?: Maybe<Published_Worksheets_Sum_Fields>;
  var_pop?: Maybe<Published_Worksheets_Var_Pop_Fields>;
  var_samp?: Maybe<Published_Worksheets_Var_Samp_Fields>;
  variance?: Maybe<Published_Worksheets_Variance_Fields>;
};


/** aggregate fields of "published_worksheets" */
export type Published_Worksheets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Published_Worksheets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Published_Worksheets_Avg_Fields = {
  __typename?: 'published_worksheets_avg_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "published_worksheets". All fields are combined with a logical 'AND'. */
export type Published_Worksheets_Bool_Exp = {
  _and?: InputMaybe<Array<Published_Worksheets_Bool_Exp>>;
  _not?: InputMaybe<Published_Worksheets_Bool_Exp>;
  _or?: InputMaybe<Array<Published_Worksheets_Bool_Exp>>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  worksheet_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "published_worksheets" */
export type Published_Worksheets_Inc_Input = {
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "published_worksheets" */
export type Published_Worksheets_Insert_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Published_Worksheets_Max_Fields = {
  __typename?: 'published_worksheets_max_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Published_Worksheets_Min_Fields = {
  __typename?: 'published_worksheets_min_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "published_worksheets" */
export type Published_Worksheets_Mutation_Response = {
  __typename?: 'published_worksheets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Published_Worksheets>;
};

/** Ordering options when selecting data from "published_worksheets". */
export type Published_Worksheets_Order_By = {
  author_id?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  worksheet_id?: InputMaybe<Order_By>;
};

/** select columns of table "published_worksheets" */
export enum Published_Worksheets_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Published = 'published',
  /** column name */
  WorksheetId = 'worksheet_id'
}

/** input type for updating data in table "published_worksheets" */
export type Published_Worksheets_Set_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Published_Worksheets_Stddev_Fields = {
  __typename?: 'published_worksheets_stddev_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Published_Worksheets_Stddev_Pop_Fields = {
  __typename?: 'published_worksheets_stddev_pop_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Published_Worksheets_Stddev_Samp_Fields = {
  __typename?: 'published_worksheets_stddev_samp_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "published_worksheets" */
export type Published_Worksheets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Published_Worksheets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Published_Worksheets_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Published_Worksheets_Sum_Fields = {
  __typename?: 'published_worksheets_sum_fields';
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

export type Published_Worksheets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Published_Worksheets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Published_Worksheets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Published_Worksheets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Published_Worksheets_Var_Pop_Fields = {
  __typename?: 'published_worksheets_var_pop_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Published_Worksheets_Var_Samp_Fields = {
  __typename?: 'published_worksheets_var_samp_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Published_Worksheets_Variance_Fields = {
  __typename?: 'published_worksheets_variance_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pyps" */
export type Pyps = {
  __typename?: 'pyps';
  id: Scalars['Int']['output'];
  level: Scalars['String']['output'];
  pdf_url: Scalars['String']['output'];
  s3_url: Scalars['String']['output'];
  school: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  website_id: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

/** aggregated selection of "pyps" */
export type Pyps_Aggregate = {
  __typename?: 'pyps_aggregate';
  aggregate?: Maybe<Pyps_Aggregate_Fields>;
  nodes: Array<Pyps>;
};

/** aggregate fields of "pyps" */
export type Pyps_Aggregate_Fields = {
  __typename?: 'pyps_aggregate_fields';
  avg?: Maybe<Pyps_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pyps_Max_Fields>;
  min?: Maybe<Pyps_Min_Fields>;
  stddev?: Maybe<Pyps_Stddev_Fields>;
  stddev_pop?: Maybe<Pyps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pyps_Stddev_Samp_Fields>;
  sum?: Maybe<Pyps_Sum_Fields>;
  var_pop?: Maybe<Pyps_Var_Pop_Fields>;
  var_samp?: Maybe<Pyps_Var_Samp_Fields>;
  variance?: Maybe<Pyps_Variance_Fields>;
};


/** aggregate fields of "pyps" */
export type Pyps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pyps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pyps_Avg_Fields = {
  __typename?: 'pyps_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pyps". All fields are combined with a logical 'AND'. */
export type Pyps_Bool_Exp = {
  _and?: InputMaybe<Array<Pyps_Bool_Exp>>;
  _not?: InputMaybe<Pyps_Bool_Exp>;
  _or?: InputMaybe<Array<Pyps_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  level?: InputMaybe<String_Comparison_Exp>;
  pdf_url?: InputMaybe<String_Comparison_Exp>;
  s3_url?: InputMaybe<String_Comparison_Exp>;
  school?: InputMaybe<String_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  website_id?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pyps" */
export enum Pyps_Constraint {
  /** unique or primary key constraint on columns "id" */
  PypsPkey = 'pyps_pkey'
}

/** input type for incrementing numeric columns in table "pyps" */
export type Pyps_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "pyps" */
export type Pyps_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  pdf_url?: InputMaybe<Scalars['String']['input']>;
  s3_url?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website_id?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Pyps_Max_Fields = {
  __typename?: 'pyps_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  pdf_url?: Maybe<Scalars['String']['output']>;
  s3_url?: Maybe<Scalars['String']['output']>;
  school?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Pyps_Min_Fields = {
  __typename?: 'pyps_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  pdf_url?: Maybe<Scalars['String']['output']>;
  s3_url?: Maybe<Scalars['String']['output']>;
  school?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  website_id?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "pyps" */
export type Pyps_Mutation_Response = {
  __typename?: 'pyps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pyps>;
};

/** on_conflict condition type for table "pyps" */
export type Pyps_On_Conflict = {
  constraint: Pyps_Constraint;
  update_columns?: Array<Pyps_Update_Column>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};

/** Ordering options when selecting data from "pyps". */
export type Pyps_Order_By = {
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  pdf_url?: InputMaybe<Order_By>;
  s3_url?: InputMaybe<Order_By>;
  school?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  website_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pyps */
export type Pyps_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "pyps" */
export enum Pyps_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  PdfUrl = 'pdf_url',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  School = 'school',
  /** column name */
  Subject = 'subject',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  WebsiteId = 'website_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "pyps" */
export type Pyps_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  pdf_url?: InputMaybe<Scalars['String']['input']>;
  s3_url?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website_id?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Pyps_Stddev_Fields = {
  __typename?: 'pyps_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pyps_Stddev_Pop_Fields = {
  __typename?: 'pyps_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pyps_Stddev_Samp_Fields = {
  __typename?: 'pyps_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pyps" */
export type Pyps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pyps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pyps_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  pdf_url?: InputMaybe<Scalars['String']['input']>;
  s3_url?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website_id?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Pyps_Sum_Fields = {
  __typename?: 'pyps_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "pyps" */
export enum Pyps_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  PdfUrl = 'pdf_url',
  /** column name */
  S3Url = 's3_url',
  /** column name */
  School = 'school',
  /** column name */
  Subject = 'subject',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  WebsiteId = 'website_id',
  /** column name */
  Year = 'year'
}

export type Pyps_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pyps_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pyps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pyps_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pyps_Var_Pop_Fields = {
  __typename?: 'pyps_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pyps_Var_Samp_Fields = {
  __typename?: 'pyps_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pyps_Variance_Fields = {
  __typename?: 'pyps_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  answerimgs: Array<Answerimgs>;
  /** An aggregate relationship */
  answerimgs_aggregate: Answerimgs_Aggregate;
  /** fetch data from the table: "answerimgs" using primary key columns */
  answerimgs_by_pk?: Maybe<Answerimgs>;
  /** fetch data from the table: "assessment_level" */
  assessment_level: Array<Assessment_Level>;
  /** fetch aggregated fields from the table: "assessment_level" */
  assessment_level_aggregate: Assessment_Level_Aggregate;
  /** fetch data from the table: "assessment_level" using primary key columns */
  assessment_level_by_pk?: Maybe<Assessment_Level>;
  /** fetch data from the table: "assessments" */
  assessments: Array<Assessments>;
  /** fetch aggregated fields from the table: "assessments" */
  assessments_aggregate: Assessments_Aggregate;
  /** fetch data from the table: "assessments" using primary key columns */
  assessments_by_pk?: Maybe<Assessments>;
  /** An array relationship */
  completedquestions: Array<Completedquestions>;
  /** An aggregate relationship */
  completedquestions_aggregate: Completedquestions_Aggregate;
  /** fetch data from the table: "completedquestions" using primary key columns */
  completedquestions_by_pk?: Maybe<Completedquestions>;
  /** fetch data from the table: "custom_answer_imgs" */
  custom_answer_imgs: Array<Custom_Answer_Imgs>;
  /** fetch aggregated fields from the table: "custom_answer_imgs" */
  custom_answer_imgs_aggregate: Custom_Answer_Imgs_Aggregate;
  /** fetch data from the table: "custom_answer_imgs" using primary key columns */
  custom_answer_imgs_by_pk?: Maybe<Custom_Answer_Imgs>;
  /** fetch data from the table: "custom_answers_for_worksheets" */
  custom_answers_for_worksheets: Array<Custom_Answers_For_Worksheets>;
  /** fetch aggregated fields from the table: "custom_answers_for_worksheets" */
  custom_answers_for_worksheets_aggregate: Custom_Answers_For_Worksheets_Aggregate;
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** fetch data from the table: "otps" */
  otps: Array<Otps>;
  /** fetch aggregated fields from the table: "otps" */
  otps_aggregate: Otps_Aggregate;
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>;
  /** fetch data from the table: "papers" */
  papers: Array<Papers>;
  /** fetch aggregated fields from the table: "papers" */
  papers_aggregate: Papers_Aggregate;
  /** fetch data from the table: "papers" using primary key columns */
  papers_by_pk?: Maybe<Papers>;
  /** An array relationship */
  pendingpayments: Array<Pendingpayments>;
  /** An aggregate relationship */
  pendingpayments_aggregate: Pendingpayments_Aggregate;
  /** fetch data from the table: "pendingpayments" using primary key columns */
  pendingpayments_by_pk?: Maybe<Pendingpayments>;
  /** fetch data from the table: "promo_code_redemptions" */
  promo_code_redemptions: Array<Promo_Code_Redemptions>;
  /** fetch aggregated fields from the table: "promo_code_redemptions" */
  promo_code_redemptions_aggregate: Promo_Code_Redemptions_Aggregate;
  /** fetch data from the table: "published_worksheets" */
  published_worksheets: Array<Published_Worksheets>;
  /** fetch aggregated fields from the table: "published_worksheets" */
  published_worksheets_aggregate: Published_Worksheets_Aggregate;
  /** fetch data from the table: "pyps" */
  pyps: Array<Pyps>;
  /** fetch aggregated fields from the table: "pyps" */
  pyps_aggregate: Pyps_Aggregate;
  /** fetch data from the table: "pyps" using primary key columns */
  pyps_by_pk?: Maybe<Pyps>;
  /** fetch data from the table: "question_topic" */
  question_topic: Array<Question_Topic>;
  /** fetch aggregated fields from the table: "question_topic" */
  question_topic_aggregate: Question_Topic_Aggregate;
  /** fetch data from the table: "question_topic" using primary key columns */
  question_topic_by_pk?: Maybe<Question_Topic>;
  /** An array relationship */
  questionimgs: Array<Questionimgs>;
  /** An aggregate relationship */
  questionimgs_aggregate: Questionimgs_Aggregate;
  /** fetch data from the table: "questionimgs" using primary key columns */
  questionimgs_by_pk?: Maybe<Questionimgs>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** An array relationship */
  savedquestions: Array<Savedquestions>;
  /** An aggregate relationship */
  savedquestions_aggregate: Savedquestions_Aggregate;
  /** fetch data from the table: "savedquestions" using primary key columns */
  savedquestions_by_pk?: Maybe<Savedquestions>;
  /** fetch data from the table: "school_subject" */
  school_subject: Array<School_Subject>;
  /** fetch aggregated fields from the table: "school_subject" */
  school_subject_aggregate: School_Subject_Aggregate;
  /** fetch data from the table: "school_subject" using primary key columns */
  school_subject_by_pk?: Maybe<School_Subject>;
  /** fetch data from the table: "schools" */
  schools: Array<Schools>;
  /** fetch aggregated fields from the table: "schools" */
  schools_aggregate: Schools_Aggregate;
  /** fetch data from the table: "schools" using primary key columns */
  schools_by_pk?: Maybe<Schools>;
  /** fetch data from the table: "subject_level" */
  subject_level: Array<Subject_Level>;
  /** fetch aggregated fields from the table: "subject_level" */
  subject_level_aggregate: Subject_Level_Aggregate;
  /** fetch data from the table: "subject_level" using primary key columns */
  subject_level_by_pk?: Maybe<Subject_Level>;
  /** fetch data from the table: "subject_paper" */
  subject_paper: Array<Subject_Paper>;
  /** fetch aggregated fields from the table: "subject_paper" */
  subject_paper_aggregate: Subject_Paper_Aggregate;
  /** fetch data from the table: "subject_paper" using primary key columns */
  subject_paper_by_pk?: Maybe<Subject_Paper>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "temp_worksheets" */
  temp_worksheets: Array<Temp_Worksheets>;
  /** fetch aggregated fields from the table: "temp_worksheets" */
  temp_worksheets_aggregate: Temp_Worksheets_Aggregate;
  /** fetch data from the table: "temp_worksheets" using primary key columns */
  temp_worksheets_by_pk?: Maybe<Temp_Worksheets>;
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** fetch data from the table: "upvotes" using primary key columns */
  upvotes_by_pk?: Maybe<Upvotes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  worksheets: Array<Worksheets>;
  /** An aggregate relationship */
  worksheets_aggregate: Worksheets_Aggregate;
  /** fetch data from the table: "worksheets" using primary key columns */
  worksheets_by_pk?: Maybe<Worksheets>;
  /** An array relationship */
  worksheets_to_questions: Array<Worksheets_To_Questions>;
  /** An aggregate relationship */
  worksheets_to_questions_aggregate: Worksheets_To_Questions_Aggregate;
  /** fetch data from the table: "worksheets_to_questions" using primary key columns */
  worksheets_to_questions_by_pk?: Maybe<Worksheets_To_Questions>;
};


export type Query_RootAnswerimgsArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


export type Query_RootAnswerimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


export type Query_RootAnswerimgs_By_PkArgs = {
  answerimgid: Scalars['bigint']['input'];
};


export type Query_RootAssessment_LevelArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


export type Query_RootAssessment_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


export type Query_RootAssessment_Level_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
  levelid: Scalars['bigint']['input'];
};


export type Query_RootAssessmentsArgs = {
  distinct_on?: InputMaybe<Array<Assessments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};


export type Query_RootAssessments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};


export type Query_RootAssessments_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
};


export type Query_RootCompletedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


export type Query_RootCompletedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


export type Query_RootCompletedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Query_RootCustom_Answer_ImgsArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answer_Imgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answer_Imgs_Order_By>>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};


export type Query_RootCustom_Answer_Imgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answer_Imgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answer_Imgs_Order_By>>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};


export type Query_RootCustom_Answer_Imgs_By_PkArgs = {
  customanswerimgid: Scalars['bigint']['input'];
};


export type Query_RootCustom_Answers_For_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answers_For_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answers_For_Worksheets_Order_By>>;
  where?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
};


export type Query_RootCustom_Answers_For_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answers_For_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answers_For_Worksheets_Order_By>>;
  where?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
};


export type Query_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Query_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Query_RootLevels_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
};


export type Query_RootOtpsArgs = {
  distinct_on?: InputMaybe<Array<Otps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Otps_Order_By>>;
  where?: InputMaybe<Otps_Bool_Exp>;
};


export type Query_RootOtps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Otps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Otps_Order_By>>;
  where?: InputMaybe<Otps_Bool_Exp>;
};


export type Query_RootOtps_By_PkArgs = {
  otp: Scalars['bpchar']['input'];
};


export type Query_RootPapersArgs = {
  distinct_on?: InputMaybe<Array<Papers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Papers_Order_By>>;
  where?: InputMaybe<Papers_Bool_Exp>;
};


export type Query_RootPapers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Papers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Papers_Order_By>>;
  where?: InputMaybe<Papers_Bool_Exp>;
};


export type Query_RootPapers_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
};


export type Query_RootPendingpaymentsArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


export type Query_RootPendingpayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


export type Query_RootPendingpayments_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Query_RootPromo_Code_RedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Promo_Code_Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Promo_Code_Redemptions_Order_By>>;
  where?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
};


export type Query_RootPromo_Code_Redemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Promo_Code_Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Promo_Code_Redemptions_Order_By>>;
  where?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
};


export type Query_RootPublished_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Published_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Worksheets_Order_By>>;
  where?: InputMaybe<Published_Worksheets_Bool_Exp>;
};


export type Query_RootPublished_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Published_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Worksheets_Order_By>>;
  where?: InputMaybe<Published_Worksheets_Bool_Exp>;
};


export type Query_RootPypsArgs = {
  distinct_on?: InputMaybe<Array<Pyps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pyps_Order_By>>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};


export type Query_RootPyps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pyps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pyps_Order_By>>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};


export type Query_RootPyps_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootQuestion_TopicArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


export type Query_RootQuestion_Topic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


export type Query_RootQuestion_Topic_By_PkArgs = {
  questionid: Scalars['String']['input'];
  topicid: Scalars['bigint']['input'];
};


export type Query_RootQuestionimgsArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


export type Query_RootQuestionimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


export type Query_RootQuestionimgs_By_PkArgs = {
  questionimgid: Scalars['bigint']['input'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_By_PkArgs = {
  reportid: Scalars['bigint']['input'];
};


export type Query_RootSavedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


export type Query_RootSavedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


export type Query_RootSavedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Query_RootSchool_SubjectArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


export type Query_RootSchool_Subject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


export type Query_RootSchool_Subject_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Query_RootSchoolsArgs = {
  distinct_on?: InputMaybe<Array<Schools_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schools_Order_By>>;
  where?: InputMaybe<Schools_Bool_Exp>;
};


export type Query_RootSchools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schools_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schools_Order_By>>;
  where?: InputMaybe<Schools_Bool_Exp>;
};


export type Query_RootSchools_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
};


export type Query_RootSubject_LevelArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


export type Query_RootSubject_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


export type Query_RootSubject_Level_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Query_RootSubject_PaperArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


export type Query_RootSubject_Paper_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


export type Query_RootSubject_Paper_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Query_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Query_RootSubjects_By_PkArgs = {
  subjectid: Scalars['bigint']['input'];
};


export type Query_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTemp_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Temp_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Temp_Worksheets_Order_By>>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};


export type Query_RootTemp_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Temp_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Temp_Worksheets_Order_By>>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};


export type Query_RootTemp_Worksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Query_RootTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Query_RootTopics_By_PkArgs = {
  topicid: Scalars['bigint']['input'];
};


export type Query_RootUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


export type Query_RootUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


export type Query_RootUpvotes_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootWorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


export type Query_RootWorksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


export type Query_RootWorksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootWorksheets_To_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


export type Query_RootWorksheets_To_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


export type Query_RootWorksheets_To_Questions_By_PkArgs = {
  question_id: Scalars['String']['input'];
  worksheet_id: Scalars['Int']['input'];
};

/** columns and relationships of "question_topic" */
export type Question_Topic = {
  __typename?: 'question_topic';
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  /** An object relationship */
  topic: Topics;
  topicid: Scalars['bigint']['output'];
};

/** aggregated selection of "question_topic" */
export type Question_Topic_Aggregate = {
  __typename?: 'question_topic_aggregate';
  aggregate?: Maybe<Question_Topic_Aggregate_Fields>;
  nodes: Array<Question_Topic>;
};

export type Question_Topic_Aggregate_Bool_Exp = {
  count?: InputMaybe<Question_Topic_Aggregate_Bool_Exp_Count>;
};

export type Question_Topic_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Question_Topic_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Question_Topic_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "question_topic" */
export type Question_Topic_Aggregate_Fields = {
  __typename?: 'question_topic_aggregate_fields';
  avg?: Maybe<Question_Topic_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Question_Topic_Max_Fields>;
  min?: Maybe<Question_Topic_Min_Fields>;
  stddev?: Maybe<Question_Topic_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Topic_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Topic_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Topic_Sum_Fields>;
  var_pop?: Maybe<Question_Topic_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Topic_Var_Samp_Fields>;
  variance?: Maybe<Question_Topic_Variance_Fields>;
};


/** aggregate fields of "question_topic" */
export type Question_Topic_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Question_Topic_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "question_topic" */
export type Question_Topic_Aggregate_Order_By = {
  avg?: InputMaybe<Question_Topic_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Question_Topic_Max_Order_By>;
  min?: InputMaybe<Question_Topic_Min_Order_By>;
  stddev?: InputMaybe<Question_Topic_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Question_Topic_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Question_Topic_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Question_Topic_Sum_Order_By>;
  var_pop?: InputMaybe<Question_Topic_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Question_Topic_Var_Samp_Order_By>;
  variance?: InputMaybe<Question_Topic_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question_topic" */
export type Question_Topic_Arr_Rel_Insert_Input = {
  data: Array<Question_Topic_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Question_Topic_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Topic_Avg_Fields = {
  __typename?: 'question_topic_avg_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "question_topic" */
export type Question_Topic_Avg_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question_topic". All fields are combined with a logical 'AND'. */
export type Question_Topic_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Topic_Bool_Exp>>;
  _not?: InputMaybe<Question_Topic_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Topic_Bool_Exp>>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  topic?: InputMaybe<Topics_Bool_Exp>;
  topicid?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_topic" */
export enum Question_Topic_Constraint {
  /** unique or primary key constraint on columns "topicid", "questionid" */
  QuestionTopicPkey = 'question_topic_pkey'
}

/** input type for incrementing numeric columns in table "question_topic" */
export type Question_Topic_Inc_Input = {
  topicid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "question_topic" */
export type Question_Topic_Insert_Input = {
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Topics_Obj_Rel_Insert_Input>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Question_Topic_Max_Fields = {
  __typename?: 'question_topic_max_fields';
  questionid?: Maybe<Scalars['String']['output']>;
  topicid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "question_topic" */
export type Question_Topic_Max_Order_By = {
  questionid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Topic_Min_Fields = {
  __typename?: 'question_topic_min_fields';
  questionid?: Maybe<Scalars['String']['output']>;
  topicid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "question_topic" */
export type Question_Topic_Min_Order_By = {
  questionid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "question_topic" */
export type Question_Topic_Mutation_Response = {
  __typename?: 'question_topic_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Question_Topic>;
};

/** on_conflict condition type for table "question_topic" */
export type Question_Topic_On_Conflict = {
  constraint: Question_Topic_Constraint;
  update_columns?: Array<Question_Topic_Update_Column>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};

/** Ordering options when selecting data from "question_topic". */
export type Question_Topic_Order_By = {
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  topic?: InputMaybe<Topics_Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question_topic */
export type Question_Topic_Pk_Columns_Input = {
  questionid: Scalars['String']['input'];
  topicid: Scalars['bigint']['input'];
};

/** select columns of table "question_topic" */
export enum Question_Topic_Select_Column {
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Topicid = 'topicid'
}

/** input type for updating data in table "question_topic" */
export type Question_Topic_Set_Input = {
  questionid?: InputMaybe<Scalars['String']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Question_Topic_Stddev_Fields = {
  __typename?: 'question_topic_stddev_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "question_topic" */
export type Question_Topic_Stddev_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Topic_Stddev_Pop_Fields = {
  __typename?: 'question_topic_stddev_pop_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "question_topic" */
export type Question_Topic_Stddev_Pop_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Topic_Stddev_Samp_Fields = {
  __typename?: 'question_topic_stddev_samp_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "question_topic" */
export type Question_Topic_Stddev_Samp_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "question_topic" */
export type Question_Topic_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Question_Topic_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Question_Topic_Stream_Cursor_Value_Input = {
  questionid?: InputMaybe<Scalars['String']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Question_Topic_Sum_Fields = {
  __typename?: 'question_topic_sum_fields';
  topicid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "question_topic" */
export type Question_Topic_Sum_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** update columns of table "question_topic" */
export enum Question_Topic_Update_Column {
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Topicid = 'topicid'
}

export type Question_Topic_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Question_Topic_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Question_Topic_Set_Input>;
  /** filter the rows which have to be updated */
  where: Question_Topic_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Question_Topic_Var_Pop_Fields = {
  __typename?: 'question_topic_var_pop_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "question_topic" */
export type Question_Topic_Var_Pop_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Topic_Var_Samp_Fields = {
  __typename?: 'question_topic_var_samp_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "question_topic" */
export type Question_Topic_Var_Samp_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Topic_Variance_Fields = {
  __typename?: 'question_topic_variance_fields';
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "question_topic" */
export type Question_Topic_Variance_Order_By = {
  topicid?: InputMaybe<Order_By>;
};

/** columns and relationships of "questionimgs" */
export type Questionimgs = {
  __typename?: 'questionimgs';
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  questionimg: Scalars['bytea']['output'];
  questionimgid: Scalars['bigint']['output'];
  questionimgname: Scalars['String']['output'];
  questionimgocrtext: Scalars['String']['output'];
};

/** aggregated selection of "questionimgs" */
export type Questionimgs_Aggregate = {
  __typename?: 'questionimgs_aggregate';
  aggregate?: Maybe<Questionimgs_Aggregate_Fields>;
  nodes: Array<Questionimgs>;
};

export type Questionimgs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Questionimgs_Aggregate_Bool_Exp_Count>;
};

export type Questionimgs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Questionimgs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questionimgs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "questionimgs" */
export type Questionimgs_Aggregate_Fields = {
  __typename?: 'questionimgs_aggregate_fields';
  avg?: Maybe<Questionimgs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questionimgs_Max_Fields>;
  min?: Maybe<Questionimgs_Min_Fields>;
  stddev?: Maybe<Questionimgs_Stddev_Fields>;
  stddev_pop?: Maybe<Questionimgs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionimgs_Stddev_Samp_Fields>;
  sum?: Maybe<Questionimgs_Sum_Fields>;
  var_pop?: Maybe<Questionimgs_Var_Pop_Fields>;
  var_samp?: Maybe<Questionimgs_Var_Samp_Fields>;
  variance?: Maybe<Questionimgs_Variance_Fields>;
};


/** aggregate fields of "questionimgs" */
export type Questionimgs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questionimgs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "questionimgs" */
export type Questionimgs_Aggregate_Order_By = {
  avg?: InputMaybe<Questionimgs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questionimgs_Max_Order_By>;
  min?: InputMaybe<Questionimgs_Min_Order_By>;
  stddev?: InputMaybe<Questionimgs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Questionimgs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Questionimgs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Questionimgs_Sum_Order_By>;
  var_pop?: InputMaybe<Questionimgs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Questionimgs_Var_Samp_Order_By>;
  variance?: InputMaybe<Questionimgs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionimgs" */
export type Questionimgs_Arr_Rel_Insert_Input = {
  data: Array<Questionimgs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Questionimgs_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionimgs_Avg_Fields = {
  __typename?: 'questionimgs_avg_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "questionimgs" */
export type Questionimgs_Avg_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionimgs". All fields are combined with a logical 'AND'. */
export type Questionimgs_Bool_Exp = {
  _and?: InputMaybe<Array<Questionimgs_Bool_Exp>>;
  _not?: InputMaybe<Questionimgs_Bool_Exp>;
  _or?: InputMaybe<Array<Questionimgs_Bool_Exp>>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  questionimg?: InputMaybe<Bytea_Comparison_Exp>;
  questionimgid?: InputMaybe<Bigint_Comparison_Exp>;
  questionimgname?: InputMaybe<String_Comparison_Exp>;
  questionimgocrtext?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionimgs" */
export enum Questionimgs_Constraint {
  /** unique or primary key constraint on columns "questionimgid" */
  QuestionimgsPkey = 'questionimgs_pkey'
}

/** input type for incrementing numeric columns in table "questionimgs" */
export type Questionimgs_Inc_Input = {
  questionimgid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "questionimgs" */
export type Questionimgs_Insert_Input = {
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  questionimg?: InputMaybe<Scalars['bytea']['input']>;
  questionimgid?: InputMaybe<Scalars['bigint']['input']>;
  questionimgname?: InputMaybe<Scalars['String']['input']>;
  questionimgocrtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Questionimgs_Max_Fields = {
  __typename?: 'questionimgs_max_fields';
  questionid?: Maybe<Scalars['String']['output']>;
  questionimgid?: Maybe<Scalars['bigint']['output']>;
  questionimgname?: Maybe<Scalars['String']['output']>;
  questionimgocrtext?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "questionimgs" */
export type Questionimgs_Max_Order_By = {
  questionid?: InputMaybe<Order_By>;
  questionimgid?: InputMaybe<Order_By>;
  questionimgname?: InputMaybe<Order_By>;
  questionimgocrtext?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questionimgs_Min_Fields = {
  __typename?: 'questionimgs_min_fields';
  questionid?: Maybe<Scalars['String']['output']>;
  questionimgid?: Maybe<Scalars['bigint']['output']>;
  questionimgname?: Maybe<Scalars['String']['output']>;
  questionimgocrtext?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "questionimgs" */
export type Questionimgs_Min_Order_By = {
  questionid?: InputMaybe<Order_By>;
  questionimgid?: InputMaybe<Order_By>;
  questionimgname?: InputMaybe<Order_By>;
  questionimgocrtext?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questionimgs" */
export type Questionimgs_Mutation_Response = {
  __typename?: 'questionimgs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questionimgs>;
};

/** on_conflict condition type for table "questionimgs" */
export type Questionimgs_On_Conflict = {
  constraint: Questionimgs_Constraint;
  update_columns?: Array<Questionimgs_Update_Column>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};

/** Ordering options when selecting data from "questionimgs". */
export type Questionimgs_Order_By = {
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  questionimg?: InputMaybe<Order_By>;
  questionimgid?: InputMaybe<Order_By>;
  questionimgname?: InputMaybe<Order_By>;
  questionimgocrtext?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questionimgs */
export type Questionimgs_Pk_Columns_Input = {
  questionimgid: Scalars['bigint']['input'];
};

/** select columns of table "questionimgs" */
export enum Questionimgs_Select_Column {
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Questionimg = 'questionimg',
  /** column name */
  Questionimgid = 'questionimgid',
  /** column name */
  Questionimgname = 'questionimgname',
  /** column name */
  Questionimgocrtext = 'questionimgocrtext'
}

/** input type for updating data in table "questionimgs" */
export type Questionimgs_Set_Input = {
  questionid?: InputMaybe<Scalars['String']['input']>;
  questionimg?: InputMaybe<Scalars['bytea']['input']>;
  questionimgid?: InputMaybe<Scalars['bigint']['input']>;
  questionimgname?: InputMaybe<Scalars['String']['input']>;
  questionimgocrtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Questionimgs_Stddev_Fields = {
  __typename?: 'questionimgs_stddev_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "questionimgs" */
export type Questionimgs_Stddev_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionimgs_Stddev_Pop_Fields = {
  __typename?: 'questionimgs_stddev_pop_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "questionimgs" */
export type Questionimgs_Stddev_Pop_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionimgs_Stddev_Samp_Fields = {
  __typename?: 'questionimgs_stddev_samp_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "questionimgs" */
export type Questionimgs_Stddev_Samp_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "questionimgs" */
export type Questionimgs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questionimgs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questionimgs_Stream_Cursor_Value_Input = {
  questionid?: InputMaybe<Scalars['String']['input']>;
  questionimg?: InputMaybe<Scalars['bytea']['input']>;
  questionimgid?: InputMaybe<Scalars['bigint']['input']>;
  questionimgname?: InputMaybe<Scalars['String']['input']>;
  questionimgocrtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Questionimgs_Sum_Fields = {
  __typename?: 'questionimgs_sum_fields';
  questionimgid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "questionimgs" */
export type Questionimgs_Sum_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** update columns of table "questionimgs" */
export enum Questionimgs_Update_Column {
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Questionimg = 'questionimg',
  /** column name */
  Questionimgid = 'questionimgid',
  /** column name */
  Questionimgname = 'questionimgname',
  /** column name */
  Questionimgocrtext = 'questionimgocrtext'
}

export type Questionimgs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questionimgs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questionimgs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questionimgs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questionimgs_Var_Pop_Fields = {
  __typename?: 'questionimgs_var_pop_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "questionimgs" */
export type Questionimgs_Var_Pop_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionimgs_Var_Samp_Fields = {
  __typename?: 'questionimgs_var_samp_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "questionimgs" */
export type Questionimgs_Var_Samp_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionimgs_Variance_Fields = {
  __typename?: 'questionimgs_variance_fields';
  questionimgid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "questionimgs" */
export type Questionimgs_Variance_Order_By = {
  questionimgid?: InputMaybe<Order_By>;
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  /** An array relationship */
  answerimgs: Array<Answerimgs>;
  /** An aggregate relationship */
  answerimgs_aggregate: Answerimgs_Aggregate;
  /** An object relationship */
  assessment: Assessments;
  assessmentid: Scalars['bigint']['output'];
  baseid: Scalars['String']['output'];
  /** An array relationship */
  completedquestions: Array<Completedquestions>;
  /** An aggregate relationship */
  completedquestions_aggregate: Completedquestions_Aggregate;
  creator?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isactive: Scalars['Boolean']['output'];
  lastmodified: Scalars['timestamp']['output'];
  /** An object relationship */
  level: Levels;
  levelid: Scalars['bigint']['output'];
  /** An object relationship */
  paper: Papers;
  paperid: Scalars['bigint']['output'];
  /** An array relationship */
  pendingpayments: Array<Pendingpayments>;
  /** An aggregate relationship */
  pendingpayments_aggregate: Pendingpayments_Aggregate;
  questionParts: Array<Scalars['String']['output']>;
  /** An array relationship */
  question_topics: Array<Question_Topic>;
  /** An aggregate relationship */
  question_topics_aggregate: Question_Topic_Aggregate;
  /** An array relationship */
  questionimgs: Array<Questionimgs>;
  /** An aggregate relationship */
  questionimgs_aggregate: Questionimgs_Aggregate;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** An array relationship */
  savedquestions: Array<Savedquestions>;
  /** An aggregate relationship */
  savedquestions_aggregate: Savedquestions_Aggregate;
  /** An object relationship */
  school: Schools;
  schoolid: Scalars['bigint']['output'];
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  worksheets_to_questions: Array<Worksheets_To_Questions>;
  /** An aggregate relationship */
  worksheets_to_questions_aggregate: Worksheets_To_Questions_Aggregate;
};


/** columns and relationships of "questions" */
export type QuestionsAnswerimgsArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsAnswerimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsCompletedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsCompletedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsPendingpaymentsArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsPendingpayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsQuestion_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsQuestion_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsQuestionimgsArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsQuestionimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsSavedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsSavedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsWorksheets_To_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsWorksheets_To_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

export type Questions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Questions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Questions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Questions_Aggregate_Bool_Exp_Count>;
};

export type Questions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Questions_Select_Column_Questions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Questions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Questions_Select_Column_Questions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Questions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  avg?: Maybe<Questions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  avg?: InputMaybe<Questions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questions_Max_Order_By>;
  min?: InputMaybe<Questions_Min_Order_By>;
  stddev?: InputMaybe<Questions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Questions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Questions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Questions_Sum_Order_By>;
  var_pop?: InputMaybe<Questions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Questions_Var_Samp_Order_By>;
  variance?: InputMaybe<Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'questions_avg_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "questions" */
export type Questions_Avg_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  answerimgs?: InputMaybe<Answerimgs_Bool_Exp>;
  answerimgs_aggregate?: InputMaybe<Answerimgs_Aggregate_Bool_Exp>;
  assessment?: InputMaybe<Assessments_Bool_Exp>;
  assessmentid?: InputMaybe<Bigint_Comparison_Exp>;
  baseid?: InputMaybe<String_Comparison_Exp>;
  completedquestions?: InputMaybe<Completedquestions_Bool_Exp>;
  completedquestions_aggregate?: InputMaybe<Completedquestions_Aggregate_Bool_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  lastmodified?: InputMaybe<Timestamp_Comparison_Exp>;
  level?: InputMaybe<Levels_Bool_Exp>;
  levelid?: InputMaybe<Bigint_Comparison_Exp>;
  paper?: InputMaybe<Papers_Bool_Exp>;
  paperid?: InputMaybe<Bigint_Comparison_Exp>;
  pendingpayments?: InputMaybe<Pendingpayments_Bool_Exp>;
  pendingpayments_aggregate?: InputMaybe<Pendingpayments_Aggregate_Bool_Exp>;
  questionParts?: InputMaybe<String_Array_Comparison_Exp>;
  question_topics?: InputMaybe<Question_Topic_Bool_Exp>;
  question_topics_aggregate?: InputMaybe<Question_Topic_Aggregate_Bool_Exp>;
  questionimgs?: InputMaybe<Questionimgs_Bool_Exp>;
  questionimgs_aggregate?: InputMaybe<Questionimgs_Aggregate_Bool_Exp>;
  reports?: InputMaybe<Reports_Bool_Exp>;
  reports_aggregate?: InputMaybe<Reports_Aggregate_Bool_Exp>;
  savedquestions?: InputMaybe<Savedquestions_Bool_Exp>;
  savedquestions_aggregate?: InputMaybe<Savedquestions_Aggregate_Bool_Exp>;
  school?: InputMaybe<Schools_Bool_Exp>;
  schoolid?: InputMaybe<Bigint_Comparison_Exp>;
  upvotes?: InputMaybe<Upvotes_Bool_Exp>;
  upvotes_aggregate?: InputMaybe<Upvotes_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  worksheets_to_questions?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
  worksheets_to_questions_aggregate?: InputMaybe<Worksheets_To_Questions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsIdUnique = 'questions_id_unique'
}

/** input type for incrementing numeric columns in table "questions" */
export type Questions_Inc_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answerimgs?: InputMaybe<Answerimgs_Arr_Rel_Insert_Input>;
  assessment?: InputMaybe<Assessments_Obj_Rel_Insert_Input>;
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  baseid?: InputMaybe<Scalars['String']['input']>;
  completedquestions?: InputMaybe<Completedquestions_Arr_Rel_Insert_Input>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  lastmodified?: InputMaybe<Scalars['timestamp']['input']>;
  level?: InputMaybe<Levels_Obj_Rel_Insert_Input>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  paper?: InputMaybe<Papers_Obj_Rel_Insert_Input>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  pendingpayments?: InputMaybe<Pendingpayments_Arr_Rel_Insert_Input>;
  questionParts?: InputMaybe<Array<Scalars['String']['input']>>;
  question_topics?: InputMaybe<Question_Topic_Arr_Rel_Insert_Input>;
  questionimgs?: InputMaybe<Questionimgs_Arr_Rel_Insert_Input>;
  reports?: InputMaybe<Reports_Arr_Rel_Insert_Input>;
  savedquestions?: InputMaybe<Savedquestions_Arr_Rel_Insert_Input>;
  school?: InputMaybe<Schools_Obj_Rel_Insert_Input>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  upvotes?: InputMaybe<Upvotes_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  worksheets_to_questions?: InputMaybe<Worksheets_To_Questions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  baseid?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastmodified?: Maybe<Scalars['timestamp']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
  questionParts?: Maybe<Array<Scalars['String']['output']>>;
  schoolid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  baseid?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastmodified?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  questionParts?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  baseid?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastmodified?: Maybe<Scalars['timestamp']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
  questionParts?: Maybe<Array<Scalars['String']['output']>>;
  schoolid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  baseid?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastmodified?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  questionParts?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answerimgs_aggregate?: InputMaybe<Answerimgs_Aggregate_Order_By>;
  assessment?: InputMaybe<Assessments_Order_By>;
  assessmentid?: InputMaybe<Order_By>;
  baseid?: InputMaybe<Order_By>;
  completedquestions_aggregate?: InputMaybe<Completedquestions_Aggregate_Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  lastmodified?: InputMaybe<Order_By>;
  level?: InputMaybe<Levels_Order_By>;
  levelid?: InputMaybe<Order_By>;
  paper?: InputMaybe<Papers_Order_By>;
  paperid?: InputMaybe<Order_By>;
  pendingpayments_aggregate?: InputMaybe<Pendingpayments_Aggregate_Order_By>;
  questionParts?: InputMaybe<Order_By>;
  question_topics_aggregate?: InputMaybe<Question_Topic_Aggregate_Order_By>;
  questionimgs_aggregate?: InputMaybe<Questionimgs_Aggregate_Order_By>;
  reports_aggregate?: InputMaybe<Reports_Aggregate_Order_By>;
  savedquestions_aggregate?: InputMaybe<Savedquestions_Aggregate_Order_By>;
  school?: InputMaybe<Schools_Order_By>;
  schoolid?: InputMaybe<Order_By>;
  upvotes_aggregate?: InputMaybe<Upvotes_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  worksheets_to_questions_aggregate?: InputMaybe<Worksheets_To_Questions_Aggregate_Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Baseid = 'baseid',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Lastmodified = 'lastmodified',
  /** column name */
  Levelid = 'levelid',
  /** column name */
  Paperid = 'paperid',
  /** column name */
  QuestionParts = 'questionParts',
  /** column name */
  Schoolid = 'schoolid'
}

/** select "questions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "questions" */
export enum Questions_Select_Column_Questions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Isactive = 'isactive'
}

/** select "questions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "questions" */
export enum Questions_Select_Column_Questions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Isactive = 'isactive'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  baseid?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  lastmodified?: InputMaybe<Scalars['timestamp']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  questionParts?: InputMaybe<Array<Scalars['String']['input']>>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'questions_stddev_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "questions" */
export type Questions_Stddev_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'questions_stddev_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "questions" */
export type Questions_Stddev_Pop_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'questions_stddev_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "questions" */
export type Questions_Stddev_Samp_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  assessmentid?: InputMaybe<Scalars['bigint']['input']>;
  baseid?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  lastmodified?: InputMaybe<Scalars['timestamp']['input']>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  questionParts?: InputMaybe<Array<Scalars['String']['input']>>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'questions_sum_fields';
  assessmentid?: Maybe<Scalars['bigint']['output']>;
  levelid?: Maybe<Scalars['bigint']['output']>;
  paperid?: Maybe<Scalars['bigint']['output']>;
  schoolid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "questions" */
export type Questions_Sum_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Assessmentid = 'assessmentid',
  /** column name */
  Baseid = 'baseid',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Lastmodified = 'lastmodified',
  /** column name */
  Levelid = 'levelid',
  /** column name */
  Paperid = 'paperid',
  /** column name */
  QuestionParts = 'questionParts',
  /** column name */
  Schoolid = 'schoolid'
}

export type Questions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'questions_var_pop_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "questions" */
export type Questions_Var_Pop_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'questions_var_samp_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "questions" */
export type Questions_Var_Samp_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'questions_variance_fields';
  assessmentid?: Maybe<Scalars['Float']['output']>;
  levelid?: Maybe<Scalars['Float']['output']>;
  paperid?: Maybe<Scalars['Float']['output']>;
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "questions" */
export type Questions_Variance_Order_By = {
  assessmentid?: InputMaybe<Order_By>;
  levelid?: InputMaybe<Order_By>;
  paperid?: InputMaybe<Order_By>;
  schoolid?: InputMaybe<Order_By>;
};

/** columns and relationships of "reports" */
export type Reports = {
  __typename?: 'reports';
  email: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  reportid: Scalars['bigint']['output'];
  reporttext: Scalars['String']['output'];
};

/** aggregated selection of "reports" */
export type Reports_Aggregate = {
  __typename?: 'reports_aggregate';
  aggregate?: Maybe<Reports_Aggregate_Fields>;
  nodes: Array<Reports>;
};

export type Reports_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reports_Aggregate_Bool_Exp_Count>;
};

export type Reports_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Reports_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reports" */
export type Reports_Aggregate_Fields = {
  __typename?: 'reports_aggregate_fields';
  avg?: Maybe<Reports_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Reports_Max_Fields>;
  min?: Maybe<Reports_Min_Fields>;
  stddev?: Maybe<Reports_Stddev_Fields>;
  stddev_pop?: Maybe<Reports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reports_Stddev_Samp_Fields>;
  sum?: Maybe<Reports_Sum_Fields>;
  var_pop?: Maybe<Reports_Var_Pop_Fields>;
  var_samp?: Maybe<Reports_Var_Samp_Fields>;
  variance?: Maybe<Reports_Variance_Fields>;
};


/** aggregate fields of "reports" */
export type Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reports" */
export type Reports_Aggregate_Order_By = {
  avg?: InputMaybe<Reports_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reports_Max_Order_By>;
  min?: InputMaybe<Reports_Min_Order_By>;
  stddev?: InputMaybe<Reports_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reports_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reports_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reports_Sum_Order_By>;
  var_pop?: InputMaybe<Reports_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reports_Var_Samp_Order_By>;
  variance?: InputMaybe<Reports_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reports" */
export type Reports_Arr_Rel_Insert_Input = {
  data: Array<Reports_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};

/** aggregate avg on columns */
export type Reports_Avg_Fields = {
  __typename?: 'reports_avg_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "reports" */
export type Reports_Avg_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reports". All fields are combined with a logical 'AND'. */
export type Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Reports_Bool_Exp>>;
  _not?: InputMaybe<Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Reports_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  reportid?: InputMaybe<Bigint_Comparison_Exp>;
  reporttext?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reports" */
export enum Reports_Constraint {
  /** unique or primary key constraint on columns "reportid" */
  ReportsPkey = 'reports_pkey'
}

/** input type for incrementing numeric columns in table "reports" */
export type Reports_Inc_Input = {
  reportid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "reports" */
export type Reports_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  reportid?: InputMaybe<Scalars['bigint']['input']>;
  reporttext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Reports_Max_Fields = {
  __typename?: 'reports_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
  reportid?: Maybe<Scalars['bigint']['output']>;
  reporttext?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "reports" */
export type Reports_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
  reportid?: InputMaybe<Order_By>;
  reporttext?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reports_Min_Fields = {
  __typename?: 'reports_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
  reportid?: Maybe<Scalars['bigint']['output']>;
  reporttext?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "reports" */
export type Reports_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
  reportid?: InputMaybe<Order_By>;
  reporttext?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reports" */
export type Reports_Mutation_Response = {
  __typename?: 'reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reports>;
};

/** on_conflict condition type for table "reports" */
export type Reports_On_Conflict = {
  constraint: Reports_Constraint;
  update_columns?: Array<Reports_Update_Column>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "reports". */
export type Reports_Order_By = {
  email?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  reportid?: InputMaybe<Order_By>;
  reporttext?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reports */
export type Reports_Pk_Columns_Input = {
  reportid: Scalars['bigint']['input'];
};

/** select columns of table "reports" */
export enum Reports_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Reportid = 'reportid',
  /** column name */
  Reporttext = 'reporttext'
}

/** input type for updating data in table "reports" */
export type Reports_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  reportid?: InputMaybe<Scalars['bigint']['input']>;
  reporttext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Reports_Stddev_Fields = {
  __typename?: 'reports_stddev_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "reports" */
export type Reports_Stddev_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reports_Stddev_Pop_Fields = {
  __typename?: 'reports_stddev_pop_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "reports" */
export type Reports_Stddev_Pop_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reports_Stddev_Samp_Fields = {
  __typename?: 'reports_stddev_samp_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "reports" */
export type Reports_Stddev_Samp_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "reports" */
export type Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reports_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  reportid?: InputMaybe<Scalars['bigint']['input']>;
  reporttext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Reports_Sum_Fields = {
  __typename?: 'reports_sum_fields';
  reportid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "reports" */
export type Reports_Sum_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** update columns of table "reports" */
export enum Reports_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid',
  /** column name */
  Reportid = 'reportid',
  /** column name */
  Reporttext = 'reporttext'
}

export type Reports_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reports_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reports_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Reports_Var_Pop_Fields = {
  __typename?: 'reports_var_pop_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "reports" */
export type Reports_Var_Pop_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reports_Var_Samp_Fields = {
  __typename?: 'reports_var_samp_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "reports" */
export type Reports_Var_Samp_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reports_Variance_Fields = {
  __typename?: 'reports_variance_fields';
  reportid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "reports" */
export type Reports_Variance_Order_By = {
  reportid?: InputMaybe<Order_By>;
};

/** columns and relationships of "savedquestions" */
export type Savedquestions = {
  __typename?: 'savedquestions';
  email: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "savedquestions" */
export type Savedquestions_Aggregate = {
  __typename?: 'savedquestions_aggregate';
  aggregate?: Maybe<Savedquestions_Aggregate_Fields>;
  nodes: Array<Savedquestions>;
};

export type Savedquestions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Savedquestions_Aggregate_Bool_Exp_Count>;
};

export type Savedquestions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Savedquestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Savedquestions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "savedquestions" */
export type Savedquestions_Aggregate_Fields = {
  __typename?: 'savedquestions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Savedquestions_Max_Fields>;
  min?: Maybe<Savedquestions_Min_Fields>;
};


/** aggregate fields of "savedquestions" */
export type Savedquestions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Savedquestions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "savedquestions" */
export type Savedquestions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Savedquestions_Max_Order_By>;
  min?: InputMaybe<Savedquestions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "savedquestions" */
export type Savedquestions_Arr_Rel_Insert_Input = {
  data: Array<Savedquestions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Savedquestions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "savedquestions". All fields are combined with a logical 'AND'. */
export type Savedquestions_Bool_Exp = {
  _and?: InputMaybe<Array<Savedquestions_Bool_Exp>>;
  _not?: InputMaybe<Savedquestions_Bool_Exp>;
  _or?: InputMaybe<Array<Savedquestions_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "savedquestions" */
export enum Savedquestions_Constraint {
  /** unique or primary key constraint on columns "email", "questionid" */
  SavedquestionsPkey = 'savedquestions_pkey'
}

/** input type for inserting data into table "savedquestions" */
export type Savedquestions_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Savedquestions_Max_Fields = {
  __typename?: 'savedquestions_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "savedquestions" */
export type Savedquestions_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Savedquestions_Min_Fields = {
  __typename?: 'savedquestions_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "savedquestions" */
export type Savedquestions_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "savedquestions" */
export type Savedquestions_Mutation_Response = {
  __typename?: 'savedquestions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Savedquestions>;
};

/** on_conflict condition type for table "savedquestions" */
export type Savedquestions_On_Conflict = {
  constraint: Savedquestions_Constraint;
  update_columns?: Array<Savedquestions_Update_Column>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};

/** Ordering options when selecting data from "savedquestions". */
export type Savedquestions_Order_By = {
  email?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: savedquestions */
export type Savedquestions_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};

/** select columns of table "savedquestions" */
export enum Savedquestions_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

/** input type for updating data in table "savedquestions" */
export type Savedquestions_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "savedquestions" */
export type Savedquestions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Savedquestions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Savedquestions_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "savedquestions" */
export enum Savedquestions_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

export type Savedquestions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Savedquestions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Savedquestions_Bool_Exp;
};

/** columns and relationships of "school_subject" */
export type School_Subject = {
  __typename?: 'school_subject';
  /** An object relationship */
  school: Schools;
  schoolid: Scalars['bigint']['output'];
  /** An object relationship */
  subject: Subjects;
  subjectid: Scalars['bigint']['output'];
};

/** aggregated selection of "school_subject" */
export type School_Subject_Aggregate = {
  __typename?: 'school_subject_aggregate';
  aggregate?: Maybe<School_Subject_Aggregate_Fields>;
  nodes: Array<School_Subject>;
};

export type School_Subject_Aggregate_Bool_Exp = {
  count?: InputMaybe<School_Subject_Aggregate_Bool_Exp_Count>;
};

export type School_Subject_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<School_Subject_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<School_Subject_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "school_subject" */
export type School_Subject_Aggregate_Fields = {
  __typename?: 'school_subject_aggregate_fields';
  avg?: Maybe<School_Subject_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<School_Subject_Max_Fields>;
  min?: Maybe<School_Subject_Min_Fields>;
  stddev?: Maybe<School_Subject_Stddev_Fields>;
  stddev_pop?: Maybe<School_Subject_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<School_Subject_Stddev_Samp_Fields>;
  sum?: Maybe<School_Subject_Sum_Fields>;
  var_pop?: Maybe<School_Subject_Var_Pop_Fields>;
  var_samp?: Maybe<School_Subject_Var_Samp_Fields>;
  variance?: Maybe<School_Subject_Variance_Fields>;
};


/** aggregate fields of "school_subject" */
export type School_Subject_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<School_Subject_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "school_subject" */
export type School_Subject_Aggregate_Order_By = {
  avg?: InputMaybe<School_Subject_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<School_Subject_Max_Order_By>;
  min?: InputMaybe<School_Subject_Min_Order_By>;
  stddev?: InputMaybe<School_Subject_Stddev_Order_By>;
  stddev_pop?: InputMaybe<School_Subject_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<School_Subject_Stddev_Samp_Order_By>;
  sum?: InputMaybe<School_Subject_Sum_Order_By>;
  var_pop?: InputMaybe<School_Subject_Var_Pop_Order_By>;
  var_samp?: InputMaybe<School_Subject_Var_Samp_Order_By>;
  variance?: InputMaybe<School_Subject_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "school_subject" */
export type School_Subject_Arr_Rel_Insert_Input = {
  data: Array<School_Subject_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<School_Subject_On_Conflict>;
};

/** aggregate avg on columns */
export type School_Subject_Avg_Fields = {
  __typename?: 'school_subject_avg_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "school_subject" */
export type School_Subject_Avg_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "school_subject". All fields are combined with a logical 'AND'. */
export type School_Subject_Bool_Exp = {
  _and?: InputMaybe<Array<School_Subject_Bool_Exp>>;
  _not?: InputMaybe<School_Subject_Bool_Exp>;
  _or?: InputMaybe<Array<School_Subject_Bool_Exp>>;
  school?: InputMaybe<Schools_Bool_Exp>;
  schoolid?: InputMaybe<Bigint_Comparison_Exp>;
  subject?: InputMaybe<Subjects_Bool_Exp>;
  subjectid?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "school_subject" */
export enum School_Subject_Constraint {
  /** unique or primary key constraint on columns "schoolid", "subjectid" */
  SchoolSubjectPkey = 'school_subject_pkey'
}

/** input type for incrementing numeric columns in table "school_subject" */
export type School_Subject_Inc_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "school_subject" */
export type School_Subject_Insert_Input = {
  school?: InputMaybe<Schools_Obj_Rel_Insert_Input>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  subject?: InputMaybe<Subjects_Obj_Rel_Insert_Input>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type School_Subject_Max_Fields = {
  __typename?: 'school_subject_max_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "school_subject" */
export type School_Subject_Max_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type School_Subject_Min_Fields = {
  __typename?: 'school_subject_min_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "school_subject" */
export type School_Subject_Min_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "school_subject" */
export type School_Subject_Mutation_Response = {
  __typename?: 'school_subject_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<School_Subject>;
};

/** on_conflict condition type for table "school_subject" */
export type School_Subject_On_Conflict = {
  constraint: School_Subject_Constraint;
  update_columns?: Array<School_Subject_Update_Column>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};

/** Ordering options when selecting data from "school_subject". */
export type School_Subject_Order_By = {
  school?: InputMaybe<Schools_Order_By>;
  schoolid?: InputMaybe<Order_By>;
  subject?: InputMaybe<Subjects_Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: school_subject */
export type School_Subject_Pk_Columns_Input = {
  schoolid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};

/** select columns of table "school_subject" */
export enum School_Subject_Select_Column {
  /** column name */
  Schoolid = 'schoolid',
  /** column name */
  Subjectid = 'subjectid'
}

/** input type for updating data in table "school_subject" */
export type School_Subject_Set_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type School_Subject_Stddev_Fields = {
  __typename?: 'school_subject_stddev_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "school_subject" */
export type School_Subject_Stddev_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type School_Subject_Stddev_Pop_Fields = {
  __typename?: 'school_subject_stddev_pop_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "school_subject" */
export type School_Subject_Stddev_Pop_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type School_Subject_Stddev_Samp_Fields = {
  __typename?: 'school_subject_stddev_samp_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "school_subject" */
export type School_Subject_Stddev_Samp_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "school_subject" */
export type School_Subject_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: School_Subject_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type School_Subject_Stream_Cursor_Value_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type School_Subject_Sum_Fields = {
  __typename?: 'school_subject_sum_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "school_subject" */
export type School_Subject_Sum_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** update columns of table "school_subject" */
export enum School_Subject_Update_Column {
  /** column name */
  Schoolid = 'schoolid',
  /** column name */
  Subjectid = 'subjectid'
}

export type School_Subject_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<School_Subject_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<School_Subject_Set_Input>;
  /** filter the rows which have to be updated */
  where: School_Subject_Bool_Exp;
};

/** aggregate var_pop on columns */
export type School_Subject_Var_Pop_Fields = {
  __typename?: 'school_subject_var_pop_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "school_subject" */
export type School_Subject_Var_Pop_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type School_Subject_Var_Samp_Fields = {
  __typename?: 'school_subject_var_samp_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "school_subject" */
export type School_Subject_Var_Samp_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type School_Subject_Variance_Fields = {
  __typename?: 'school_subject_variance_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "school_subject" */
export type School_Subject_Variance_Order_By = {
  schoolid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** columns and relationships of "schools" */
export type Schools = {
  __typename?: 'schools';
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  school_subjects: Array<School_Subject>;
  /** An aggregate relationship */
  school_subjects_aggregate: School_Subject_Aggregate;
  schoolid: Scalars['bigint']['output'];
  schoolname: Scalars['String']['output'];
};


/** columns and relationships of "schools" */
export type SchoolsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "schools" */
export type SchoolsQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "schools" */
export type SchoolsSchool_SubjectsArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


/** columns and relationships of "schools" */
export type SchoolsSchool_Subjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};

/** aggregated selection of "schools" */
export type Schools_Aggregate = {
  __typename?: 'schools_aggregate';
  aggregate?: Maybe<Schools_Aggregate_Fields>;
  nodes: Array<Schools>;
};

/** aggregate fields of "schools" */
export type Schools_Aggregate_Fields = {
  __typename?: 'schools_aggregate_fields';
  avg?: Maybe<Schools_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Schools_Max_Fields>;
  min?: Maybe<Schools_Min_Fields>;
  stddev?: Maybe<Schools_Stddev_Fields>;
  stddev_pop?: Maybe<Schools_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Schools_Stddev_Samp_Fields>;
  sum?: Maybe<Schools_Sum_Fields>;
  var_pop?: Maybe<Schools_Var_Pop_Fields>;
  var_samp?: Maybe<Schools_Var_Samp_Fields>;
  variance?: Maybe<Schools_Variance_Fields>;
};


/** aggregate fields of "schools" */
export type Schools_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Schools_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Schools_Avg_Fields = {
  __typename?: 'schools_avg_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "schools". All fields are combined with a logical 'AND'. */
export type Schools_Bool_Exp = {
  _and?: InputMaybe<Array<Schools_Bool_Exp>>;
  _not?: InputMaybe<Schools_Bool_Exp>;
  _or?: InputMaybe<Array<Schools_Bool_Exp>>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  school_subjects?: InputMaybe<School_Subject_Bool_Exp>;
  school_subjects_aggregate?: InputMaybe<School_Subject_Aggregate_Bool_Exp>;
  schoolid?: InputMaybe<Bigint_Comparison_Exp>;
  schoolname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "schools" */
export enum Schools_Constraint {
  /** unique or primary key constraint on columns "schoolid" */
  SchoolsPkey = 'schools_pkey',
  /** unique or primary key constraint on columns "schoolname" */
  SchoolsSchoolnameKey = 'schools_schoolname_key'
}

/** input type for incrementing numeric columns in table "schools" */
export type Schools_Inc_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "schools" */
export type Schools_Insert_Input = {
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  school_subjects?: InputMaybe<School_Subject_Arr_Rel_Insert_Input>;
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  schoolname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Schools_Max_Fields = {
  __typename?: 'schools_max_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
  schoolname?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Schools_Min_Fields = {
  __typename?: 'schools_min_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
  schoolname?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "schools" */
export type Schools_Mutation_Response = {
  __typename?: 'schools_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Schools>;
};

/** input type for inserting object relation for remote table "schools" */
export type Schools_Obj_Rel_Insert_Input = {
  data: Schools_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Schools_On_Conflict>;
};

/** on_conflict condition type for table "schools" */
export type Schools_On_Conflict = {
  constraint: Schools_Constraint;
  update_columns?: Array<Schools_Update_Column>;
  where?: InputMaybe<Schools_Bool_Exp>;
};

/** Ordering options when selecting data from "schools". */
export type Schools_Order_By = {
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  school_subjects_aggregate?: InputMaybe<School_Subject_Aggregate_Order_By>;
  schoolid?: InputMaybe<Order_By>;
  schoolname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: schools */
export type Schools_Pk_Columns_Input = {
  schoolid: Scalars['bigint']['input'];
};

/** select columns of table "schools" */
export enum Schools_Select_Column {
  /** column name */
  Schoolid = 'schoolid',
  /** column name */
  Schoolname = 'schoolname'
}

/** input type for updating data in table "schools" */
export type Schools_Set_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  schoolname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Schools_Stddev_Fields = {
  __typename?: 'schools_stddev_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Schools_Stddev_Pop_Fields = {
  __typename?: 'schools_stddev_pop_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Schools_Stddev_Samp_Fields = {
  __typename?: 'schools_stddev_samp_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "schools" */
export type Schools_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Schools_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Schools_Stream_Cursor_Value_Input = {
  schoolid?: InputMaybe<Scalars['bigint']['input']>;
  schoolname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Schools_Sum_Fields = {
  __typename?: 'schools_sum_fields';
  schoolid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "schools" */
export enum Schools_Update_Column {
  /** column name */
  Schoolid = 'schoolid',
  /** column name */
  Schoolname = 'schoolname'
}

export type Schools_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Schools_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Schools_Set_Input>;
  /** filter the rows which have to be updated */
  where: Schools_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Schools_Var_Pop_Fields = {
  __typename?: 'schools_var_pop_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Schools_Var_Samp_Fields = {
  __typename?: 'schools_var_samp_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Schools_Variance_Fields = {
  __typename?: 'schools_variance_fields';
  schoolid?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "subject_level" */
export type Subject_Level = {
  __typename?: 'subject_level';
  /** An object relationship */
  level: Levels;
  levelid: Scalars['bigint']['output'];
  /** An object relationship */
  subject: Subjects;
  subjectid: Scalars['bigint']['output'];
};

/** aggregated selection of "subject_level" */
export type Subject_Level_Aggregate = {
  __typename?: 'subject_level_aggregate';
  aggregate?: Maybe<Subject_Level_Aggregate_Fields>;
  nodes: Array<Subject_Level>;
};

export type Subject_Level_Aggregate_Bool_Exp = {
  count?: InputMaybe<Subject_Level_Aggregate_Bool_Exp_Count>;
};

export type Subject_Level_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subject_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subject_Level_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subject_level" */
export type Subject_Level_Aggregate_Fields = {
  __typename?: 'subject_level_aggregate_fields';
  avg?: Maybe<Subject_Level_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subject_Level_Max_Fields>;
  min?: Maybe<Subject_Level_Min_Fields>;
  stddev?: Maybe<Subject_Level_Stddev_Fields>;
  stddev_pop?: Maybe<Subject_Level_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subject_Level_Stddev_Samp_Fields>;
  sum?: Maybe<Subject_Level_Sum_Fields>;
  var_pop?: Maybe<Subject_Level_Var_Pop_Fields>;
  var_samp?: Maybe<Subject_Level_Var_Samp_Fields>;
  variance?: Maybe<Subject_Level_Variance_Fields>;
};


/** aggregate fields of "subject_level" */
export type Subject_Level_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subject_Level_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subject_level" */
export type Subject_Level_Aggregate_Order_By = {
  avg?: InputMaybe<Subject_Level_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subject_Level_Max_Order_By>;
  min?: InputMaybe<Subject_Level_Min_Order_By>;
  stddev?: InputMaybe<Subject_Level_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subject_Level_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subject_Level_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subject_Level_Sum_Order_By>;
  var_pop?: InputMaybe<Subject_Level_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subject_Level_Var_Samp_Order_By>;
  variance?: InputMaybe<Subject_Level_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subject_level" */
export type Subject_Level_Arr_Rel_Insert_Input = {
  data: Array<Subject_Level_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subject_Level_On_Conflict>;
};

/** aggregate avg on columns */
export type Subject_Level_Avg_Fields = {
  __typename?: 'subject_level_avg_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "subject_level" */
export type Subject_Level_Avg_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subject_level". All fields are combined with a logical 'AND'. */
export type Subject_Level_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Level_Bool_Exp>>;
  _not?: InputMaybe<Subject_Level_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Level_Bool_Exp>>;
  level?: InputMaybe<Levels_Bool_Exp>;
  levelid?: InputMaybe<Bigint_Comparison_Exp>;
  subject?: InputMaybe<Subjects_Bool_Exp>;
  subjectid?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "subject_level" */
export enum Subject_Level_Constraint {
  /** unique or primary key constraint on columns "subjectid", "levelid" */
  SubjectLevelPkey = 'subject_level_pkey'
}

/** input type for incrementing numeric columns in table "subject_level" */
export type Subject_Level_Inc_Input = {
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "subject_level" */
export type Subject_Level_Insert_Input = {
  level?: InputMaybe<Levels_Obj_Rel_Insert_Input>;
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  subject?: InputMaybe<Subjects_Obj_Rel_Insert_Input>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Subject_Level_Max_Fields = {
  __typename?: 'subject_level_max_fields';
  levelid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "subject_level" */
export type Subject_Level_Max_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subject_Level_Min_Fields = {
  __typename?: 'subject_level_min_fields';
  levelid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "subject_level" */
export type Subject_Level_Min_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subject_level" */
export type Subject_Level_Mutation_Response = {
  __typename?: 'subject_level_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subject_Level>;
};

/** on_conflict condition type for table "subject_level" */
export type Subject_Level_On_Conflict = {
  constraint: Subject_Level_Constraint;
  update_columns?: Array<Subject_Level_Update_Column>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};

/** Ordering options when selecting data from "subject_level". */
export type Subject_Level_Order_By = {
  level?: InputMaybe<Levels_Order_By>;
  levelid?: InputMaybe<Order_By>;
  subject?: InputMaybe<Subjects_Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subject_level */
export type Subject_Level_Pk_Columns_Input = {
  levelid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};

/** select columns of table "subject_level" */
export enum Subject_Level_Select_Column {
  /** column name */
  Levelid = 'levelid',
  /** column name */
  Subjectid = 'subjectid'
}

/** input type for updating data in table "subject_level" */
export type Subject_Level_Set_Input = {
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Subject_Level_Stddev_Fields = {
  __typename?: 'subject_level_stddev_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "subject_level" */
export type Subject_Level_Stddev_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subject_Level_Stddev_Pop_Fields = {
  __typename?: 'subject_level_stddev_pop_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "subject_level" */
export type Subject_Level_Stddev_Pop_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subject_Level_Stddev_Samp_Fields = {
  __typename?: 'subject_level_stddev_samp_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "subject_level" */
export type Subject_Level_Stddev_Samp_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subject_level" */
export type Subject_Level_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Level_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Level_Stream_Cursor_Value_Input = {
  levelid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Subject_Level_Sum_Fields = {
  __typename?: 'subject_level_sum_fields';
  levelid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "subject_level" */
export type Subject_Level_Sum_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** update columns of table "subject_level" */
export enum Subject_Level_Update_Column {
  /** column name */
  Levelid = 'levelid',
  /** column name */
  Subjectid = 'subjectid'
}

export type Subject_Level_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subject_Level_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subject_Level_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subject_Level_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subject_Level_Var_Pop_Fields = {
  __typename?: 'subject_level_var_pop_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "subject_level" */
export type Subject_Level_Var_Pop_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subject_Level_Var_Samp_Fields = {
  __typename?: 'subject_level_var_samp_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "subject_level" */
export type Subject_Level_Var_Samp_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subject_Level_Variance_Fields = {
  __typename?: 'subject_level_variance_fields';
  levelid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "subject_level" */
export type Subject_Level_Variance_Order_By = {
  levelid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** columns and relationships of "subject_paper" */
export type Subject_Paper = {
  __typename?: 'subject_paper';
  /** An object relationship */
  paper: Papers;
  paperid: Scalars['bigint']['output'];
  /** An object relationship */
  subject: Subjects;
  subjectid: Scalars['bigint']['output'];
};

/** aggregated selection of "subject_paper" */
export type Subject_Paper_Aggregate = {
  __typename?: 'subject_paper_aggregate';
  aggregate?: Maybe<Subject_Paper_Aggregate_Fields>;
  nodes: Array<Subject_Paper>;
};

export type Subject_Paper_Aggregate_Bool_Exp = {
  count?: InputMaybe<Subject_Paper_Aggregate_Bool_Exp_Count>;
};

export type Subject_Paper_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subject_Paper_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subject_paper" */
export type Subject_Paper_Aggregate_Fields = {
  __typename?: 'subject_paper_aggregate_fields';
  avg?: Maybe<Subject_Paper_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subject_Paper_Max_Fields>;
  min?: Maybe<Subject_Paper_Min_Fields>;
  stddev?: Maybe<Subject_Paper_Stddev_Fields>;
  stddev_pop?: Maybe<Subject_Paper_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subject_Paper_Stddev_Samp_Fields>;
  sum?: Maybe<Subject_Paper_Sum_Fields>;
  var_pop?: Maybe<Subject_Paper_Var_Pop_Fields>;
  var_samp?: Maybe<Subject_Paper_Var_Samp_Fields>;
  variance?: Maybe<Subject_Paper_Variance_Fields>;
};


/** aggregate fields of "subject_paper" */
export type Subject_Paper_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subject_paper" */
export type Subject_Paper_Aggregate_Order_By = {
  avg?: InputMaybe<Subject_Paper_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subject_Paper_Max_Order_By>;
  min?: InputMaybe<Subject_Paper_Min_Order_By>;
  stddev?: InputMaybe<Subject_Paper_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subject_Paper_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subject_Paper_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subject_Paper_Sum_Order_By>;
  var_pop?: InputMaybe<Subject_Paper_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subject_Paper_Var_Samp_Order_By>;
  variance?: InputMaybe<Subject_Paper_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subject_paper" */
export type Subject_Paper_Arr_Rel_Insert_Input = {
  data: Array<Subject_Paper_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subject_Paper_On_Conflict>;
};

/** aggregate avg on columns */
export type Subject_Paper_Avg_Fields = {
  __typename?: 'subject_paper_avg_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "subject_paper" */
export type Subject_Paper_Avg_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subject_paper". All fields are combined with a logical 'AND'. */
export type Subject_Paper_Bool_Exp = {
  _and?: InputMaybe<Array<Subject_Paper_Bool_Exp>>;
  _not?: InputMaybe<Subject_Paper_Bool_Exp>;
  _or?: InputMaybe<Array<Subject_Paper_Bool_Exp>>;
  paper?: InputMaybe<Papers_Bool_Exp>;
  paperid?: InputMaybe<Bigint_Comparison_Exp>;
  subject?: InputMaybe<Subjects_Bool_Exp>;
  subjectid?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "subject_paper" */
export enum Subject_Paper_Constraint {
  /** unique or primary key constraint on columns "subjectid", "paperid" */
  SubjectPaperPkey = 'subject_paper_pkey'
}

/** input type for incrementing numeric columns in table "subject_paper" */
export type Subject_Paper_Inc_Input = {
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "subject_paper" */
export type Subject_Paper_Insert_Input = {
  paper?: InputMaybe<Papers_Obj_Rel_Insert_Input>;
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  subject?: InputMaybe<Subjects_Obj_Rel_Insert_Input>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Subject_Paper_Max_Fields = {
  __typename?: 'subject_paper_max_fields';
  paperid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "subject_paper" */
export type Subject_Paper_Max_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subject_Paper_Min_Fields = {
  __typename?: 'subject_paper_min_fields';
  paperid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "subject_paper" */
export type Subject_Paper_Min_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subject_paper" */
export type Subject_Paper_Mutation_Response = {
  __typename?: 'subject_paper_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subject_Paper>;
};

/** on_conflict condition type for table "subject_paper" */
export type Subject_Paper_On_Conflict = {
  constraint: Subject_Paper_Constraint;
  update_columns?: Array<Subject_Paper_Update_Column>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};

/** Ordering options when selecting data from "subject_paper". */
export type Subject_Paper_Order_By = {
  paper?: InputMaybe<Papers_Order_By>;
  paperid?: InputMaybe<Order_By>;
  subject?: InputMaybe<Subjects_Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subject_paper */
export type Subject_Paper_Pk_Columns_Input = {
  paperid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};

/** select columns of table "subject_paper" */
export enum Subject_Paper_Select_Column {
  /** column name */
  Paperid = 'paperid',
  /** column name */
  Subjectid = 'subjectid'
}

/** input type for updating data in table "subject_paper" */
export type Subject_Paper_Set_Input = {
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Subject_Paper_Stddev_Fields = {
  __typename?: 'subject_paper_stddev_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "subject_paper" */
export type Subject_Paper_Stddev_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subject_Paper_Stddev_Pop_Fields = {
  __typename?: 'subject_paper_stddev_pop_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "subject_paper" */
export type Subject_Paper_Stddev_Pop_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subject_Paper_Stddev_Samp_Fields = {
  __typename?: 'subject_paper_stddev_samp_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "subject_paper" */
export type Subject_Paper_Stddev_Samp_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subject_paper" */
export type Subject_Paper_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subject_Paper_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subject_Paper_Stream_Cursor_Value_Input = {
  paperid?: InputMaybe<Scalars['bigint']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Subject_Paper_Sum_Fields = {
  __typename?: 'subject_paper_sum_fields';
  paperid?: Maybe<Scalars['bigint']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "subject_paper" */
export type Subject_Paper_Sum_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** update columns of table "subject_paper" */
export enum Subject_Paper_Update_Column {
  /** column name */
  Paperid = 'paperid',
  /** column name */
  Subjectid = 'subjectid'
}

export type Subject_Paper_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subject_Paper_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subject_Paper_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subject_Paper_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subject_Paper_Var_Pop_Fields = {
  __typename?: 'subject_paper_var_pop_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "subject_paper" */
export type Subject_Paper_Var_Pop_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subject_Paper_Var_Samp_Fields = {
  __typename?: 'subject_paper_var_samp_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "subject_paper" */
export type Subject_Paper_Var_Samp_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subject_Paper_Variance_Fields = {
  __typename?: 'subject_paper_variance_fields';
  paperid?: Maybe<Scalars['Float']['output']>;
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "subject_paper" */
export type Subject_Paper_Variance_Order_By = {
  paperid?: InputMaybe<Order_By>;
  subjectid?: InputMaybe<Order_By>;
};

/** columns and relationships of "subjects" */
export type Subjects = {
  __typename?: 'subjects';
  /** An array relationship */
  school_subjects: Array<School_Subject>;
  /** An aggregate relationship */
  school_subjects_aggregate: School_Subject_Aggregate;
  subject: Scalars['String']['output'];
  /** An array relationship */
  subject_levels: Array<Subject_Level>;
  /** An aggregate relationship */
  subject_levels_aggregate: Subject_Level_Aggregate;
  /** An array relationship */
  subject_papers: Array<Subject_Paper>;
  /** An aggregate relationship */
  subject_papers_aggregate: Subject_Paper_Aggregate;
  subjectid: Scalars['bigint']['output'];
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
};


/** columns and relationships of "subjects" */
export type SubjectsSchool_SubjectsArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsSchool_Subjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsSubject_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsSubject_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsSubject_PapersArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsSubject_Papers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


/** columns and relationships of "subjects" */
export type SubjectsTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};

/** aggregated selection of "subjects" */
export type Subjects_Aggregate = {
  __typename?: 'subjects_aggregate';
  aggregate?: Maybe<Subjects_Aggregate_Fields>;
  nodes: Array<Subjects>;
};

/** aggregate fields of "subjects" */
export type Subjects_Aggregate_Fields = {
  __typename?: 'subjects_aggregate_fields';
  avg?: Maybe<Subjects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subjects_Max_Fields>;
  min?: Maybe<Subjects_Min_Fields>;
  stddev?: Maybe<Subjects_Stddev_Fields>;
  stddev_pop?: Maybe<Subjects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subjects_Stddev_Samp_Fields>;
  sum?: Maybe<Subjects_Sum_Fields>;
  var_pop?: Maybe<Subjects_Var_Pop_Fields>;
  var_samp?: Maybe<Subjects_Var_Samp_Fields>;
  variance?: Maybe<Subjects_Variance_Fields>;
};


/** aggregate fields of "subjects" */
export type Subjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Subjects_Avg_Fields = {
  __typename?: 'subjects_avg_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "subjects". All fields are combined with a logical 'AND'. */
export type Subjects_Bool_Exp = {
  _and?: InputMaybe<Array<Subjects_Bool_Exp>>;
  _not?: InputMaybe<Subjects_Bool_Exp>;
  _or?: InputMaybe<Array<Subjects_Bool_Exp>>;
  school_subjects?: InputMaybe<School_Subject_Bool_Exp>;
  school_subjects_aggregate?: InputMaybe<School_Subject_Aggregate_Bool_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  subject_levels?: InputMaybe<Subject_Level_Bool_Exp>;
  subject_levels_aggregate?: InputMaybe<Subject_Level_Aggregate_Bool_Exp>;
  subject_papers?: InputMaybe<Subject_Paper_Bool_Exp>;
  subject_papers_aggregate?: InputMaybe<Subject_Paper_Aggregate_Bool_Exp>;
  subjectid?: InputMaybe<Bigint_Comparison_Exp>;
  topics?: InputMaybe<Topics_Bool_Exp>;
  topics_aggregate?: InputMaybe<Topics_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "subjects" */
export enum Subjects_Constraint {
  /** unique or primary key constraint on columns "subjectid" */
  SubjectsPkey = 'subjects_pkey',
  /** unique or primary key constraint on columns "subject" */
  SubjectsSubjectKey = 'subjects_subject_key'
}

/** input type for incrementing numeric columns in table "subjects" */
export type Subjects_Inc_Input = {
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "subjects" */
export type Subjects_Insert_Input = {
  school_subjects?: InputMaybe<School_Subject_Arr_Rel_Insert_Input>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_levels?: InputMaybe<Subject_Level_Arr_Rel_Insert_Input>;
  subject_papers?: InputMaybe<Subject_Paper_Arr_Rel_Insert_Input>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
  topics?: InputMaybe<Topics_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subjects_Max_Fields = {
  __typename?: 'subjects_max_fields';
  subject?: Maybe<Scalars['String']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Subjects_Min_Fields = {
  __typename?: 'subjects_min_fields';
  subject?: Maybe<Scalars['String']['output']>;
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "subjects" */
export type Subjects_Mutation_Response = {
  __typename?: 'subjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subjects>;
};

/** input type for inserting object relation for remote table "subjects" */
export type Subjects_Obj_Rel_Insert_Input = {
  data: Subjects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subjects_On_Conflict>;
};

/** on_conflict condition type for table "subjects" */
export type Subjects_On_Conflict = {
  constraint: Subjects_Constraint;
  update_columns?: Array<Subjects_Update_Column>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};

/** Ordering options when selecting data from "subjects". */
export type Subjects_Order_By = {
  school_subjects_aggregate?: InputMaybe<School_Subject_Aggregate_Order_By>;
  subject?: InputMaybe<Order_By>;
  subject_levels_aggregate?: InputMaybe<Subject_Level_Aggregate_Order_By>;
  subject_papers_aggregate?: InputMaybe<Subject_Paper_Aggregate_Order_By>;
  subjectid?: InputMaybe<Order_By>;
  topics_aggregate?: InputMaybe<Topics_Aggregate_Order_By>;
};

/** primary key columns input for table: subjects */
export type Subjects_Pk_Columns_Input = {
  subjectid: Scalars['bigint']['input'];
};

/** select columns of table "subjects" */
export enum Subjects_Select_Column {
  /** column name */
  Subject = 'subject',
  /** column name */
  Subjectid = 'subjectid'
}

/** input type for updating data in table "subjects" */
export type Subjects_Set_Input = {
  subject?: InputMaybe<Scalars['String']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Subjects_Stddev_Fields = {
  __typename?: 'subjects_stddev_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Subjects_Stddev_Pop_Fields = {
  __typename?: 'subjects_stddev_pop_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Subjects_Stddev_Samp_Fields = {
  __typename?: 'subjects_stddev_samp_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "subjects" */
export type Subjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subjects_Stream_Cursor_Value_Input = {
  subject?: InputMaybe<Scalars['String']['input']>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Subjects_Sum_Fields = {
  __typename?: 'subjects_sum_fields';
  subjectid?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "subjects" */
export enum Subjects_Update_Column {
  /** column name */
  Subject = 'subject',
  /** column name */
  Subjectid = 'subjectid'
}

export type Subjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subjects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subjects_Var_Pop_Fields = {
  __typename?: 'subjects_var_pop_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Subjects_Var_Samp_Fields = {
  __typename?: 'subjects_var_samp_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Subjects_Variance_Fields = {
  __typename?: 'subjects_variance_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  answerimgs: Array<Answerimgs>;
  /** An aggregate relationship */
  answerimgs_aggregate: Answerimgs_Aggregate;
  /** fetch data from the table: "answerimgs" using primary key columns */
  answerimgs_by_pk?: Maybe<Answerimgs>;
  /** fetch data from the table in a streaming manner: "answerimgs" */
  answerimgs_stream: Array<Answerimgs>;
  /** fetch data from the table: "assessment_level" */
  assessment_level: Array<Assessment_Level>;
  /** fetch aggregated fields from the table: "assessment_level" */
  assessment_level_aggregate: Assessment_Level_Aggregate;
  /** fetch data from the table: "assessment_level" using primary key columns */
  assessment_level_by_pk?: Maybe<Assessment_Level>;
  /** fetch data from the table in a streaming manner: "assessment_level" */
  assessment_level_stream: Array<Assessment_Level>;
  /** fetch data from the table: "assessments" */
  assessments: Array<Assessments>;
  /** fetch aggregated fields from the table: "assessments" */
  assessments_aggregate: Assessments_Aggregate;
  /** fetch data from the table: "assessments" using primary key columns */
  assessments_by_pk?: Maybe<Assessments>;
  /** fetch data from the table in a streaming manner: "assessments" */
  assessments_stream: Array<Assessments>;
  /** An array relationship */
  completedquestions: Array<Completedquestions>;
  /** An aggregate relationship */
  completedquestions_aggregate: Completedquestions_Aggregate;
  /** fetch data from the table: "completedquestions" using primary key columns */
  completedquestions_by_pk?: Maybe<Completedquestions>;
  /** fetch data from the table in a streaming manner: "completedquestions" */
  completedquestions_stream: Array<Completedquestions>;
  /** fetch data from the table: "custom_answer_imgs" */
  custom_answer_imgs: Array<Custom_Answer_Imgs>;
  /** fetch aggregated fields from the table: "custom_answer_imgs" */
  custom_answer_imgs_aggregate: Custom_Answer_Imgs_Aggregate;
  /** fetch data from the table: "custom_answer_imgs" using primary key columns */
  custom_answer_imgs_by_pk?: Maybe<Custom_Answer_Imgs>;
  /** fetch data from the table in a streaming manner: "custom_answer_imgs" */
  custom_answer_imgs_stream: Array<Custom_Answer_Imgs>;
  /** fetch data from the table: "custom_answers_for_worksheets" */
  custom_answers_for_worksheets: Array<Custom_Answers_For_Worksheets>;
  /** fetch aggregated fields from the table: "custom_answers_for_worksheets" */
  custom_answers_for_worksheets_aggregate: Custom_Answers_For_Worksheets_Aggregate;
  /** fetch data from the table in a streaming manner: "custom_answers_for_worksheets" */
  custom_answers_for_worksheets_stream: Array<Custom_Answers_For_Worksheets>;
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** fetch data from the table in a streaming manner: "levels" */
  levels_stream: Array<Levels>;
  /** fetch data from the table: "otps" */
  otps: Array<Otps>;
  /** fetch aggregated fields from the table: "otps" */
  otps_aggregate: Otps_Aggregate;
  /** fetch data from the table: "otps" using primary key columns */
  otps_by_pk?: Maybe<Otps>;
  /** fetch data from the table in a streaming manner: "otps" */
  otps_stream: Array<Otps>;
  /** fetch data from the table: "papers" */
  papers: Array<Papers>;
  /** fetch aggregated fields from the table: "papers" */
  papers_aggregate: Papers_Aggregate;
  /** fetch data from the table: "papers" using primary key columns */
  papers_by_pk?: Maybe<Papers>;
  /** fetch data from the table in a streaming manner: "papers" */
  papers_stream: Array<Papers>;
  /** An array relationship */
  pendingpayments: Array<Pendingpayments>;
  /** An aggregate relationship */
  pendingpayments_aggregate: Pendingpayments_Aggregate;
  /** fetch data from the table: "pendingpayments" using primary key columns */
  pendingpayments_by_pk?: Maybe<Pendingpayments>;
  /** fetch data from the table in a streaming manner: "pendingpayments" */
  pendingpayments_stream: Array<Pendingpayments>;
  /** fetch data from the table: "promo_code_redemptions" */
  promo_code_redemptions: Array<Promo_Code_Redemptions>;
  /** fetch aggregated fields from the table: "promo_code_redemptions" */
  promo_code_redemptions_aggregate: Promo_Code_Redemptions_Aggregate;
  /** fetch data from the table in a streaming manner: "promo_code_redemptions" */
  promo_code_redemptions_stream: Array<Promo_Code_Redemptions>;
  /** fetch data from the table: "published_worksheets" */
  published_worksheets: Array<Published_Worksheets>;
  /** fetch aggregated fields from the table: "published_worksheets" */
  published_worksheets_aggregate: Published_Worksheets_Aggregate;
  /** fetch data from the table in a streaming manner: "published_worksheets" */
  published_worksheets_stream: Array<Published_Worksheets>;
  /** fetch data from the table: "pyps" */
  pyps: Array<Pyps>;
  /** fetch aggregated fields from the table: "pyps" */
  pyps_aggregate: Pyps_Aggregate;
  /** fetch data from the table: "pyps" using primary key columns */
  pyps_by_pk?: Maybe<Pyps>;
  /** fetch data from the table in a streaming manner: "pyps" */
  pyps_stream: Array<Pyps>;
  /** fetch data from the table: "question_topic" */
  question_topic: Array<Question_Topic>;
  /** fetch aggregated fields from the table: "question_topic" */
  question_topic_aggregate: Question_Topic_Aggregate;
  /** fetch data from the table: "question_topic" using primary key columns */
  question_topic_by_pk?: Maybe<Question_Topic>;
  /** fetch data from the table in a streaming manner: "question_topic" */
  question_topic_stream: Array<Question_Topic>;
  /** An array relationship */
  questionimgs: Array<Questionimgs>;
  /** An aggregate relationship */
  questionimgs_aggregate: Questionimgs_Aggregate;
  /** fetch data from the table: "questionimgs" using primary key columns */
  questionimgs_by_pk?: Maybe<Questionimgs>;
  /** fetch data from the table in a streaming manner: "questionimgs" */
  questionimgs_stream: Array<Questionimgs>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** fetch data from the table in a streaming manner: "reports" */
  reports_stream: Array<Reports>;
  /** An array relationship */
  savedquestions: Array<Savedquestions>;
  /** An aggregate relationship */
  savedquestions_aggregate: Savedquestions_Aggregate;
  /** fetch data from the table: "savedquestions" using primary key columns */
  savedquestions_by_pk?: Maybe<Savedquestions>;
  /** fetch data from the table in a streaming manner: "savedquestions" */
  savedquestions_stream: Array<Savedquestions>;
  /** fetch data from the table: "school_subject" */
  school_subject: Array<School_Subject>;
  /** fetch aggregated fields from the table: "school_subject" */
  school_subject_aggregate: School_Subject_Aggregate;
  /** fetch data from the table: "school_subject" using primary key columns */
  school_subject_by_pk?: Maybe<School_Subject>;
  /** fetch data from the table in a streaming manner: "school_subject" */
  school_subject_stream: Array<School_Subject>;
  /** fetch data from the table: "schools" */
  schools: Array<Schools>;
  /** fetch aggregated fields from the table: "schools" */
  schools_aggregate: Schools_Aggregate;
  /** fetch data from the table: "schools" using primary key columns */
  schools_by_pk?: Maybe<Schools>;
  /** fetch data from the table in a streaming manner: "schools" */
  schools_stream: Array<Schools>;
  /** fetch data from the table: "subject_level" */
  subject_level: Array<Subject_Level>;
  /** fetch aggregated fields from the table: "subject_level" */
  subject_level_aggregate: Subject_Level_Aggregate;
  /** fetch data from the table: "subject_level" using primary key columns */
  subject_level_by_pk?: Maybe<Subject_Level>;
  /** fetch data from the table in a streaming manner: "subject_level" */
  subject_level_stream: Array<Subject_Level>;
  /** fetch data from the table: "subject_paper" */
  subject_paper: Array<Subject_Paper>;
  /** fetch aggregated fields from the table: "subject_paper" */
  subject_paper_aggregate: Subject_Paper_Aggregate;
  /** fetch data from the table: "subject_paper" using primary key columns */
  subject_paper_by_pk?: Maybe<Subject_Paper>;
  /** fetch data from the table in a streaming manner: "subject_paper" */
  subject_paper_stream: Array<Subject_Paper>;
  /** fetch data from the table: "subjects" */
  subjects: Array<Subjects>;
  /** fetch aggregated fields from the table: "subjects" */
  subjects_aggregate: Subjects_Aggregate;
  /** fetch data from the table: "subjects" using primary key columns */
  subjects_by_pk?: Maybe<Subjects>;
  /** fetch data from the table in a streaming manner: "subjects" */
  subjects_stream: Array<Subjects>;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table in a streaming manner: "subscriptions" */
  subscriptions_stream: Array<Subscriptions>;
  /** fetch data from the table: "temp_worksheets" */
  temp_worksheets: Array<Temp_Worksheets>;
  /** fetch aggregated fields from the table: "temp_worksheets" */
  temp_worksheets_aggregate: Temp_Worksheets_Aggregate;
  /** fetch data from the table: "temp_worksheets" using primary key columns */
  temp_worksheets_by_pk?: Maybe<Temp_Worksheets>;
  /** fetch data from the table in a streaming manner: "temp_worksheets" */
  temp_worksheets_stream: Array<Temp_Worksheets>;
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table in a streaming manner: "topics" */
  topics_stream: Array<Topics>;
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** fetch data from the table: "upvotes" using primary key columns */
  upvotes_by_pk?: Maybe<Upvotes>;
  /** fetch data from the table in a streaming manner: "upvotes" */
  upvotes_stream: Array<Upvotes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  worksheets: Array<Worksheets>;
  /** An aggregate relationship */
  worksheets_aggregate: Worksheets_Aggregate;
  /** fetch data from the table: "worksheets" using primary key columns */
  worksheets_by_pk?: Maybe<Worksheets>;
  /** fetch data from the table in a streaming manner: "worksheets" */
  worksheets_stream: Array<Worksheets>;
  /** An array relationship */
  worksheets_to_questions: Array<Worksheets_To_Questions>;
  /** An aggregate relationship */
  worksheets_to_questions_aggregate: Worksheets_To_Questions_Aggregate;
  /** fetch data from the table: "worksheets_to_questions" using primary key columns */
  worksheets_to_questions_by_pk?: Maybe<Worksheets_To_Questions>;
  /** fetch data from the table in a streaming manner: "worksheets_to_questions" */
  worksheets_to_questions_stream: Array<Worksheets_To_Questions>;
};


export type Subscription_RootAnswerimgsArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


export type Subscription_RootAnswerimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answerimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answerimgs_Order_By>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


export type Subscription_RootAnswerimgs_By_PkArgs = {
  answerimgid: Scalars['bigint']['input'];
};


export type Subscription_RootAnswerimgs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Answerimgs_Stream_Cursor_Input>>;
  where?: InputMaybe<Answerimgs_Bool_Exp>;
};


export type Subscription_RootAssessment_LevelArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


export type Subscription_RootAssessment_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessment_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessment_Level_Order_By>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


export type Subscription_RootAssessment_Level_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
  levelid: Scalars['bigint']['input'];
};


export type Subscription_RootAssessment_Level_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Assessment_Level_Stream_Cursor_Input>>;
  where?: InputMaybe<Assessment_Level_Bool_Exp>;
};


export type Subscription_RootAssessmentsArgs = {
  distinct_on?: InputMaybe<Array<Assessments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};


export type Subscription_RootAssessments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assessments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assessments_Order_By>>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};


export type Subscription_RootAssessments_By_PkArgs = {
  assessmentid: Scalars['bigint']['input'];
};


export type Subscription_RootAssessments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Assessments_Stream_Cursor_Input>>;
  where?: InputMaybe<Assessments_Bool_Exp>;
};


export type Subscription_RootCompletedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


export type Subscription_RootCompletedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


export type Subscription_RootCompletedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Subscription_RootCompletedquestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Completedquestions_Stream_Cursor_Input>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


export type Subscription_RootCustom_Answer_ImgsArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answer_Imgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answer_Imgs_Order_By>>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};


export type Subscription_RootCustom_Answer_Imgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answer_Imgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answer_Imgs_Order_By>>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};


export type Subscription_RootCustom_Answer_Imgs_By_PkArgs = {
  customanswerimgid: Scalars['bigint']['input'];
};


export type Subscription_RootCustom_Answer_Imgs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Answer_Imgs_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Answer_Imgs_Bool_Exp>;
};


export type Subscription_RootCustom_Answers_For_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answers_For_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answers_For_Worksheets_Order_By>>;
  where?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
};


export type Subscription_RootCustom_Answers_For_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Answers_For_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Answers_For_Worksheets_Order_By>>;
  where?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
};


export type Subscription_RootCustom_Answers_For_Worksheets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Answers_For_Worksheets_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Answers_For_Worksheets_Bool_Exp>;
};


export type Subscription_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Subscription_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Subscription_RootLevels_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
};


export type Subscription_RootLevels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Levels_Stream_Cursor_Input>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};


export type Subscription_RootOtpsArgs = {
  distinct_on?: InputMaybe<Array<Otps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Otps_Order_By>>;
  where?: InputMaybe<Otps_Bool_Exp>;
};


export type Subscription_RootOtps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Otps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Otps_Order_By>>;
  where?: InputMaybe<Otps_Bool_Exp>;
};


export type Subscription_RootOtps_By_PkArgs = {
  otp: Scalars['bpchar']['input'];
};


export type Subscription_RootOtps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Otps_Stream_Cursor_Input>>;
  where?: InputMaybe<Otps_Bool_Exp>;
};


export type Subscription_RootPapersArgs = {
  distinct_on?: InputMaybe<Array<Papers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Papers_Order_By>>;
  where?: InputMaybe<Papers_Bool_Exp>;
};


export type Subscription_RootPapers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Papers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Papers_Order_By>>;
  where?: InputMaybe<Papers_Bool_Exp>;
};


export type Subscription_RootPapers_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
};


export type Subscription_RootPapers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Papers_Stream_Cursor_Input>>;
  where?: InputMaybe<Papers_Bool_Exp>;
};


export type Subscription_RootPendingpaymentsArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


export type Subscription_RootPendingpayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


export type Subscription_RootPendingpayments_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Subscription_RootPendingpayments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pendingpayments_Stream_Cursor_Input>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


export type Subscription_RootPromo_Code_RedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Promo_Code_Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Promo_Code_Redemptions_Order_By>>;
  where?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
};


export type Subscription_RootPromo_Code_Redemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Promo_Code_Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Promo_Code_Redemptions_Order_By>>;
  where?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
};


export type Subscription_RootPromo_Code_Redemptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Promo_Code_Redemptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Promo_Code_Redemptions_Bool_Exp>;
};


export type Subscription_RootPublished_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Published_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Worksheets_Order_By>>;
  where?: InputMaybe<Published_Worksheets_Bool_Exp>;
};


export type Subscription_RootPublished_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Published_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Published_Worksheets_Order_By>>;
  where?: InputMaybe<Published_Worksheets_Bool_Exp>;
};


export type Subscription_RootPublished_Worksheets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Published_Worksheets_Stream_Cursor_Input>>;
  where?: InputMaybe<Published_Worksheets_Bool_Exp>;
};


export type Subscription_RootPypsArgs = {
  distinct_on?: InputMaybe<Array<Pyps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pyps_Order_By>>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};


export type Subscription_RootPyps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pyps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pyps_Order_By>>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};


export type Subscription_RootPyps_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPyps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pyps_Stream_Cursor_Input>>;
  where?: InputMaybe<Pyps_Bool_Exp>;
};


export type Subscription_RootQuestion_TopicArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


export type Subscription_RootQuestion_Topic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


export type Subscription_RootQuestion_Topic_By_PkArgs = {
  questionid: Scalars['String']['input'];
  topicid: Scalars['bigint']['input'];
};


export type Subscription_RootQuestion_Topic_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Question_Topic_Stream_Cursor_Input>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


export type Subscription_RootQuestionimgsArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


export type Subscription_RootQuestionimgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionimgs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionimgs_Order_By>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


export type Subscription_RootQuestionimgs_By_PkArgs = {
  questionimgid: Scalars['bigint']['input'];
};


export type Subscription_RootQuestionimgs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questionimgs_Stream_Cursor_Input>>;
  where?: InputMaybe<Questionimgs_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_By_PkArgs = {
  reportid: Scalars['bigint']['input'];
};


export type Subscription_RootReports_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootSavedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


export type Subscription_RootSavedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


export type Subscription_RootSavedquestions_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Subscription_RootSavedquestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Savedquestions_Stream_Cursor_Input>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


export type Subscription_RootSchool_SubjectArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


export type Subscription_RootSchool_Subject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Subject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<School_Subject_Order_By>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


export type Subscription_RootSchool_Subject_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Subscription_RootSchool_Subject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<School_Subject_Stream_Cursor_Input>>;
  where?: InputMaybe<School_Subject_Bool_Exp>;
};


export type Subscription_RootSchoolsArgs = {
  distinct_on?: InputMaybe<Array<Schools_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schools_Order_By>>;
  where?: InputMaybe<Schools_Bool_Exp>;
};


export type Subscription_RootSchools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Schools_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Schools_Order_By>>;
  where?: InputMaybe<Schools_Bool_Exp>;
};


export type Subscription_RootSchools_By_PkArgs = {
  schoolid: Scalars['bigint']['input'];
};


export type Subscription_RootSchools_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Schools_Stream_Cursor_Input>>;
  where?: InputMaybe<Schools_Bool_Exp>;
};


export type Subscription_RootSubject_LevelArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


export type Subscription_RootSubject_Level_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Level_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Level_Order_By>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


export type Subscription_RootSubject_Level_By_PkArgs = {
  levelid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Subscription_RootSubject_Level_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subject_Level_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Level_Bool_Exp>;
};


export type Subscription_RootSubject_PaperArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


export type Subscription_RootSubject_Paper_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subject_Paper_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subject_Paper_Order_By>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


export type Subscription_RootSubject_Paper_By_PkArgs = {
  paperid: Scalars['bigint']['input'];
  subjectid: Scalars['bigint']['input'];
};


export type Subscription_RootSubject_Paper_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subject_Paper_Stream_Cursor_Input>>;
  where?: InputMaybe<Subject_Paper_Bool_Exp>;
};


export type Subscription_RootSubjectsArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subjects_Order_By>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubjects_By_PkArgs = {
  subjectid: Scalars['bigint']['input'];
};


export type Subscription_RootSubjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subjects_Stream_Cursor_Input>>;
  where?: InputMaybe<Subjects_Bool_Exp>;
};


export type Subscription_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSubscriptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscriptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootTemp_WorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Temp_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Temp_Worksheets_Order_By>>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};


export type Subscription_RootTemp_Worksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Temp_Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Temp_Worksheets_Order_By>>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};


export type Subscription_RootTemp_Worksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTemp_Worksheets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Temp_Worksheets_Stream_Cursor_Input>>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};


export type Subscription_RootTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Subscription_RootTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Subscription_RootTopics_By_PkArgs = {
  topicid: Scalars['bigint']['input'];
};


export type Subscription_RootTopics_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Topics_Stream_Cursor_Input>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Subscription_RootUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


export type Subscription_RootUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


export type Subscription_RootUpvotes_By_PkArgs = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};


export type Subscription_RootUpvotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Upvotes_Stream_Cursor_Input>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


export type Subscription_RootWorksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


export type Subscription_RootWorksheets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootWorksheets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Worksheets_Stream_Cursor_Input>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


export type Subscription_RootWorksheets_To_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


export type Subscription_RootWorksheets_To_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


export type Subscription_RootWorksheets_To_Questions_By_PkArgs = {
  question_id: Scalars['String']['input'];
  worksheet_id: Scalars['Int']['input'];
};


export type Subscription_RootWorksheets_To_Questions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Worksheets_To_Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};

/** columns and relationships of "subscriptions" */
export type Subscriptions = {
  __typename?: 'subscriptions';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_period_end: Scalars['timestamp']['output'];
  current_period_start: Scalars['timestamp']['output'];
  id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "subscriptions" */
export type Subscriptions_Aggregate = {
  __typename?: 'subscriptions_aggregate';
  aggregate?: Maybe<Subscriptions_Aggregate_Fields>;
  nodes: Array<Subscriptions>;
};

/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_Fields = {
  __typename?: 'subscriptions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscriptions_Max_Fields>;
  min?: Maybe<Subscriptions_Min_Fields>;
};


/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "subscriptions". All fields are combined with a logical 'AND'. */
export type Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_period_end?: InputMaybe<Timestamp_Comparison_Exp>;
  current_period_start?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscriptions" */
export enum Subscriptions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscriptionsPkey = 'subscriptions_pkey',
  /** unique or primary key constraint on columns "stripe_customer_id" */
  SubscriptionsStripeCustomerIdUnique = 'subscriptions_stripe_customer_id_unique',
  /** unique or primary key constraint on columns "user_id" */
  SubscriptionsUserIdUnique = 'subscriptions_user_id_unique'
}

/** input type for inserting data into table "subscriptions" */
export type Subscriptions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_end?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_start?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscriptions_Max_Fields = {
  __typename?: 'subscriptions_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_period_end?: Maybe<Scalars['timestamp']['output']>;
  current_period_start?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Subscriptions_Min_Fields = {
  __typename?: 'subscriptions_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_period_end?: Maybe<Scalars['timestamp']['output']>;
  current_period_start?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "subscriptions" */
export type Subscriptions_Mutation_Response = {
  __typename?: 'subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscriptions>;
};

/** input type for inserting object relation for remote table "subscriptions" */
export type Subscriptions_Obj_Rel_Insert_Input = {
  data: Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "subscriptions" */
export type Subscriptions_On_Conflict = {
  constraint: Subscriptions_Constraint;
  update_columns?: Array<Subscriptions_Update_Column>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "subscriptions". */
export type Subscriptions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscriptions */
export type Subscriptions_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "subscriptions" */
export type Subscriptions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_end?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_start?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subscriptions" */
export type Subscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscriptions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_end?: InputMaybe<Scalars['timestamp']['input']>;
  current_period_start?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subscriptions" */
export enum Subscriptions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UserId = 'user_id'
}

export type Subscriptions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscriptions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscriptions_Bool_Exp;
};

/** columns and relationships of "temp_worksheets" */
export type Temp_Worksheets = {
  __typename?: 'temp_worksheets';
  id: Scalars['Int']['output'];
  question_ids: Scalars['json']['output'];
};


/** columns and relationships of "temp_worksheets" */
export type Temp_WorksheetsQuestion_IdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "temp_worksheets" */
export type Temp_Worksheets_Aggregate = {
  __typename?: 'temp_worksheets_aggregate';
  aggregate?: Maybe<Temp_Worksheets_Aggregate_Fields>;
  nodes: Array<Temp_Worksheets>;
};

/** aggregate fields of "temp_worksheets" */
export type Temp_Worksheets_Aggregate_Fields = {
  __typename?: 'temp_worksheets_aggregate_fields';
  avg?: Maybe<Temp_Worksheets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Temp_Worksheets_Max_Fields>;
  min?: Maybe<Temp_Worksheets_Min_Fields>;
  stddev?: Maybe<Temp_Worksheets_Stddev_Fields>;
  stddev_pop?: Maybe<Temp_Worksheets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Temp_Worksheets_Stddev_Samp_Fields>;
  sum?: Maybe<Temp_Worksheets_Sum_Fields>;
  var_pop?: Maybe<Temp_Worksheets_Var_Pop_Fields>;
  var_samp?: Maybe<Temp_Worksheets_Var_Samp_Fields>;
  variance?: Maybe<Temp_Worksheets_Variance_Fields>;
};


/** aggregate fields of "temp_worksheets" */
export type Temp_Worksheets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Temp_Worksheets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Temp_Worksheets_Avg_Fields = {
  __typename?: 'temp_worksheets_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "temp_worksheets". All fields are combined with a logical 'AND'. */
export type Temp_Worksheets_Bool_Exp = {
  _and?: InputMaybe<Array<Temp_Worksheets_Bool_Exp>>;
  _not?: InputMaybe<Temp_Worksheets_Bool_Exp>;
  _or?: InputMaybe<Array<Temp_Worksheets_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question_ids?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "temp_worksheets" */
export enum Temp_Worksheets_Constraint {
  /** unique or primary key constraint on columns "id" */
  TempWorksheetsPkey = 'temp_worksheets_pkey'
}

/** input type for incrementing numeric columns in table "temp_worksheets" */
export type Temp_Worksheets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "temp_worksheets" */
export type Temp_Worksheets_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_ids?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Temp_Worksheets_Max_Fields = {
  __typename?: 'temp_worksheets_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Temp_Worksheets_Min_Fields = {
  __typename?: 'temp_worksheets_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "temp_worksheets" */
export type Temp_Worksheets_Mutation_Response = {
  __typename?: 'temp_worksheets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Temp_Worksheets>;
};

/** on_conflict condition type for table "temp_worksheets" */
export type Temp_Worksheets_On_Conflict = {
  constraint: Temp_Worksheets_Constraint;
  update_columns?: Array<Temp_Worksheets_Update_Column>;
  where?: InputMaybe<Temp_Worksheets_Bool_Exp>;
};

/** Ordering options when selecting data from "temp_worksheets". */
export type Temp_Worksheets_Order_By = {
  id?: InputMaybe<Order_By>;
  question_ids?: InputMaybe<Order_By>;
};

/** primary key columns input for table: temp_worksheets */
export type Temp_Worksheets_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "temp_worksheets" */
export enum Temp_Worksheets_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  QuestionIds = 'question_ids'
}

/** input type for updating data in table "temp_worksheets" */
export type Temp_Worksheets_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_ids?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate stddev on columns */
export type Temp_Worksheets_Stddev_Fields = {
  __typename?: 'temp_worksheets_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Temp_Worksheets_Stddev_Pop_Fields = {
  __typename?: 'temp_worksheets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Temp_Worksheets_Stddev_Samp_Fields = {
  __typename?: 'temp_worksheets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "temp_worksheets" */
export type Temp_Worksheets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Temp_Worksheets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Temp_Worksheets_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_ids?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate sum on columns */
export type Temp_Worksheets_Sum_Fields = {
  __typename?: 'temp_worksheets_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "temp_worksheets" */
export enum Temp_Worksheets_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  QuestionIds = 'question_ids'
}

export type Temp_Worksheets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Temp_Worksheets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Temp_Worksheets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Temp_Worksheets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Temp_Worksheets_Var_Pop_Fields = {
  __typename?: 'temp_worksheets_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Temp_Worksheets_Var_Samp_Fields = {
  __typename?: 'temp_worksheets_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Temp_Worksheets_Variance_Fields = {
  __typename?: 'temp_worksheets_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "topics" */
export type Topics = {
  __typename?: 'topics';
  /** An array relationship */
  question_topics: Array<Question_Topic>;
  /** An aggregate relationship */
  question_topics_aggregate: Question_Topic_Aggregate;
  /** An object relationship */
  subject: Subjects;
  subjectid: Scalars['bigint']['output'];
  topicid: Scalars['bigint']['output'];
  topicname: Scalars['String']['output'];
};


/** columns and relationships of "topics" */
export type TopicsQuestion_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TopicsQuestion_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Topic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Topic_Order_By>>;
  where?: InputMaybe<Question_Topic_Bool_Exp>;
};

/** aggregated selection of "topics" */
export type Topics_Aggregate = {
  __typename?: 'topics_aggregate';
  aggregate?: Maybe<Topics_Aggregate_Fields>;
  nodes: Array<Topics>;
};

export type Topics_Aggregate_Bool_Exp = {
  count?: InputMaybe<Topics_Aggregate_Bool_Exp_Count>;
};

export type Topics_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Topics_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "topics" */
export type Topics_Aggregate_Fields = {
  __typename?: 'topics_aggregate_fields';
  avg?: Maybe<Topics_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Topics_Max_Fields>;
  min?: Maybe<Topics_Min_Fields>;
  stddev?: Maybe<Topics_Stddev_Fields>;
  stddev_pop?: Maybe<Topics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topics_Stddev_Samp_Fields>;
  sum?: Maybe<Topics_Sum_Fields>;
  var_pop?: Maybe<Topics_Var_Pop_Fields>;
  var_samp?: Maybe<Topics_Var_Samp_Fields>;
  variance?: Maybe<Topics_Variance_Fields>;
};


/** aggregate fields of "topics" */
export type Topics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "topics" */
export type Topics_Aggregate_Order_By = {
  avg?: InputMaybe<Topics_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Topics_Max_Order_By>;
  min?: InputMaybe<Topics_Min_Order_By>;
  stddev?: InputMaybe<Topics_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Topics_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Topics_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Topics_Sum_Order_By>;
  var_pop?: InputMaybe<Topics_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Topics_Var_Samp_Order_By>;
  variance?: InputMaybe<Topics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "topics" */
export type Topics_Arr_Rel_Insert_Input = {
  data: Array<Topics_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};

/** aggregate avg on columns */
export type Topics_Avg_Fields = {
  __typename?: 'topics_avg_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "topics" */
export type Topics_Avg_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type Topics_Bool_Exp = {
  _and?: InputMaybe<Array<Topics_Bool_Exp>>;
  _not?: InputMaybe<Topics_Bool_Exp>;
  _or?: InputMaybe<Array<Topics_Bool_Exp>>;
  question_topics?: InputMaybe<Question_Topic_Bool_Exp>;
  question_topics_aggregate?: InputMaybe<Question_Topic_Aggregate_Bool_Exp>;
  subject?: InputMaybe<Subjects_Bool_Exp>;
  subjectid?: InputMaybe<Bigint_Comparison_Exp>;
  topicid?: InputMaybe<Bigint_Comparison_Exp>;
  topicname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "topics" */
export enum Topics_Constraint {
  /** unique or primary key constraint on columns "topicid" */
  TopicsPkey = 'topics_pkey',
  /** unique or primary key constraint on columns "topicname" */
  TopicsTopicnameKey = 'topics_topicname_key'
}

/** input type for incrementing numeric columns in table "topics" */
export type Topics_Inc_Input = {
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "topics" */
export type Topics_Insert_Input = {
  question_topics?: InputMaybe<Question_Topic_Arr_Rel_Insert_Input>;
  subject?: InputMaybe<Subjects_Obj_Rel_Insert_Input>;
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
  topicname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Topics_Max_Fields = {
  __typename?: 'topics_max_fields';
  subjectid?: Maybe<Scalars['bigint']['output']>;
  topicid?: Maybe<Scalars['bigint']['output']>;
  topicname?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "topics" */
export type Topics_Max_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
  topicname?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Topics_Min_Fields = {
  __typename?: 'topics_min_fields';
  subjectid?: Maybe<Scalars['bigint']['output']>;
  topicid?: Maybe<Scalars['bigint']['output']>;
  topicname?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "topics" */
export type Topics_Min_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
  topicname?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "topics" */
export type Topics_Mutation_Response = {
  __typename?: 'topics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Topics>;
};

/** input type for inserting object relation for remote table "topics" */
export type Topics_Obj_Rel_Insert_Input = {
  data: Topics_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};

/** on_conflict condition type for table "topics" */
export type Topics_On_Conflict = {
  constraint: Topics_Constraint;
  update_columns?: Array<Topics_Update_Column>;
  where?: InputMaybe<Topics_Bool_Exp>;
};

/** Ordering options when selecting data from "topics". */
export type Topics_Order_By = {
  question_topics_aggregate?: InputMaybe<Question_Topic_Aggregate_Order_By>;
  subject?: InputMaybe<Subjects_Order_By>;
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
  topicname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: topics */
export type Topics_Pk_Columns_Input = {
  topicid: Scalars['bigint']['input'];
};

/** select columns of table "topics" */
export enum Topics_Select_Column {
  /** column name */
  Subjectid = 'subjectid',
  /** column name */
  Topicid = 'topicid',
  /** column name */
  Topicname = 'topicname'
}

/** input type for updating data in table "topics" */
export type Topics_Set_Input = {
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
  topicname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Topics_Stddev_Fields = {
  __typename?: 'topics_stddev_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "topics" */
export type Topics_Stddev_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Topics_Stddev_Pop_Fields = {
  __typename?: 'topics_stddev_pop_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "topics" */
export type Topics_Stddev_Pop_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Topics_Stddev_Samp_Fields = {
  __typename?: 'topics_stddev_samp_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "topics" */
export type Topics_Stddev_Samp_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "topics" */
export type Topics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topics_Stream_Cursor_Value_Input = {
  subjectid?: InputMaybe<Scalars['bigint']['input']>;
  topicid?: InputMaybe<Scalars['bigint']['input']>;
  topicname?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Topics_Sum_Fields = {
  __typename?: 'topics_sum_fields';
  subjectid?: Maybe<Scalars['bigint']['output']>;
  topicid?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "topics" */
export type Topics_Sum_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** update columns of table "topics" */
export enum Topics_Update_Column {
  /** column name */
  Subjectid = 'subjectid',
  /** column name */
  Topicid = 'topicid',
  /** column name */
  Topicname = 'topicname'
}

export type Topics_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Topics_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Topics_Set_Input>;
  /** filter the rows which have to be updated */
  where: Topics_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Topics_Var_Pop_Fields = {
  __typename?: 'topics_var_pop_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "topics" */
export type Topics_Var_Pop_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Topics_Var_Samp_Fields = {
  __typename?: 'topics_var_samp_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "topics" */
export type Topics_Var_Samp_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Topics_Variance_Fields = {
  __typename?: 'topics_variance_fields';
  subjectid?: Maybe<Scalars['Float']['output']>;
  topicid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "topics" */
export type Topics_Variance_Order_By = {
  subjectid?: InputMaybe<Order_By>;
  topicid?: InputMaybe<Order_By>;
};

/** columns and relationships of "upvotes" */
export type Upvotes = {
  __typename?: 'upvotes';
  email: Scalars['String']['output'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "upvotes" */
export type Upvotes_Aggregate = {
  __typename?: 'upvotes_aggregate';
  aggregate?: Maybe<Upvotes_Aggregate_Fields>;
  nodes: Array<Upvotes>;
};

export type Upvotes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Upvotes_Aggregate_Bool_Exp_Count>;
};

export type Upvotes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Upvotes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Upvotes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "upvotes" */
export type Upvotes_Aggregate_Fields = {
  __typename?: 'upvotes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Upvotes_Max_Fields>;
  min?: Maybe<Upvotes_Min_Fields>;
};


/** aggregate fields of "upvotes" */
export type Upvotes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Upvotes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "upvotes" */
export type Upvotes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Upvotes_Max_Order_By>;
  min?: InputMaybe<Upvotes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "upvotes" */
export type Upvotes_Arr_Rel_Insert_Input = {
  data: Array<Upvotes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Upvotes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "upvotes". All fields are combined with a logical 'AND'. */
export type Upvotes_Bool_Exp = {
  _and?: InputMaybe<Array<Upvotes_Bool_Exp>>;
  _not?: InputMaybe<Upvotes_Bool_Exp>;
  _or?: InputMaybe<Array<Upvotes_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  questionid?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "upvotes" */
export enum Upvotes_Constraint {
  /** unique or primary key constraint on columns "email", "questionid" */
  UpvotesPkey = 'upvotes_pkey'
}

/** input type for inserting data into table "upvotes" */
export type Upvotes_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Upvotes_Max_Fields = {
  __typename?: 'upvotes_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "upvotes" */
export type Upvotes_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Upvotes_Min_Fields = {
  __typename?: 'upvotes_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  questionid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "upvotes" */
export type Upvotes_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  questionid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "upvotes" */
export type Upvotes_Mutation_Response = {
  __typename?: 'upvotes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Upvotes>;
};

/** on_conflict condition type for table "upvotes" */
export type Upvotes_On_Conflict = {
  constraint: Upvotes_Constraint;
  update_columns?: Array<Upvotes_Update_Column>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};

/** Ordering options when selecting data from "upvotes". */
export type Upvotes_Order_By = {
  email?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  questionid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: upvotes */
export type Upvotes_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  questionid: Scalars['String']['input'];
};

/** select columns of table "upvotes" */
export enum Upvotes_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

/** input type for updating data in table "upvotes" */
export type Upvotes_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "upvotes" */
export type Upvotes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Upvotes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Upvotes_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  questionid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "upvotes" */
export enum Upvotes_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Questionid = 'questionid'
}

export type Upvotes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Upvotes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Upvotes_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  completedquestions: Array<Completedquestions>;
  /** An aggregate relationship */
  completedquestions_aggregate: Completedquestions_Aggregate;
  email: Scalars['String']['output'];
  free_worksheets_count: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  last_seen: Scalars['timestamp']['output'];
  /** An array relationship */
  pendingpayments: Array<Pendingpayments>;
  /** An aggregate relationship */
  pendingpayments_aggregate: Pendingpayments_Aggregate;
  promo_code?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  savedquestions: Array<Savedquestions>;
  /** An aggregate relationship */
  savedquestions_aggregate: Savedquestions_Aggregate;
  /** An object relationship */
  subscription?: Maybe<Subscriptions>;
  token: Scalars['uuid']['output'];
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** An array relationship */
  worksheets: Array<Worksheets>;
  /** An aggregate relationship */
  worksheets_aggregate: Worksheets_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCompletedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCompletedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Completedquestions_Order_By>>;
  where?: InputMaybe<Completedquestions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPendingpaymentsArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPendingpayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pendingpayments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pendingpayments_Order_By>>;
  where?: InputMaybe<Pendingpayments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSavedquestionsArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSavedquestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Savedquestions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Savedquestions_Order_By>>;
  where?: InputMaybe<Savedquestions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Upvotes_Order_By>>;
  where?: InputMaybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorksheetsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorksheets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_Order_By>>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  completedquestions?: InputMaybe<Completedquestions_Bool_Exp>;
  completedquestions_aggregate?: InputMaybe<Completedquestions_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  free_worksheets_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamp_Comparison_Exp>;
  pendingpayments?: InputMaybe<Pendingpayments_Bool_Exp>;
  pendingpayments_aggregate?: InputMaybe<Pendingpayments_Aggregate_Bool_Exp>;
  promo_code?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  savedquestions?: InputMaybe<Savedquestions_Bool_Exp>;
  savedquestions_aggregate?: InputMaybe<Savedquestions_Aggregate_Bool_Exp>;
  subscription?: InputMaybe<Subscriptions_Bool_Exp>;
  token?: InputMaybe<Uuid_Comparison_Exp>;
  upvotes?: InputMaybe<Upvotes_Bool_Exp>;
  upvotes_aggregate?: InputMaybe<Upvotes_Aggregate_Bool_Exp>;
  worksheets?: InputMaybe<Worksheets_Bool_Exp>;
  worksheets_aggregate?: InputMaybe<Worksheets_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersIdUnique = 'users_id_unique',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "promo_code" */
  UsersPromoCodeUnique = 'users_promo_code_unique',
  /** unique or primary key constraint on columns "token" */
  UsersTokenUnique = 'users_token_unique'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  free_worksheets_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  completedquestions?: InputMaybe<Completedquestions_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  free_worksheets_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamp']['input']>;
  pendingpayments?: InputMaybe<Pendingpayments_Arr_Rel_Insert_Input>;
  promo_code?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  savedquestions?: InputMaybe<Savedquestions_Arr_Rel_Insert_Input>;
  subscription?: InputMaybe<Subscriptions_Obj_Rel_Insert_Input>;
  token?: InputMaybe<Scalars['uuid']['input']>;
  upvotes?: InputMaybe<Upvotes_Arr_Rel_Insert_Input>;
  worksheets?: InputMaybe<Worksheets_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  free_worksheets_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamp']['output']>;
  promo_code?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  free_worksheets_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamp']['output']>;
  promo_code?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  completedquestions_aggregate?: InputMaybe<Completedquestions_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  free_worksheets_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  pendingpayments_aggregate?: InputMaybe<Pendingpayments_Aggregate_Order_By>;
  promo_code?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  savedquestions_aggregate?: InputMaybe<Savedquestions_Aggregate_Order_By>;
  subscription?: InputMaybe<Subscriptions_Order_By>;
  token?: InputMaybe<Order_By>;
  upvotes_aggregate?: InputMaybe<Upvotes_Aggregate_Order_By>;
  worksheets_aggregate?: InputMaybe<Worksheets_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FreeWorksheetsCount = 'free_worksheets_count',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  PromoCode = 'promo_code',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  free_worksheets_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamp']['input']>;
  promo_code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  free_worksheets_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamp']['input']>;
  promo_code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  free_worksheets_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FreeWorksheetsCount = 'free_worksheets_count',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  PromoCode = 'promo_code',
  /** column name */
  Token = 'token'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  free_worksheets_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "worksheets" */
export type Worksheets = {
  __typename?: 'worksheets';
  created: Scalars['timestamp']['output'];
  creator?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  questions_order: Array<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  worksheets_to_questions: Array<Worksheets_To_Questions>;
  /** An aggregate relationship */
  worksheets_to_questions_aggregate: Worksheets_To_Questions_Aggregate;
};


/** columns and relationships of "worksheets" */
export type WorksheetsWorksheets_To_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};


/** columns and relationships of "worksheets" */
export type WorksheetsWorksheets_To_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Worksheets_To_Questions_Order_By>>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};

/** aggregated selection of "worksheets" */
export type Worksheets_Aggregate = {
  __typename?: 'worksheets_aggregate';
  aggregate?: Maybe<Worksheets_Aggregate_Fields>;
  nodes: Array<Worksheets>;
};

export type Worksheets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Worksheets_Aggregate_Bool_Exp_Count>;
};

export type Worksheets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Worksheets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Worksheets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "worksheets" */
export type Worksheets_Aggregate_Fields = {
  __typename?: 'worksheets_aggregate_fields';
  avg?: Maybe<Worksheets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Worksheets_Max_Fields>;
  min?: Maybe<Worksheets_Min_Fields>;
  stddev?: Maybe<Worksheets_Stddev_Fields>;
  stddev_pop?: Maybe<Worksheets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Worksheets_Stddev_Samp_Fields>;
  sum?: Maybe<Worksheets_Sum_Fields>;
  var_pop?: Maybe<Worksheets_Var_Pop_Fields>;
  var_samp?: Maybe<Worksheets_Var_Samp_Fields>;
  variance?: Maybe<Worksheets_Variance_Fields>;
};


/** aggregate fields of "worksheets" */
export type Worksheets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Worksheets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "worksheets" */
export type Worksheets_Aggregate_Order_By = {
  avg?: InputMaybe<Worksheets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Worksheets_Max_Order_By>;
  min?: InputMaybe<Worksheets_Min_Order_By>;
  stddev?: InputMaybe<Worksheets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Worksheets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Worksheets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Worksheets_Sum_Order_By>;
  var_pop?: InputMaybe<Worksheets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Worksheets_Var_Samp_Order_By>;
  variance?: InputMaybe<Worksheets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "worksheets" */
export type Worksheets_Arr_Rel_Insert_Input = {
  data: Array<Worksheets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Worksheets_On_Conflict>;
};

/** aggregate avg on columns */
export type Worksheets_Avg_Fields = {
  __typename?: 'worksheets_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "worksheets" */
export type Worksheets_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "worksheets". All fields are combined with a logical 'AND'. */
export type Worksheets_Bool_Exp = {
  _and?: InputMaybe<Array<Worksheets_Bool_Exp>>;
  _not?: InputMaybe<Worksheets_Bool_Exp>;
  _or?: InputMaybe<Array<Worksheets_Bool_Exp>>;
  created?: InputMaybe<Timestamp_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questions_order?: InputMaybe<String_Array_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  worksheets_to_questions?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
  worksheets_to_questions_aggregate?: InputMaybe<Worksheets_To_Questions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "worksheets" */
export enum Worksheets_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorksheetsPkey = 'worksheets_pkey'
}

/** input type for incrementing numeric columns in table "worksheets" */
export type Worksheets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "worksheets" */
export type Worksheets_Insert_Input = {
  created?: InputMaybe<Scalars['timestamp']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions_order?: InputMaybe<Array<Scalars['String']['input']>>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  worksheets_to_questions?: InputMaybe<Worksheets_To_Questions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Worksheets_Max_Fields = {
  __typename?: 'worksheets_max_fields';
  created?: Maybe<Scalars['timestamp']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questions_order?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by max() on columns of table "worksheets" */
export type Worksheets_Max_Order_By = {
  created?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_order?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Worksheets_Min_Fields = {
  __typename?: 'worksheets_min_fields';
  created?: Maybe<Scalars['timestamp']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questions_order?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by min() on columns of table "worksheets" */
export type Worksheets_Min_Order_By = {
  created?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_order?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "worksheets" */
export type Worksheets_Mutation_Response = {
  __typename?: 'worksheets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Worksheets>;
};

/** input type for inserting object relation for remote table "worksheets" */
export type Worksheets_Obj_Rel_Insert_Input = {
  data: Worksheets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Worksheets_On_Conflict>;
};

/** on_conflict condition type for table "worksheets" */
export type Worksheets_On_Conflict = {
  constraint: Worksheets_Constraint;
  update_columns?: Array<Worksheets_Update_Column>;
  where?: InputMaybe<Worksheets_Bool_Exp>;
};

/** Ordering options when selecting data from "worksheets". */
export type Worksheets_Order_By = {
  created?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_order?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  worksheets_to_questions_aggregate?: InputMaybe<Worksheets_To_Questions_Aggregate_Order_By>;
};

/** primary key columns input for table: worksheets */
export type Worksheets_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "worksheets" */
export enum Worksheets_Select_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  QuestionsOrder = 'questions_order'
}

/** input type for updating data in table "worksheets" */
export type Worksheets_Set_Input = {
  created?: InputMaybe<Scalars['timestamp']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions_order?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate stddev on columns */
export type Worksheets_Stddev_Fields = {
  __typename?: 'worksheets_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "worksheets" */
export type Worksheets_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Worksheets_Stddev_Pop_Fields = {
  __typename?: 'worksheets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "worksheets" */
export type Worksheets_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Worksheets_Stddev_Samp_Fields = {
  __typename?: 'worksheets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "worksheets" */
export type Worksheets_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "worksheets" */
export type Worksheets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Worksheets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Worksheets_Stream_Cursor_Value_Input = {
  created?: InputMaybe<Scalars['timestamp']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions_order?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate sum on columns */
export type Worksheets_Sum_Fields = {
  __typename?: 'worksheets_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "worksheets" */
export type Worksheets_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "worksheets_to_questions" */
export type Worksheets_To_Questions = {
  __typename?: 'worksheets_to_questions';
  /** An object relationship */
  question: Questions;
  question_id: Scalars['String']['output'];
  /** An object relationship */
  worksheet: Worksheets;
  worksheet_id: Scalars['Int']['output'];
};

/** aggregated selection of "worksheets_to_questions" */
export type Worksheets_To_Questions_Aggregate = {
  __typename?: 'worksheets_to_questions_aggregate';
  aggregate?: Maybe<Worksheets_To_Questions_Aggregate_Fields>;
  nodes: Array<Worksheets_To_Questions>;
};

export type Worksheets_To_Questions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Worksheets_To_Questions_Aggregate_Bool_Exp_Count>;
};

export type Worksheets_To_Questions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "worksheets_to_questions" */
export type Worksheets_To_Questions_Aggregate_Fields = {
  __typename?: 'worksheets_to_questions_aggregate_fields';
  avg?: Maybe<Worksheets_To_Questions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Worksheets_To_Questions_Max_Fields>;
  min?: Maybe<Worksheets_To_Questions_Min_Fields>;
  stddev?: Maybe<Worksheets_To_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Worksheets_To_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Worksheets_To_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Worksheets_To_Questions_Sum_Fields>;
  var_pop?: Maybe<Worksheets_To_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Worksheets_To_Questions_Var_Samp_Fields>;
  variance?: Maybe<Worksheets_To_Questions_Variance_Fields>;
};


/** aggregate fields of "worksheets_to_questions" */
export type Worksheets_To_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Worksheets_To_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Aggregate_Order_By = {
  avg?: InputMaybe<Worksheets_To_Questions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Worksheets_To_Questions_Max_Order_By>;
  min?: InputMaybe<Worksheets_To_Questions_Min_Order_By>;
  stddev?: InputMaybe<Worksheets_To_Questions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Worksheets_To_Questions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Worksheets_To_Questions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Worksheets_To_Questions_Sum_Order_By>;
  var_pop?: InputMaybe<Worksheets_To_Questions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Worksheets_To_Questions_Var_Samp_Order_By>;
  variance?: InputMaybe<Worksheets_To_Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "worksheets_to_questions" */
export type Worksheets_To_Questions_Arr_Rel_Insert_Input = {
  data: Array<Worksheets_To_Questions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Worksheets_To_Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Worksheets_To_Questions_Avg_Fields = {
  __typename?: 'worksheets_to_questions_avg_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Avg_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "worksheets_to_questions". All fields are combined with a logical 'AND'. */
export type Worksheets_To_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Worksheets_To_Questions_Bool_Exp>>;
  _not?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Worksheets_To_Questions_Bool_Exp>>;
  question?: InputMaybe<Questions_Bool_Exp>;
  question_id?: InputMaybe<String_Comparison_Exp>;
  worksheet?: InputMaybe<Worksheets_Bool_Exp>;
  worksheet_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "worksheets_to_questions" */
export enum Worksheets_To_Questions_Constraint {
  /** unique or primary key constraint on columns "question_id", "worksheet_id" */
  WorksheetsToQuestionsWorksheetIdQuestionIdPk = 'worksheets_to_questions_worksheet_id_question_id_pk'
}

/** input type for incrementing numeric columns in table "worksheets_to_questions" */
export type Worksheets_To_Questions_Inc_Input = {
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "worksheets_to_questions" */
export type Worksheets_To_Questions_Insert_Input = {
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: InputMaybe<Scalars['String']['input']>;
  worksheet?: InputMaybe<Worksheets_Obj_Rel_Insert_Input>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Worksheets_To_Questions_Max_Fields = {
  __typename?: 'worksheets_to_questions_max_fields';
  question_id?: Maybe<Scalars['String']['output']>;
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Max_Order_By = {
  question_id?: InputMaybe<Order_By>;
  worksheet_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Worksheets_To_Questions_Min_Fields = {
  __typename?: 'worksheets_to_questions_min_fields';
  question_id?: Maybe<Scalars['String']['output']>;
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Min_Order_By = {
  question_id?: InputMaybe<Order_By>;
  worksheet_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "worksheets_to_questions" */
export type Worksheets_To_Questions_Mutation_Response = {
  __typename?: 'worksheets_to_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Worksheets_To_Questions>;
};

/** on_conflict condition type for table "worksheets_to_questions" */
export type Worksheets_To_Questions_On_Conflict = {
  constraint: Worksheets_To_Questions_Constraint;
  update_columns?: Array<Worksheets_To_Questions_Update_Column>;
  where?: InputMaybe<Worksheets_To_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "worksheets_to_questions". */
export type Worksheets_To_Questions_Order_By = {
  question?: InputMaybe<Questions_Order_By>;
  question_id?: InputMaybe<Order_By>;
  worksheet?: InputMaybe<Worksheets_Order_By>;
  worksheet_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: worksheets_to_questions */
export type Worksheets_To_Questions_Pk_Columns_Input = {
  question_id: Scalars['String']['input'];
  worksheet_id: Scalars['Int']['input'];
};

/** select columns of table "worksheets_to_questions" */
export enum Worksheets_To_Questions_Select_Column {
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  WorksheetId = 'worksheet_id'
}

/** input type for updating data in table "worksheets_to_questions" */
export type Worksheets_To_Questions_Set_Input = {
  question_id?: InputMaybe<Scalars['String']['input']>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Worksheets_To_Questions_Stddev_Fields = {
  __typename?: 'worksheets_to_questions_stddev_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Stddev_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Worksheets_To_Questions_Stddev_Pop_Fields = {
  __typename?: 'worksheets_to_questions_stddev_pop_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Stddev_Pop_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Worksheets_To_Questions_Stddev_Samp_Fields = {
  __typename?: 'worksheets_to_questions_stddev_samp_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Stddev_Samp_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "worksheets_to_questions" */
export type Worksheets_To_Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Worksheets_To_Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Worksheets_To_Questions_Stream_Cursor_Value_Input = {
  question_id?: InputMaybe<Scalars['String']['input']>;
  worksheet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Worksheets_To_Questions_Sum_Fields = {
  __typename?: 'worksheets_to_questions_sum_fields';
  worksheet_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Sum_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** update columns of table "worksheets_to_questions" */
export enum Worksheets_To_Questions_Update_Column {
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  WorksheetId = 'worksheet_id'
}

export type Worksheets_To_Questions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Worksheets_To_Questions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Worksheets_To_Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Worksheets_To_Questions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Worksheets_To_Questions_Var_Pop_Fields = {
  __typename?: 'worksheets_to_questions_var_pop_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Var_Pop_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Worksheets_To_Questions_Var_Samp_Fields = {
  __typename?: 'worksheets_to_questions_var_samp_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Var_Samp_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Worksheets_To_Questions_Variance_Fields = {
  __typename?: 'worksheets_to_questions_variance_fields';
  worksheet_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "worksheets_to_questions" */
export type Worksheets_To_Questions_Variance_Order_By = {
  worksheet_id?: InputMaybe<Order_By>;
};

/** update columns of table "worksheets" */
export enum Worksheets_Update_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  QuestionsOrder = 'questions_order'
}

export type Worksheets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Worksheets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Worksheets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Worksheets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Worksheets_Var_Pop_Fields = {
  __typename?: 'worksheets_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "worksheets" */
export type Worksheets_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Worksheets_Var_Samp_Fields = {
  __typename?: 'worksheets_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "worksheets" */
export type Worksheets_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Worksheets_Variance_Fields = {
  __typename?: 'worksheets_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "worksheets" */
export type Worksheets_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type GetWorksheetByIdQueryVariables = Exact<{
  worksheetId: Scalars['Int']['input'];
}>;


export type GetWorksheetByIdQuery = { __typename?: 'query_root', worksheets: Array<{ __typename?: 'worksheets', creator?: string | null, questions_order: Array<string> }> };

export type GetQuestionImagesQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetQuestionImagesQuery = { __typename?: 'query_root', questions: Array<{ __typename?: 'questions', id: string, answerimgs: Array<{ __typename?: 'answerimgs', answerimgid: any, answerimgname: string }>, questionimgs: Array<{ __typename?: 'questionimgs', questionimgid: any, questionimgname: string }>, paper: { __typename?: 'papers', paper: any } }> };

export type GetPublishedStatusQueryVariables = Exact<{
  authorId: Scalars['String']['input'];
  worksheetId: Scalars['Int']['input'];
}>;


export type GetPublishedStatusQuery = { __typename?: 'query_root', published_worksheets: Array<{ __typename?: 'published_worksheets', published: boolean }> };

export type PublishWorksheetMutationVariables = Exact<{
  authorId: Scalars['String']['input'];
  worksheetId: Scalars['Int']['input'];
}>;


export type PublishWorksheetMutation = { __typename?: 'mutation_root', insert_published_worksheets?: { __typename?: 'published_worksheets_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'published_worksheets', worksheet_id: number }> } | null };

export type UpdatePublishedStatusMutationVariables = Exact<{
  authorId: Scalars['String']['input'];
  worksheetId: Scalars['Int']['input'];
  published: Scalars['Boolean']['input'];
}>;


export type UpdatePublishedStatusMutation = { __typename?: 'mutation_root', update_published_worksheets?: { __typename?: 'published_worksheets_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'published_worksheets', worksheet_id: number }> } | null };

export type GetCustomAnswerQueryVariables = Exact<{
  authorId: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
}>;


export type GetCustomAnswerQuery = { __typename?: 'query_root', custom_answers_for_worksheets: Array<{ __typename?: 'custom_answers_for_worksheets', answer: any }> };

export type InsertCustomAnswerMutationVariables = Exact<{
  authorId: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  answerJson: Scalars['json']['input'];
}>;


export type InsertCustomAnswerMutation = { __typename?: 'mutation_root', insert_custom_answers_for_worksheets?: { __typename?: 'custom_answers_for_worksheets_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_answers_for_worksheets', question_id: string }> } | null };

export type UpdateCustomAnswerMutationVariables = Exact<{
  authorId: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  answerJson: Scalars['json']['input'];
}>;


export type UpdateCustomAnswerMutation = { __typename?: 'mutation_root', update_custom_answers_for_worksheets?: { __typename?: 'custom_answers_for_worksheets_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_answers_for_worksheets', question_id: string }> } | null };

export type DeleteCustomAnswerMutationVariables = Exact<{
  authorId: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
}>;


export type DeleteCustomAnswerMutation = { __typename?: 'mutation_root', delete_custom_answers_for_worksheets?: { __typename?: 'custom_answers_for_worksheets_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_answers_for_worksheets', question_id: string }> } | null };

export type GetQuestionsByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetQuestionsByIdQuery = { __typename?: 'query_root', questions: Array<{ __typename?: 'questions', id: string, answerimgs: Array<{ __typename?: 'answerimgs', answerimgname: string, answerimgid: any }>, questionimgs: Array<{ __typename?: 'questionimgs', questionimgname: string, questionimgid: any }>, assessment: { __typename?: 'assessments', assessmentname: string }, level: { __typename?: 'levels', level: string }, paper: { __typename?: 'papers', paper: any }, school: { __typename?: 'schools', schoolname: string }, question_topics: Array<{ __typename?: 'question_topic', topic: { __typename?: 'topics', topicname: string } }> }> };

export type GetFreeWorksheetsLeftQueryVariables = Exact<{
  userid: Scalars['String']['input'];
}>;


export type GetFreeWorksheetsLeftQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', free_worksheets_count: number }> };

export type DecrementFreeWorksheetsMutationVariables = Exact<{
  userid: Scalars['String']['input'];
}>;


export type DecrementFreeWorksheetsMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: string, free_worksheets_count: number } | null };

export type CreateWorksheetMutationVariables = Exact<{
  name: Scalars['String']['input'];
  creator: Scalars['String']['input'];
  questions_order: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateWorksheetMutation = { __typename?: 'mutation_root', insert_worksheets_one?: { __typename?: 'worksheets', id: number, name: string, created: any } | null };

export type CreateWorksheetQuestionsMutationVariables = Exact<{
  objects: Array<Worksheets_To_Questions_Insert_Input> | Worksheets_To_Questions_Insert_Input;
}>;


export type CreateWorksheetQuestionsMutation = { __typename?: 'mutation_root', insert_worksheets_to_questions?: { __typename?: 'worksheets_to_questions_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'worksheets_to_questions', worksheet_id: number, question_id: string }> } | null };

export type GetUserWorksheetsQueryVariables = Exact<{
  userid: Scalars['String']['input'];
}>;


export type GetUserWorksheetsQuery = { __typename?: 'query_root', worksheets: Array<{ __typename?: 'worksheets', name: string, id: number, created: any, questions_order: Array<string>, worksheets_to_questions: Array<{ __typename?: 'worksheets_to_questions', question_id: string, question: { __typename?: 'questions', question_topics: Array<{ __typename?: 'question_topic', topic: { __typename?: 'topics', topicname: string, subject: { __typename?: 'subjects', subject: string } } }>, paper: { __typename?: 'papers', paper: any }, level: { __typename?: 'levels', level: string }, assessment: { __typename?: 'assessments', assessmentname: string } } }> }> };

export type UpdateWorksheetNameMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  newName: Scalars['String']['input'];
}>;


export type UpdateWorksheetNameMutation = { __typename?: 'mutation_root', update_worksheets_by_pk?: { __typename?: 'worksheets', id: number, name: string } | null };

export type DeleteWorksheetAndRelationsMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteWorksheetAndRelationsMutation = { __typename?: 'mutation_root', delete_worksheets_to_questions?: { __typename?: 'worksheets_to_questions_mutation_response', affected_rows: number } | null, delete_worksheets_by_pk?: { __typename?: 'worksheets', id: number } | null };

export type GetAllOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOptionsQuery = { __typename?: 'query_root', levels: Array<{ __typename?: 'levels', level: string, levelid: any }>, subjects: Array<{ __typename?: 'subjects', subject: string, subjectid: any, subject_levels: Array<{ __typename?: 'subject_level', level: { __typename?: 'levels', level: string } }> }>, topics: Array<{ __typename?: 'topics', topicname: string, subject: { __typename?: 'subjects', subject: string } }>, papers: Array<{ __typename?: 'papers', paper: any, subject_papers: Array<{ __typename?: 'subject_paper', subject: { __typename?: 'subjects', subject: string } }> }>, assessments: Array<{ __typename?: 'assessments', assessmentname: string, assessment_levels: Array<{ __typename?: 'assessment_level', level: { __typename?: 'levels', level: string } }> }>, schools: Array<{ __typename?: 'schools', schoolname: string, school_subjects: Array<{ __typename?: 'school_subject', subject: { __typename?: 'subjects', subject: string } }> }> };

export type GetLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelsQuery = { __typename?: 'query_root', levels: Array<{ __typename?: 'levels', level: string, levelid: any }> };

export type GetSubjectsQueryVariables = Exact<{
  levels?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetSubjectsQuery = { __typename?: 'query_root', subjects: Array<{ __typename?: 'subjects', subject: string, subjectid: any }> };

export type GetTopicsQueryVariables = Exact<{
  subject?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTopicsQuery = { __typename?: 'query_root', topics: Array<{ __typename?: 'topics', topicname: string }> };

export type GetPapersQueryVariables = Exact<{
  subject?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPapersQuery = { __typename?: 'query_root', papers: Array<{ __typename?: 'papers', paper: any }> };

export type GetAssessmentsQueryVariables = Exact<{
  levels?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetAssessmentsQuery = { __typename?: 'query_root', assessments: Array<{ __typename?: 'assessments', assessmentname: string }> };

export type GetSchoolsQueryVariables = Exact<{
  subject?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSchoolsQuery = { __typename?: 'query_root', schools: Array<{ __typename?: 'schools', schoolname: string }> };

export type GetQuestionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  topics?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  levels?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  papers?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
  assessments?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  schools?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetQuestionsQuery = { __typename?: 'query_root', questions_aggregate: { __typename?: 'questions_aggregate', aggregate?: { __typename?: 'questions_aggregate_fields', count: number } | null }, questions: Array<{ __typename?: 'questions', id: string, answerimgs: Array<{ __typename?: 'answerimgs', answerimgname: string, answerimgid: any }>, questionimgs: Array<{ __typename?: 'questionimgs', questionimgname: string, questionimgid: any }>, assessment: { __typename?: 'assessments', assessmentname: string }, level: { __typename?: 'levels', level: string }, paper: { __typename?: 'papers', paper: any }, school: { __typename?: 'schools', schoolname: string }, question_topics: Array<{ __typename?: 'question_topic', topic: { __typename?: 'topics', topicname: string } }> }> };

export type GetQuestionCountsQueryVariables = Exact<{
  topics?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  levels?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  papers?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
  assessments?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  schools?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  excludedIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetQuestionCountsQuery = { __typename?: 'query_root', all: { __typename?: 'questions_aggregate', aggregate?: { __typename?: 'questions_aggregate_fields', count: number } | null }, excluding: { __typename?: 'questions_aggregate', aggregate?: { __typename?: 'questions_aggregate_fields', count: number } | null } };

export type GetUserWorksheetsForOptionsQueryVariables = Exact<{
  userid: Scalars['String']['input'];
}>;


export type GetUserWorksheetsForOptionsQuery = { __typename?: 'query_root', worksheets: Array<{ __typename?: 'worksheets', id: number, name: string, worksheets_to_questions: Array<{ __typename?: 'worksheets_to_questions', question_id: string }> }> };

export type GetUserSubscriptionQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserSubscriptionQuery = { __typename?: 'query_root', subscriptions: Array<{ __typename?: 'subscriptions', status: string, current_period_end: any }> };


export const GetWorksheetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorksheetById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"questions_order"}}]}}]}}]} as unknown as DocumentNode<GetWorksheetByIdQuery, GetWorksheetByIdQueryVariables>;
export const GetQuestionImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestionImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answerimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerimgid"}},{"kind":"Field","name":{"kind":"Name","value":"answerimgname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionimgid"}},{"kind":"Field","name":{"kind":"Name","value":"questionimgname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}}]}}]}}]}}]} as unknown as DocumentNode<GetQuestionImagesQuery, GetQuestionImagesQueryVariables>;
export const GetPublishedStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublishedStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"worksheet_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}}]} as unknown as DocumentNode<GetPublishedStatusQuery, GetPublishedStatusQueryVariables>;
export const PublishWorksheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishWorksheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_published_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"worksheet_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheet_id"}}]}}]}}]}}]} as unknown as DocumentNode<PublishWorksheetMutation, PublishWorksheetMutationVariables>;
export const UpdatePublishedStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePublishedStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"published"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_published_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"worksheet_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"worksheetId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"Variable","name":{"kind":"Name","value":"published"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheet_id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePublishedStatusMutation, UpdatePublishedStatusMutationVariables>;
export const GetCustomAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_answers_for_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}}]}}]} as unknown as DocumentNode<GetCustomAnswerQuery, GetCustomAnswerQueryVariables>;
export const InsertCustomAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answerJson"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"json"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_answers_for_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"answer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answerJson"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}}]} as unknown as DocumentNode<InsertCustomAnswerMutation, InsertCustomAnswerMutationVariables>;
export const UpdateCustomAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answerJson"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"json"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_custom_answers_for_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"answer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answerJson"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCustomAnswerMutation, UpdateCustomAnswerMutationVariables>;
export const DeleteCustomAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_answers_for_worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomAnswerMutation, DeleteCustomAnswerMutationVariables>;
export const GetQuestionsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestionsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerimgname"}},{"kind":"Field","name":{"kind":"Name","value":"answerimgid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionimgname"}},{"kind":"Field","name":{"kind":"Name","value":"questionimgid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"school"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetQuestionsByIdQuery, GetQuestionsByIdQueryVariables>;
export const GetFreeWorksheetsLeftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFreeWorksheetsLeft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"free_worksheets_count"}}]}}]}}]} as unknown as DocumentNode<GetFreeWorksheetsLeftQuery, GetFreeWorksheetsLeftQueryVariables>;
export const DecrementFreeWorksheetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DecrementFreeWorksheets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userid"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_inc"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"free_worksheets_count"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"free_worksheets_count"}}]}}]}}]} as unknown as DocumentNode<DecrementFreeWorksheetsMutation, DecrementFreeWorksheetsMutationVariables>;
export const CreateWorksheetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorksheet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creator"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions_order"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_worksheets_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creator"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"questions_order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions_order"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<CreateWorksheetMutation, CreateWorksheetMutationVariables>;
export const CreateWorksheetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorksheetQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"worksheets_to_questions_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_worksheets_to_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheet_id"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWorksheetQuestionsMutation, CreateWorksheetQuestionsMutationVariables>;
export const GetUserWorksheetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserWorksheets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"questions_order"}},{"kind":"Field","name":{"kind":"Name","value":"worksheets_to_questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicname"}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentname"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserWorksheetsQuery, GetUserWorksheetsQueryVariables>;
export const UpdateWorksheetNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWorksheetName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_worksheets_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateWorksheetNameMutation, UpdateWorksheetNameMutationVariables>;
export const DeleteWorksheetAndRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteWorksheetAndRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_worksheets_to_questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"worksheet_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_worksheets_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteWorksheetAndRelationsMutation, DeleteWorksheetAndRelationsMutationVariables>;
export const GetAllOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"levelid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"subjectid"}},{"kind":"Field","name":{"kind":"Name","value":"subject_levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicname"}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"papers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}},{"kind":"Field","name":{"kind":"Name","value":"subject_papers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentname"}},{"kind":"Field","name":{"kind":"Name","value":"assessment_levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"schools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolname"}},{"kind":"Field","name":{"kind":"Name","value":"school_subjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllOptionsQuery, GetAllOptionsQueryVariables>;
export const GetLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"levelid"}}]}}]}}]} as unknown as DocumentNode<GetLevelsQuery, GetLevelsQueryVariables>;
export const GetSubjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject_levels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"subjectid"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsQuery, GetSubjectsQueryVariables>;
export const GetTopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicname"}}]}}]}}]} as unknown as DocumentNode<GetTopicsQuery, GetTopicsQueryVariables>;
export const GetPapersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPapers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"papers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject_papers"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}}]}}]}}]} as unknown as DocumentNode<GetPapersQuery, GetPapersQueryVariables>;
export const GetAssessmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssessments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assessment_levels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentname"}}]}}]}}]} as unknown as DocumentNode<GetAssessmentsQuery, GetAssessmentsQueryVariables>;
export const GetSchoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSchools"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"school_subjects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolname"}}]}}]}}]} as unknown as DocumentNode<GetSchoolsQuery, GetSchoolsQueryVariables>;
export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topics"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"papers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schools"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_topics"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topicname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topics"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"papers"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"assessment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assessmentname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"school"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"schoolname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schools"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_topics"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topicname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topics"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"papers"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"assessment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assessmentname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"school"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"schoolname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schools"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerimgname"}},{"kind":"Field","name":{"kind":"Name","value":"answerimgid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionimgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionimgname"}},{"kind":"Field","name":{"kind":"Name","value":"questionimgid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assessment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assessmentname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"school"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const GetQuestionCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestionCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topics"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"papers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schools"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"excludedIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_topics"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topicname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topics"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"papers"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"assessment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assessmentname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"school"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"schoolname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schools"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"excluding"},"name":{"kind":"Name","value":"questions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_topics"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topicname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topics"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"paper"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"papers"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"assessment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"assessmentname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"assessments"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"school"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"schoolname"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schools"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"excludedIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetQuestionCountsQuery, GetQuestionCountsQueryVariables>;
export const GetUserWorksheetsForOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserWorksheetsForOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worksheets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"worksheets_to_questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserWorksheetsForOptionsQuery, GetUserWorksheetsForOptionsQueryVariables>;
export const GetUserSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"current_period_end"}}]}}]}}]} as unknown as DocumentNode<GetUserSubscriptionQuery, GetUserSubscriptionQueryVariables>;