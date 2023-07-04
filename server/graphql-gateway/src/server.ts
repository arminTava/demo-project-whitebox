import { createServer, Server } from "http";

import { ServiceEndpointDefinition } from "@apollo/gateway";
import { useApolloFederation } from "@envelop/apollo-federation";
import { useDisableIntrospection } from "@envelop/disable-introspection";
import { createYoga } from "graphql-yoga";

import { APPURLS } from "./constants/app-urls";
import { createGateway } from "./gateway";

export const DEFAULT_PORT = 4000;

export const createServerGatewayInstance = async (
  port = DEFAULT_PORT,
  appUrls: Array<ServiceEndpointDefinition> = APPURLS
): Promise<Server> => {
  const gateway = await createGateway(appUrls);
  const yoga = createYoga({
    plugins: [
      useDisableIntrospection({
        disableIf: /* istanbul ignore next */ () =>
          process.env.NODE_ENV == "production",
      }),
      useApolloFederation({
        gateway,
      }),
    ],
  });
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const server = createServer(yoga);
  const waitForServer = new Promise<void>((res, rej) => {
    server.once("error", rej);
    server.once("listening", res);
  });
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });

  await waitForServer;
  return server;
};
