type SQLQueryResult = {
  __typename?: "SQLQueryResult";
  columns: Array<Scalars["String"]["output"]>;
  rows: Array<Array<Maybe<Scalars["Any"]["output"]>>>;
};

type QuerySQLMutation = {
  __typename?: "Mutation";
  querySQL: SQLQueryResult;
};

type QuerySQLMutationVariables = Exact<{
  sql: Scalars["String"]["input"];
  args?: InputMaybe<Scalars["Map"]["input"]>;
}>;

type QuerySQLMutationFn = MutationFunction<
  QuerySQLMutation,
  QuerySQLMutationVariables
>;

type QuerySQLMutationHookResult = ReturnType<typeof useQuerySQLMutation>;
type QuerySQLMutationResult = MutationResult<QuerySQLMutation>;
type QuerySQLMutationOptions = BaseMutationOptions<
  QuerySQLMutation,
  QuerySQLMutationVariables
>;
