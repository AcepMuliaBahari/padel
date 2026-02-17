import { LeaderboardTable } from "../../../components/leaderboard-table";

export default function CommunityLeaderboardPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Leaderboard Komunitas</h1>
      <LeaderboardTable />
    </main>
  );
}
