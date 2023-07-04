import * as dotenv from "dotenv";
import { ofetch } from "ofetch";

import { RefreshTokenResponse } from "../zodSchemas/RefreshTokenResponse";

dotenv.config();

export type AccessToken = {
  token: string;
  expire: Date;
};

export let accessToken: AccessToken;

export async function validateToken() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!accessToken) {
    accessToken = await refreshToken();
    return accessToken.token;
  }

  const expired = accessToken.expire < new Date();
  if (expired) {
    accessToken = await refreshToken();
    return accessToken.token;
  } else {
    return accessToken.token;
  }
}

async function refreshToken(): Promise<AccessToken> {
  /* istanbul ignore next */
  const response: JSON = await ofetch(process.env.ZOHO_TOKEN_URL ?? "", {
    method: "POST",
    query: {
      refresh_token: process.env.REFRESH_TOKEN,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      scope: "Desk.search.READ,Desk.tickets.READ",
      grant_type: "refresh_token",
    },
  });

  const result = RefreshTokenResponse.parse(response);

  const expireTime = new Date(Date.now() + result.expires_in * 1000);
  return {
    token: result.access_token,
    expire: expireTime,
  };
}
