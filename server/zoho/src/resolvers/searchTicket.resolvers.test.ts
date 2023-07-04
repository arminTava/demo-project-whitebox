import { Server } from "http";

import { ofetch } from "ofetch";

import { validateToken } from "../helpers/accessToken";
import { createServerInstance } from "../server";

const PORT = 7009;

const serverURL = (port = PORT): string => `http://localhost:${port}/graphql`;
let authReturn = true;
jest.mock("../helpers/accessToken");
jest.mocked(validateToken).mockReturnValue(Promise.resolve("acces_token"));
jest.mock("../helpers/authUser", () => ({
  authenticateUser: jest.fn(() => authReturn),
}));

jest.mock("ofetch");
const mockedOfetch = jest.mocked(ofetch);

describe("Search Ticket", () => {
  let server: Server;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should find one ticket when querying`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        searchTicket(orderNumber: "111") {
          data {
            subject
          }
        }
      }
    `;

    server = await createServerInstance(PORT);

    mockedOfetch.mockResolvedValueOnce({
      data: [
        {
          subject: "???",
        },
      ],
    });

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });

    await expect(resp.json()).resolves.toEqual({
      data: {
        searchTicket: {
          data: [
            {
              subject: "???",
            },
          ],
        },
      },
    });
  });
  it(`should find no ticket when no ordernumber`, async () => {
    expect.assertions(1);

    delete process.env.ORG_ID;

    const query = /* GraphQL */ `
      query {
        searchTicket(orderNumber: null) {
          data {
            subject
          }
        }
      }
    `;

    mockedOfetch.mockResolvedValueOnce({
      data: null,
    });

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });

    await expect(resp.json()).resolves.toEqual({
      data: {
        searchTicket: {
          data: null,
        },
      },
    });
  });
  it("should return error when auth false", async () => {
    expect.assertions(1);
    const query = /* GraphQL */ `
      query {
        searchTicket(orderNumber: "111") {
          data {
            subject
          }
        }
      }
    `;
    authReturn = false;

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });

    await expect(resp.json()).resolves.toEqual(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        errors: expect.arrayContaining([]),
      })
    );
  });
});
