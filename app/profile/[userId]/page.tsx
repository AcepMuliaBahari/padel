interface ProfilePageProps {
  params: { userId: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <main className="mx-auto max-w-3xl space-y-3 p-6">
      <h1 className="text-2xl font-bold">Profil Pengguna: {params.userId}</h1>
      <section className="rounded-lg border p-4 text-sm">
        <p>Level: Intermediate</p>
        <p>Match dimainkan: 124</p>
        <p>Rasio menang: 58%</p>
        <p>Poin loyalitas: 1.240</p>
      </section>
    </main>
  );
}
