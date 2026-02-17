const leaderboard = [
  { rank: 1, name: "Nadia", points: 3450 },
  { rank: 2, name: "Bima", points: 3330 },
  { rank: 3, name: "Raka", points: 3210 },
];

export function LeaderboardTable() {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b text-left">
          <th className="p-2">Peringkat</th>
          <th className="p-2">Nama</th>
          <th className="p-2">Poin</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((player) => (
          <tr key={player.rank} className="border-b">
            <td className="p-2">#{player.rank}</td>
            <td className="p-2">{player.name}</td>
            <td className="p-2">{player.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
