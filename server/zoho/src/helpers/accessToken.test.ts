import { ofetch } from "ofetch";

import { accessToken, validateToken } from "./accessToken";

jest.mock("ofetch");
const mockedOfetch = jest.mocked(ofetch);

describe("accessToken", () => {
  it("should return token when no token is present, token present or token expired", async () => {
    expect.assertions(7);
    // no initial token
    expect(accessToken).toBe(undefined);

    mockedOfetch.mockResolvedValueOnce({
      access_token: "first",
      scope: "test",
      api_domain: "https://www.test.com",
      token_type: "Bearer",
      expires_in: 3600,
    });
    const token = await validateToken();

    expect(token).toBeDefined();
    expect(token).toEqual("first");

    // set expiration date to past
    accessToken.expire = new Date(Date.now() - 10);

    // new token should be generated
    mockedOfetch.mockResolvedValueOnce({
      access_token: "second",
      scope: "test",
      api_domain: "https://www.test.com",
      token_type: "Bearer",
      expires_in: 3600,
    });
    const token2 = await validateToken();

    expect(token2).toBeDefined();
    expect(token2).toEqual("second");

    // no new token should be generated
    const token3 = await validateToken();

    expect(token3).toBeDefined();
    expect(token3).toEqual("second");
  });
});
