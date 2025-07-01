import React from "react";
import sql from "@sql/example.sql";
import clsx from "clsx";
import { useQuerySQLMutation } from "@/gql";

import { Heading } from "@/components/ui/heading";
import { PlusIcon } from "@heroicons/react/16/solid";
import { QueryExplorer } from "@/components/QueryExplorer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/Form";

const modules: Record<string, string> = import.meta.glob("@sql/**/*.sql", {
  import: "default",
  eager: true,
});

const LoadingIndicator = () => <div>LOADING...</div>;

export default () => {
  // const { LoadingIndicator } = PluginApi.components;
  const [query, setQuery] = React.useState<SourceFile>({
    fileName: undefined,
    content: sql,
  });
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
      querySQL({ variables: { sql: query.content } });
    } catch (e) {
      console.error("Failed to decode or query SQL:", e);
    }
  };

  const queryFiles = new Map<string, Array<SourceFile>>();
  for (const path in modules) {
    const { parent, baseName: fileName } =
      path.match(/(?<parent>[^\/]+)\/(?<baseName>[^\/]+\.sql)$/)?.groups || {};
    const cat = queryFiles.get(parent) || [];
    cat.push({ fileName, content: modules[path] });
    queryFiles.set(parent, cat);
  }
  queryFiles.forEach((value, key) => {
    console.log(key, value);
  });

  return (
    <>
      <div className="-z-10 absolute inset-x-px top-0 h-44 -mt-7 bg-gradient-to-t from-stash-dark to-stash-light to-90%"></div>

      <div className="grid grid-cols-12 justify-items-start gap-12 px-4 sm:px-6 lg:px-8 mt-4 mb-16">
        <QueryExplorer
          queries={queryFiles}
          loadQuery={setQuery}
          className="col-span-12 sm:col-span-4 md:col-span-3"
        />
        <div className="w-full col-span-12 sm:col-span-8 md:col-span-9">
          <Heading>SQL Editor</Heading>
          <Form
            query={query}
            valueSetter={setQuery}
            error={error}
            className="mb-2"
          >
            <Button color="dark/stash" onClick={submitQuery} disabled={loading}>
              <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
              {loading ? "Running..." : "Submit Query"}
            </Button>
          </Form>
          {loading && (
            <div className="absolute inset-0 bg-stash-800/50 flex items-center justify-center rounded-lg">
              <LoadingIndicator />
            </div>
          )}
          {error && (
            <div className="text-orange-700 font-bold italic">
              {error.message}
            </div>
          )}
          <div
            className={clsx(
              rows.length > 0 || "hidden",
              "bg-stash-600/20 mt-12 mb-16",
            )}
          >
            <Table className="outline outline-stash-600/50 rounded-lg" bleed>
              <TableHead>
                <TableRow>
                  <TableHeader className="font-medium text-center">
                    #
                  </TableHeader>
                  {columns.map((colName, colNum) => (
                    <TableHeader className="font-medium uppercase" key={colNum}>
                      {colName}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIdx) => (
                  <TableRow key={rowIdx}>
                    <TableCell className="align-text-top font-medium text-zinc-500 dark:text-zinc-400 text-center">
                      {rowIdx + 1}
                    </TableCell>
                    {row.map((val, valIdx) => (
                      <TableCell
                        className="align-text-top text-wrap"
                        key={valIdx}
                      >
                        {String(val)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
