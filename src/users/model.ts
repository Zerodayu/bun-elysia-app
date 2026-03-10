import { t, Static } from "elysia";
// Schema definitions
export const userModel = {
  getUserParams: t.Object({
    name: t.String({
      minLength: 1,
      maxLength: 50,
      pattern: "^[a-zA-Z0-9\\s\\-_]+$", // Alphanumeric, spaces, hyphens, underscores
      description: "User name to greet",
      examples: ["john", "alice", "user-123"],
    }),
  }),

  getUserResponse: t.Object({
    name: t.String(),
    message: t.String(),
  }),
};
// Extract TypeScript types from schemas
export type GetUserParams = Static<typeof userModel.getUserParams>;
export type GetUserResponse = Static<typeof userModel.getUserResponse>;
