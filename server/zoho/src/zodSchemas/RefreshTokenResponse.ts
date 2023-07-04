import { z } from "zod";

export const RefreshTokenResponse = z.object({
  access_token: z.string(),
  scope: z.string(),
  api_domain: z.string().url(),
  token_type: z.string().includes("Bearer"),
  expires_in: z.number().positive(),
});
