import Link from "next/link";

const upcomingBookings = [
  { id: "bk_101", venue: "Padel Arena Selatan", court: "Court A", datetime: "2026-02-20 19:00" },
  { id: "bk_102", venue: "Padel Hub Kemang", court: "Court C", datetime: "2026-02-22 08:00" },
];

export default function BookingsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-bold">Pemesanan Saya</h1>
        <p className="text-sm text-slate-600">Lihat, ubah, atau batalkan reservasi lapangan Anda.</p>
      </header>

      <div className="space-y-3">
        {upcomingBookings.map((booking) => (
          <article key={booking.id} className="rounded-lg border p-4">
            <p className="font-semibold">{booking.venue}</p>
            <p className="text-sm text-slate-600">{booking.court} • {booking.datetime}</p>
            <Link className="mt-2 inline-block text-sm underline" href={`/bookings/${booking.id}`}>
              Lihat detail
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
