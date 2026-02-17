const posts = [
  { author: "Sinta", content: "Menang 6-3 di liga weekend!", tag: "Prestasi" },
  { author: "Reno", content: "Cari partner sparring level intermediate", tag: "Diskusi" },
];

export function CommunityFeed() {
  return (
    <section className="space-y-3">
      {posts.map((post, index) => (
        <article key={index} className="rounded-lg border p-4">
          <p className="text-sm font-semibold">{post.author}</p>
          <p className="text-sm">{post.content}</p>
          <span className="mt-2 inline-block rounded bg-slate-100 px-2 py-1 text-xs">{post.tag}</span>
        </article>
      ))}
    </section>
  );
}
