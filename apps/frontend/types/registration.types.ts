export type Registration = {
  id: string;
  propertyId: string;
  status: "pending" | "in-review" | "approved";
};
