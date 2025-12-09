export type UserRole = "PROPERTY_OWNER" | "GOVERNMENT_OFFICIAL" | "ADMIN";

export type User = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
};
