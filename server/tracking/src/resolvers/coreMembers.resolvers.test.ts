import { Server } from "http";

import { createCoreMember } from "../../fixtures/coreConstants";
import { prisma } from "../context";
import { createServerInstance } from "../server";

const PORT = 7004;

const serverURL = (port = PORT): string => `http://localhost:${port}/graphql`;

afterAll(async () => {
  const deleteMembers = prisma.core_members.deleteMany();

  await prisma.$transaction([deleteMembers]);
});

describe("Core member", () => {
  let server: Server;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should find one core member when inserted in prior`, async () => {
    expect.assertions(1);

    await createCoreMember();

    const query = /* GraphQL */ `
      query {
        coreMember(memberId: "1234567") {
          companyName
        }
      }
    `;
    server = await createServerInstance(PORT);

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });
    await expect(resp.json()).resolves.toEqual({
      data: { coreMember: { companyName: "installion" } },
    });
  });
});
