import * as dotenv from "dotenv";
import { DateTimeResolver } from "graphql-scalars";
import { ofetch } from "ofetch";

import { Resolvers } from "../generated/graphql";
import { validateToken } from "../helpers/accessToken";

dotenv.config();

export const searchTicketResolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    searchTicket: async (parent, { orderNumber }, { authUser }) => {
      if (!authUser) throw new Error("Unauthenticated!");
      const token = await validateToken();
      /* istanbul ignore next */
      return await ofetch(process.env.ZOHO_TICKET_URL ?? "", {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          orgId: process.env.ORG_ID ?? "",
        },
        query: {
          customField1: `cf_ganze_zahl_1:${orderNumber ?? ""}`,
        },
      });
    },
  },
};
