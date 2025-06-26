import sql from "@sql/example.sql";
import api, { React, useQuerySQLMutation } from "@/api.ts";
import "./style.css";

const { useEffect, useState } = React;

api.patch.instead(
  "FrontPage",
  function (props: object, _: object, original: any) {
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<any[][]>([]);

    const [querySQL, { loading, error }] = useQuerySQLMutation({
      onCompleted: (data) => {
        if (data?.querySQL) {
          setColumns(data.querySQL.columns);
          setRows(data.querySQL.rows);
        }
      },
    });

    useEffect(() => {
      try {
        querySQL({ variables: { sql } });
      } catch (e) {
        console.error("Failed to decode or query SQL:", e);
      }
    }, [querySQL]);

    return (
      <>
        <div className="query-results">
          <h2>SQL Query Results</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching data: {error.message}</p>}
          {!loading && !error && columns.length > 0 ? (
            <table>
              <thead>
                <tr>
                  {columns.map((colName, index) => (
                    <th key={`${colName}-${index}`}>{colName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>
                        {cell === null ? <i>NULL</i> : String(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            !loading &&
            !error && (
              <p>Query executed successfully, but returned no results.</p>
            )
          )}
        </div>
        {original({ ...props })}
      </>
    );
  },
);
