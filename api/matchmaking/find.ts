export interface MatchmakingRequest {
  userId: string;
  skillLevel: number;
  preferredSlot: string;
}

export interface MatchCandidate {
  userId: string;
  displayName: string;
  score: number;
}

export function findPlayers(request: MatchmakingRequest): MatchCandidate[] {
  const pool: MatchCandidate[] = [
    { userId: "u_11", displayName: "Ari", score: 92 },
    { userId: "u_12", displayName: "Mira", score: 87 },
    { userId: "u_13", displayName: "Yuda", score: 81 },
  ];

  return pool
    .filter((candidate) => candidate.userId !== request.userId)
    .sort((a, b) => b.score - a.score);
}
