import { MatchRequestModal } from "../../components/match-request-modal";
import { PlayerCard } from "../../components/player-card";

const players = [
  { name: "Nadia", level: "Intermediate", winRate: 61, preferredTime: "Malam" },
  { name: "Farhan", level: "Beginner+", winRate: 49, preferredTime: "Pagi" },
  { name: "Bima", level: "Advanced", winRate: 72, preferredTime: "Weekend" },
];

export default function MatchmakingPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Temukan Pemain</h1>
      <MatchRequestModal />
      <section className="grid gap-3 md:grid-cols-3">
        {players.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </section>
    </main>
  );
}
