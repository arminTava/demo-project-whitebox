import { DateTimeResolver } from "graphql-scalars";

import { Resolvers } from "../generated/graphql";

export const coreOfferResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    coreOffer: async (parent, { offerNumber }, { prisma }) => {
      const coreOffers = await prisma.core_offers.findFirst({
        where: {
          offerNumber: offerNumber,
        },
      });
      if (!coreOffers) return coreOffers;
      const coreOffersLog = await prisma.core_offers_log.findMany({
        where: {
          offerId: coreOffers.offerId,
        },
      });
      return { ...coreOffers, coreOfferLog: coreOffersLog };
    },
    coreOfferExist: async (parent, { offerNumber, zip }, { prisma }) => {
      const coreOffers = await prisma.core_offers.findFirst({
        where: {
          AND: [
            {
              offerNumber: offerNumber,
            },
            {
              zip: zip,
            },
          ],
        },
      });
      if (!coreOffers) return coreOffers;
      return { ...coreOffers, coreOfferLog: null };
    },
  },
};
