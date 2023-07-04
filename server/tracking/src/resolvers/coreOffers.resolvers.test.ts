import { Server } from "http";

import {
  createCoreOffers,
  createCoreOffersLog,
} from "../../fixtures/coreConstants";
import { prisma } from "../context";
import { createServerInstance } from "../server";

const PORT = 7005;

const serverURL = (port = PORT): string => `http://localhost:${port}/graphql`;

afterAll(async () => {
  const deleteCoreOffers = prisma.core_offers.deleteMany();

  await prisma.$transaction([deleteCoreOffers]);
});

describe("Core Offers", () => {
  let server: Server;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should find one core offers when inserted in prior`, async () => {
    expect.assertions(1);

    await createCoreOffers();
    await createCoreOffersLog();

    const query = /* GraphQL */ `
      query {
        coreOffer(offerNumber: "1230009") {
          offerId
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
      data: { coreOffer: { offerId: "12340007" } },
    });
  });

  it(`should find no core offers when inserted in prior`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        coreOffer(offerNumber: "1230009Non") {
          offerId
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
      data: { coreOffer: null },
    });
  });
  it(`should check existence of core offer when inserted in prior`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        coreOfferExist(offerNumber: "1230009", zip: "50891") {
          offerId
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
      data: { coreOfferExist: { offerId: "12340007" } },
    });
  });
  it(`should find no Existence of core offers when inserted in prior`, async () => {
    expect.assertions(1);

    const query = /* GraphQL */ `
      query {
        coreOfferExist(offerNumber: "1230009Non", zip: "50891") {
          offerId
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
      data: { coreOfferExist: null },
    });
  });
});
