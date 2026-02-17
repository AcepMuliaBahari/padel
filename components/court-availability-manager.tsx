const courts = [
  { name: "Court A", status: "Tersedia", nextSlot: "13:00 - 14:00" },
  { name: "Court B", status: "Dipakai", nextSlot: "14:00 - 15:00" },
  { name: "Court C", status: "Maintenance", nextSlot: "Besok 08:00" },
];

export function CourtAvailabilityManager() {
  return (
    <section className="rounded-lg border p-4">
      <h2 className="mb-3 text-lg font-semibold">Manajemen Ketersediaan Lapangan</h2>
      <div className="space-y-2 text-sm">
        {courts.map((court) => (
          <div key={court.name} className="flex items-center justify-between rounded border p-2">
            <div>
              <p className="font-medium">{court.name}</p>
              <p className="text-slate-500">Slot berikutnya: {court.nextSlot}</p>
            </div>
            <span className="rounded bg-slate-100 px-2 py-1">{court.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
