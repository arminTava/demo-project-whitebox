import type { Server } from "http";
import type { AddressInfo } from "net";

import { ServiceEndpointDefinition } from "@apollo/gateway";

import { createServerInstance } from "../../tracking/src/server";

import { createServerGatewayInstance } from "./server";

const defaultPort = 2500;
const graphqlURl = (port = defaultPort): string =>
  `http://localhost:${port}/graphql`;

describe("Create Yoga Server Instance", () => {
  jest.setTimeout(30000);
  let server: Server;
  let serverService: Server;
  let appUrls: Array<ServiceEndpointDefinition>;

  afterAll(async () => {
    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });
    const waitForServer2 = new Promise<void>((res) => {
      serverService.once("close", res);
    });

    server.close();
    serverService.close();
    await waitForServer;
    await waitForServer2;
  });

  it(`should result 200 when server started on ${graphqlURl()}`, async () => {
    expect.assertions(2);

    // here tracking server starten und die url an serverGatewy
    const portService = 2505;
    serverService = await createServerInstance(portService);
    appUrls = [
      { name: "tracking", url: `http://localhost:${portService}/graphql` },
      { name: "test", url: undefined },
    ];
    server = await createServerGatewayInstance(defaultPort, appUrls);
    const responseSuccess = await fetch(graphqlURl());

    expect(responseSuccess.status).toEqual(200);

    const waitForServer = new Promise<void>((res) => {
      server.once("close", res);
    });

    server.close();
    await waitForServer;
    await expect(fetch(graphqlURl())).rejects.toThrowError("fetch failed");
  });

  it(`should start in specific port when given`, async () => {
    expect.assertions(3);
    const port = 2506;
    server = await createServerGatewayInstance(port, appUrls);
    const address = server.address();
    expect(address).toMatchObject({
      port,
    });

    expect((address as AddressInfo).port).toEqual(port);

    const responseSuccess = await fetch(graphqlURl(port));

    expect(responseSuccess.status).toEqual(200);
  });

  it("should reject connection when no appurls", async () => {
    expect.assertions(1);
    // const server1 = await createServerGatewayInstance();
    // console.log(server1);
    await expect(createServerGatewayInstance()).rejects.toThrowError();
  });
});
