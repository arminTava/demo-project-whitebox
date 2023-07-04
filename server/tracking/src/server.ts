import { createServer } from "http";
import type { Server } from "http";

import { useDisableIntrospection } from "@envelop/disable-introspection";
import { createYoga } from "graphql-yoga";

import { createContext } from "./context";
import { schema } from "./schema";

export const DEFAULT_PORT = 4002;

export const createServerInstance = async (
  /* istanbul ignore next */
  port = DEFAULT_PORT
): Promise<Server> => {
  const yoga = createYoga({
    schema,
    context: createContext,
    plugins: [useDisableIntrospection()],
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
