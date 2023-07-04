import { YogaInitialContext } from "graphql-yoga";

import { authenticateUser } from "./helpers/authUser";

export type GraphQLContext = {
  authUser: boolean;
};

export async function createContext(
  initialContext: YogaInitialContext
): Promise<GraphQLContext> {
  return {
    authUser: await authenticateUser(initialContext.request),
  };
}
