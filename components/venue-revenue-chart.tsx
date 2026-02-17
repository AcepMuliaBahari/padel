const monthlyRevenue = [
  { month: "Jan", value: 22000000 },
  { month: "Feb", value: 24500000 },
  { month: "Mar", value: 28100000 },
  { month: "Apr", value: 26700000 },
];

export function VenueRevenueChart() {
  const peak = Math.max(...monthlyRevenue.map((item) => item.value));

  return (
    <section className="rounded-lg border p-4">
      <h2 className="mb-3 text-lg font-semibold">Analisis Pendapatan</h2>
      <div className="space-y-2">
        {monthlyRevenue.map((item) => (
          <div key={item.month}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{item.month}</span>
              <span>Rp {item.value.toLocaleString("id-ID")}</span>
            </div>
            <div className="h-2 rounded bg-slate-100">
              <div className="h-2 rounded bg-emerald-500" style={{ width: `${(item.value / peak) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
