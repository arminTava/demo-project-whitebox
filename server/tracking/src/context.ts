import { PrismaClient } from "../node_modules/.prisma/client";

export const prisma: PrismaClient = new PrismaClient();

export type GraphQLContext = {
  prisma: PrismaClient;
};

export const createContext = (): GraphQLContext => {
  return {
    prisma,
  };
};
