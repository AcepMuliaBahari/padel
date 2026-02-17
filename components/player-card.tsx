export interface PlayerCardProps {
  name: string;
  level: string;
  winRate: number;
  preferredTime: string;
}

export function PlayerCard({ name, level, winRate, preferredTime }: PlayerCardProps) {
  return (
    <article className="rounded-lg border p-4">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-slate-600">Level: {level}</p>
      <p className="text-sm text-slate-600">Win Rate: {winRate}%</p>
      <p className="text-sm text-slate-600">Preferensi: {preferredTime}</p>
    </article>
  );
}
