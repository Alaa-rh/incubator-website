const DataTable = ({ columns, data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-full text-right" dir="ltr">
        <thead>
          <tr className="border-b border-second-color">
            {columns.map((col) => (
              <th key={col.key} className="p-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-400 hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="p-3">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
