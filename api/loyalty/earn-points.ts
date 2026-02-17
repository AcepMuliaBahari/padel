export interface EarnPointsInput {
  userId: string;
  source: "booking" | "match" | "referral";
  amount: number;
}

export function earnPoints({ userId, source, amount }: EarnPointsInput) {
  return {
    userId,
    source,
    amount,
    transactionType: "credit" as const,
    timestamp: new Date().toISOString(),
  };
}
