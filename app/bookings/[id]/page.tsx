interface BookingDetailPageProps {
  params: { id: string };
}

export default function BookingDetailPage({ params }: BookingDetailPageProps) {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Detail Pemesanan {params.id}</h1>
      <section className="rounded-lg border p-4 text-sm">
        <p>Status: Terkonfirmasi</p>
        <p>Venue: Padel Arena Selatan</p>
        <p>Lapangan: Court A</p>
        <p>Slot: 19:00 - 20:00</p>
      </section>
      <div className="flex gap-2">
        <button className="rounded-md border px-3 py-2">Ubah Jadwal</button>
        <button className="rounded-md bg-rose-600 px-3 py-2 text-white">Batalkan</button>
      </div>
    </main>
  );
}
