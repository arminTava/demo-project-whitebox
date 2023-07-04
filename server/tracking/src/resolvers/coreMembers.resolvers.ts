import { DateTimeResolver } from "graphql-scalars";

import { Resolvers } from "../generated/graphql";

export const coreMemberResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    coreMember: async (parent, { memberId }, { prisma }) => {
      const where = { memberId: memberId };
      return await prisma.core_members.findFirst({
        where: where,
      });
    },
  },
};
