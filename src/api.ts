import type { MutationHookOptions } from "@apollo/client";

const api = window.PluginApi;
const { React, libraries, GQL } = api;
const Apollo = libraries.Apollo;

export { Apollo, GQL, React };
export default api;

const { gql, useMutation } = Apollo;
const defaultOptions = {};

export const QuerySQLDocument = gql`
  mutation QuerySQL($sql: String!, $args: [Any]) {
    querySQL(sql: $sql, args: $args) {
      columns
      rows
    }
  }
`;

export function useQuerySQLMutation(
  baseOptions?: MutationHookOptions<
    QuerySQLMutation,
    QuerySQLMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return useMutation<QuerySQLMutation, QuerySQLMutationVariables>(
    QuerySQLDocument,
    options,
  );
}
