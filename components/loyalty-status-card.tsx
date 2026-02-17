interface LoyaltyStatusCardProps {
  tier: "Perunggu" | "Perak" | "Emas" | "Platinum";
  currentPoints: number;
  pointsToNextTier: number;
}

export function LoyaltyStatusCard({ tier, currentPoints, pointsToNextTier }: LoyaltyStatusCardProps) {
  return (
    <section className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">Status Loyalitas</h2>
      <p className="text-sm">Tier saat ini: {tier}</p>
      <p className="text-sm">Poin: {currentPoints}</p>
      <p className="text-sm">Ke tier berikutnya: {pointsToNextTier} poin</p>
    </section>
  );
}
