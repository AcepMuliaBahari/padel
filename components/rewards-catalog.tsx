const rewards = [
  { name: "Diskon 20% Booking", points: 500 },
  { name: "Sesi Gratis 1 Jam", points: 1200 },
  { name: "Merchandise Eksklusif", points: 1800 },
];

export function RewardsCatalog() {
  return (
    <section className="rounded-lg border p-4">
      <h2 className="mb-3 text-lg font-semibold">Katalog Hadiah</h2>
      <ul className="space-y-2 text-sm">
        {rewards.map((reward) => (
          <li key={reward.name} className="flex items-center justify-between rounded border p-2">
            <span>{reward.name}</span>
            <span>{reward.points} poin</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
