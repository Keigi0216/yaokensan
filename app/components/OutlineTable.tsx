interface OutlineRow {
  label: string;
  value: string;
}

interface OutlineTableProps {
  rows: OutlineRow[];
}

export function OutlineTable({ rows }: OutlineTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[280px] border-collapse">
        <tbody>
          {rows.map(({ label, value }) => (
            <tr
              key={label}
              className="border-b border-[var(--earth-brown)]/20 last:border-b-0"
            >
              <th
                scope="row"
                className="w-28 py-4 pr-4 text-left align-top text-sm font-medium text-[var(--earth-brown-muted)]"
              >
                {label}
              </th>
              <td className="py-4 text-[var(--foreground)]">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
