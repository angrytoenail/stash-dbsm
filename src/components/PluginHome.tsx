import React from "react";
import sql from "@sql/example.sql";
import { useQuerySQLMutation } from "@/gql";

import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Field, Label, ErrorMessage } from "@/components/ui/fieldset";
import { Textarea } from "@/components/ui/textarea";
import { SQLEditor } from "@/components/ui/editor";
import { Divider } from "@/components/ui/divider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="mb-4 flex w-full flex-wrap items-baseline justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Database SQL Manager</Heading>
        <div className="flex gap-4">
          <Button>Refund</Button>
          <Button>Resend invoice</Button>
        </div>
      </div>
      <Field>
        <Label>Description</Label>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          name="description"
        />
      </Field>
      <Divider className="my-6" />
      <Field>
        <Label>Description</Label>
        <SQLEditor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.sql, "sql")}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Field>

      <div className="flex justify-end mt-4">
        <Button onClick={submitQuery} disabled={loading}>
          <PlusIcon />
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
                <TableHeader>#</TableHeader>
                {columns.map((colName) => (
                  <TableHeader>{colName}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                  <TableCell>{rowIdx + 1}</TableCell>
                  {row.map((val, valIdx) => (
                    <TableCell key={valIdx}>
                      <div className="font-medium">{String(val)}</div>
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
