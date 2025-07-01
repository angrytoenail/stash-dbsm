import React from "react";
import sql from "@sql/example.sql";
import { useQuerySQLMutation } from "@/gql";

import { Heading } from "@/components/ui/heading";
import { PlusIcon } from "@heroicons/react/16/solid";
import { SQLEditor } from "@/components/ui/editor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const LoadingIndicator = () => <div>LOADING...</div>;

export default () => {
  // const { LoadingIndicator } = PluginApi.components;
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

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-4 mb-16">
      <div className="mb-4 flex w-full flex-wrap items-baseline justify-between gap-4">
        <Heading>Database SQL Manager</Heading>
      </div>
      <div>
        <label htmlFor="title" className="sr-only">
          SQL Query
        </label>
        <SQLEditor value={code} onValueChange={(code) => setCode(code)} />
        {error && <div className="text-red-600">{error.message}</div>}
      </div>

      <div className="flex justify-end mt-4">
        <Button onClick={submitQuery} disabled={loading}>
          <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
          {loading ? "Running..." : "Submit Query"}
        </Button>
      </div>

      {rows.length > 0 && (
        <div>
          {loading && (
            <div className="absolute inset-0 bg-stash-800/50 flex items-center justify-center rounded-lg">
              <LoadingIndicator />
            </div>
          )}
          <Table bleed striped>
            <TableHead>
              <TableRow>
                <TableHeader className="font-medium text-center">#</TableHeader>
                {columns.map((colName, colNum) => (
                  <TableHeader className="font-medium" key={colNum}>
                    {colName}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                  <TableCell className="font-medium text-center">
                    {rowIdx + 1}
                  </TableCell>
                  {row.map((val, valIdx) => (
                    <TableCell key={valIdx}>
                      <div className="text-wrap">{String(val)}</div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};
