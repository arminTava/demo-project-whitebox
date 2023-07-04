import { ofetch } from "ofetch";

import { AuthResponse, AuthResponseSchema } from "../zodSchemas/AuthResponse";

export async function authenticateUser(request: Request) {
  const query = /* GraphQL */ `
    query {
      authUser
    }
  `;
  const resp = await ofetch<AuthResponse>(process.env.AUTH_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
      authorization: request.headers.get("authorization") ?? "",
    },
    body: query,
  });
  const result = AuthResponseSchema.parse(resp);
  return result.data.authUser;
}
