import {
  type ApolloClient,
  type FetchResult,
  type NormalizedCacheObject,
} from "@apollo/client";
import { QuerySQLDocument } from "./gql";

/**
 * The result of a SQL query.
 */
export interface SQLResult {
  __typename?: "SQLResult";
  columns: string[];
  rows: any[][];
}

/**
 * Type definition for the QuerySQL mutation response.
 */
export interface QuerySQLMutation {
  querySQL: SQLResult;
}

/**
 * Type definition for the QuerySQL mutation variables.
 */
export interface QuerySQLMutationVariables {
  sql: string;
  args?: any[];
}

/**
 * A service class for interacting with the database via GraphQL mutations.
 * This class encapsulates the logic for sending SQL queries to the backend.
 */
export class DBService {
  private client: ApolloClient<NormalizedCacheObject>;

  /**
   * Creates an instance of DBService.
   * @param client The ApolloClient instance to use for making mutations.
   */
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  /**
   * Executes a SQL query with optional arguments.
   * @param sql The SQL query string to execute.
   * @param args An array of arguments to pass with the SQL query.
   * @returns A promise that resolves with the SQL query result, or null/undefined if no data is returned.
   */
  public async query(
    sql: string,
    args?: any[],
  ): Promise<SQLResult | undefined | null> {
    try {
      const result: FetchResult<QuerySQLMutation> = await this.client.mutate<
        QuerySQLMutation,
        QuerySQLMutationVariables
      >({
        mutation: QuerySQLDocument,
        variables: { sql, args },
      });
      return result.data?.querySQL;
    } catch (error) {
      console.error(`Error executing query: ${sql}`, error);
      // Re-throw the error to allow the caller to handle it.
      throw error;
    }
  }
}
