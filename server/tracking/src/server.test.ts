import type { Server } from "http";
import type { AddressInfo } from "net";

import { createServerInstance } from "./server";

const defaultPort = 7001;
const graphqlURl = (port = defaultPort): string =>
  `http://localhost:${port}/graphql`;

describe("Create Yoga Server Instance", () => {
  let server: Server;

  afterAll(async () => {
    console.log("after all");
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
  });

  it(`should result 200 when server started on ${graphqlURl()}`, async () => {
    expect.assertions(2);
    server = await createServerInstance(defaultPort);
    const responseSuccess = await fetch(graphqlURl());
    expect(responseSuccess.status).toEqual(200);

    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
    await expect(fetch(graphqlURl())).rejects.toThrowError("fetch failed");
  }, 10000);

  it(`should start in specific port when given`, async () => {
    expect.assertions(3);
    const port = 7002;
    server = await createServerInstance(port);
    const address = server.address();
    expect(address).toMatchObject({
      port,
    });

    expect((address as AddressInfo).port).toEqual(port);

    const responseSuccess = await fetch(graphqlURl(port));

    expect(responseSuccess.status).toEqual(200);
  });
});
