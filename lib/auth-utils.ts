export type UserRole = "player" | "venue_manager" | "admin";

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  dateOfBirth?: string;
  role: UserRole;
}

export const roleLabels: Record<UserRole, string> = {
  player: "Pemain",
  venue_manager: "Pengelola Tempat",
  admin: "Admin",
};

export const hasRequiredRole = (userRole: UserRole, allowedRoles: UserRole[]) => {
  return allowedRoles.includes(userRole);
};

export const getAuthRedirectByRole = (role: UserRole) => {
  switch (role) {
    case "venue_manager":
      return "/dashboard/venue-manager";
    case "admin":
      return "/admin";
    case "player":
    default:
      return "/bookings";
  }
};

export const getMockSession = (): AuthUser => ({
  id: "user_001",
  email: "player@padel.id",
  fullName: "Raka Putra",
  dateOfBirth: "1996-08-20",
  role: "player",
});
