import { Server } from "http";

import { createCoreSubUsers } from "../../fixtures/coreConstants";
import { prisma } from "../context";
import { createServerInstance } from "../server";

const PORT = 7006;

const serverURL = (port = PORT): string => `http://localhost:${port}/graphql`;

afterAll(async () => {
  const deleteCoreOffers = prisma.core_offers.deleteMany();

  await prisma.$transaction([deleteCoreOffers]);
});

describe("Core Subusers", () => {
  let server: Server;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should find one core subusers when inserted in prior`, async () => {
    expect.assertions(2);

    await createCoreSubUsers();

    const query1 = /* GraphQL */ `
      query {
        coreSubUser(memberId: "1230009", userId: "123x45") {
          email
        }
      }
    `;
    const query2 = /* GraphQL */ `
      query {
        coreSubUser(memberId: "12340007", userId: "") {
          email
        }
      }
    `;
    server = await createServerInstance(PORT);

    const resp1 = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query1,
    });
    const resp2 = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query2,
    });
    await expect(resp1.json()).resolves.toEqual({
      data: { coreSubUser: { email: "me@installion.eu" } },
    });
    await expect(resp2.json()).resolves.toEqual({
      data: { coreSubUser: { email: "me@installion.eu" } },
    });
  });
});
