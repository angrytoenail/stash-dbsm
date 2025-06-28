import React from "react";
import sql from "@sql/example.sql";
import { useQuerySQLMutation } from "@/gql";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/16/solid";

export default () => {
  const { LoadingIndicator } = PluginApi.components;
  const [code, setCode] = React.useState(sql);
  const [columns, setColumns] = React.useState<string[]>([]);
  const [rows, setRows] = React.useState<any[][]>([]);
  const [querySQL, { loading, error }] = useQuerySQLMutation({
    onCompleted: (data) => {
      if (data?.querySQL) {
        setColumns(data.querySQL.columns);
        setRows(data.querySQL.rows);
      } else {
        setColumns([]);
        setRows([]);
      }
    },
    onError: () => {
      setColumns([]);
      setRows([]);
    },
  });

  const submitQuery = () => {
    try {
      querySQL({ variables: { sql: code } });
    } catch (e) {
      console.error("Failed to decode or query SQL:", e);
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-50">
            Database SQL Manager
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-2/3">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.sql, "sql")}
            padding={10}
            className="editor"
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button onClick={submitQuery} disabled={loading}>
          <PlusIcon />
          {loading ? "Running..." : "Submit Query"}
        </Button>
      </div>

      {error && (
        <div className="my-4 p-4 bg-red-800/20 ring-1 ring-red-500 rounded-lg text-red-300">
          <h3 className="font-bold">Error</h3>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
        </div>
      )}

      <div className="relative -mx-4 mt-10 ring-1 ring-stash-700 sm:mx-0 sm:rounded-lg text-lg text-gray-50 bg-stash-600 shadow-lg shadow-stash-900">
        {loading && (
          <div className="absolute inset-0 bg-stash-800/50 flex items-center justify-center rounded-lg">
            <LoadingIndicator />
          </div>
        )}
        {rows.length > 0 && (
          <table className="min-w-full divide-y divide-stash-700">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="relative align-middle px-7 sm:w-12 sm:px-6 bg-stash-700"
                >
                  #
                </th>
                {columns.map((colName, index) => (
                  <th
                    scope="col"
                    key={index}
                    className="hidden align-middle px-3 py-2 text-left text-lg font-semibold lg:table-cell bg-stash-700"
                  >
                    {colName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <th
                    scope="row"
                    className="py-2.5 text-center text-sm text-bold align-top"
                  >
                    {rowIdx + 1}
                  </th>
                  {row.map((val, valIdx) => (
                    <td
                      key={valIdx}
                      className={classNames(
                        rowIdx === 0 ? "" : "border-t border-transparent",
                        "relative py-2.5 pr-3 pl-4 text-sm sm:pl-6 align-top",
                      )}
                    >
                      <div className="font-medium">{String(val)}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
