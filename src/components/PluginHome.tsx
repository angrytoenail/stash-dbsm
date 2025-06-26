import api, { React, Bootstrap, useQuerySQLMutation } from "@/api.ts";
import sql from "@sql/example.sql";

const { useEffect, useState } = React;

const PluginHome: React.FC = () => {
  const { LoadingIndicator } = api.components;
  const { Table } = Bootstrap;
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

  if (loading) return <LoadingIndicator />;

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {columns.map((colName, index) => (
            <th key={index}>{colName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr>
            <td>{index}</td>
            {row.map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

PluginApi.register.route("/plugin/dbsm", PluginHome);
