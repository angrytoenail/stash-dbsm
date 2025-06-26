import type { MutationHookOptions } from "@apollo/client";

const api = window.PluginApi;

export const { React, GQL } = api;
export const { Apollo, Bootstrap } = api.libraries;
export default api;

const { gql, useMutation } = Apollo;

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
