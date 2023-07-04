import { Server } from "http";

import {
  createCoreCalender,
  createCoreCalenderTypes,
} from "../../fixtures/coreConstants";
import { prisma } from "../context";
import { createServerInstance } from "../server";

const PORT = 7003;

const serverURL = (port = PORT): string => `http://localhost:${port}/graphql`;

afterAll(async () => {
  const deleteCalendar = prisma.core_calendar.deleteMany();
  const deleteCalendarTypes = prisma.core_calendar_types.deleteMany();

  await prisma.$transaction([deleteCalendar, deleteCalendarTypes]);
});

describe("Core Calendar", () => {
  let server: Server;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should find one core calendar when inserted in prior`, async () => {
    expect.assertions(1);

    await createCoreCalender();
    await createCoreCalenderTypes();

    const query = /* GraphQL */ `
      query {
        coreCalendar(offerId: "123456p") {
          itemId
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
      data: { coreCalendar: [{ itemId: "1200034560" }] },
    });
  });

  it(`should find no core calendar when inserted in prior`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        coreCalendar(offerId: "123456pNon") {
          itemId
        }
      }
    `;

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });
    await expect(resp.json()).resolves.toEqual({
      data: { coreCalendar: [] },
    });
  });

  it(`should find no core calendar type when inserted in prior`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        coreCalendar(offerId: "123456p2") {
          itemId
        }
      }
    `;

    const resp = await fetch(serverURL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
      },
      body: query,
    });
    await expect(resp.json()).resolves.toEqual({
      data: { coreCalendar: [{ itemId: "1200034560_2" }] },
    });
  });
});
