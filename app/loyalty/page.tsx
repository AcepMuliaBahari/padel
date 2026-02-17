import { LoyaltyStatusCard } from "../../components/loyalty-status-card";

export default function LoyaltyDashboardPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Dashboard Loyalitas</h1>
      <LoyaltyStatusCard tier="Perak" currentPoints={1240} pointsToNextTier={260} />
    </main>
  );
}
