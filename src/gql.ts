import { type MutationHookOptions, gql, useMutation } from "@apollo/client";

export const QuerySQLDocument = gql`
  mutation QuerySQL($sql: String!, $args: [Any]) {
    querySQL(sql: $sql, args: $args) {
      columns
      rows
    }
  }
`;

export function useQuerySQLMutation(
  options?: MutationHookOptions<QuerySQLMutation, QuerySQLMutationVariables>,
) {
  return useMutation<QuerySQLMutation, QuerySQLMutationVariables>(
    QuerySQLDocument,
    options,
  );
}
