import Link from "next/link";

const authFeatures = [
  "Email/Kata Sandi + Tanggal Lahir",
  "Google OAuth",
  "Reset kata sandi",
  "RBAC untuk pemain, pengelola, admin",
];

export default function AuthPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-bold">Masuk ke Padel Community</h1>
        <p className="text-sm text-slate-600">Akses semua fitur booking, matchmaking, dan loyalty.</p>
      </header>

      <section className="rounded-lg border p-4">
        <h2 className="mb-2 text-xl font-semibold">Rencana Integrasi Supabase Auth</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {authFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <button className="rounded-md bg-slate-900 px-4 py-2 text-white">Masuk dengan Email</button>
        <button className="rounded-md border px-4 py-2">Masuk dengan Google</button>
        <button className="rounded-md border px-4 py-2">Daftar Akun</button>
        <button className="rounded-md border px-4 py-2">Lupa Kata Sandi</button>
      </section>

      <footer className="text-sm text-slate-500">
        Selesai masuk? lanjut ke <Link className="underline" href="/bookings">halaman pemesanan</Link>.
      </footer>
    </main>
  );
}
