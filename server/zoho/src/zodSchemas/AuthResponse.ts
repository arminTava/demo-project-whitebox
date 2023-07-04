import { z } from "zod";

export const AuthResponseSchema = z.object({
  data: z.object({
    authUser: z.boolean(),
  }),
});
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
