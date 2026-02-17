import { CourtAvailabilityManager } from "../../../components/court-availability-manager";
import { VenueRevenueChart } from "../../../components/venue-revenue-chart";

export default function VenueManagerDashboardPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-bold">Dashboard Pengelola Tempat</h1>
        <p className="text-sm text-slate-600">Kelola lapangan, pendapatan, ulasan, dan pengaturan fasilitas.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <CourtAvailabilityManager />
        <VenueRevenueChart />
      </section>

      <section className="rounded-lg border p-4 text-sm text-slate-600">
        Modul lanjutan: manajemen booking, ulasan pelanggan, dan otomasi harga dinamis.
      </section>
    </main>
  );
}
