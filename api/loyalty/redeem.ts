export interface RedeemInput {
  userId: string;
  rewardId: string;
  pointsCost: number;
  currentBalance: number;
}

export function redeemPoints(input: RedeemInput) {
  if (input.currentBalance < input.pointsCost) {
    return {
      ok: false,
      message: "Poin tidak cukup",
      balance: input.currentBalance,
    };
  }

  return {
    ok: true,
    message: "Penukaran berhasil",
    balance: input.currentBalance - input.pointsCost,
    rewardId: input.rewardId,
  };
}
