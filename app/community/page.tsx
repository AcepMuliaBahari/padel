import { CommunityFeed } from "../../components/community-feed";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Community Feed</h1>
      <CommunityFeed />
    </main>
  );
}
