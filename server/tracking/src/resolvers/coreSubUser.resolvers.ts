import { DateTimeResolver } from "graphql-scalars";

import { Resolvers } from "../generated/graphql";

export const coreSubUserResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    coreSubUser: async (parent, { userId, memberId }, { prisma }) => {
      const where = userId
        ? { userId: userId }
        : { AND: [{ memberId: memberId }, { isPrincipal: true }] };
      return await prisma.core_sub_users.findFirst({
        where: where,
      });
    },
  },
};
