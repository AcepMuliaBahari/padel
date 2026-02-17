const queue = [
  { id: "mq_1", status: "Mencari lawan", eta: "~2 menit" },
  { id: "mq_2", status: "Menunggu konfirmasi", eta: "~30 detik" },
];

export default function MatchmakingQueuePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Antrian Pertandingan Aktif</h1>
      {queue.map((item) => (
        <article key={item.id} className="rounded-lg border p-4 text-sm">
          <p className="font-semibold">Request {item.id}</p>
          <p>Status: {item.status}</p>
          <p>ETA: {item.eta}</p>
        </article>
      ))}
    </main>
  );
}
