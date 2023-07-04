import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import { useState } from "react";

import { CoreOfferExistQueryQuery } from "gql/graphql";
import { coreOfferExistQueryDocument } from "graphql-requests";

import { OfferState } from "./offerState";

type OfferExist = {
  offerState: OfferState;
  setOfferState: (input: OfferState) => void;
  fetchOffer: () => Promise<CoreOfferExistQueryQuery | unknown>;
};

// Test integration coming: Test...
export function useOfferExist(searchTerm: string, zip: string): OfferExist {
  const router = useRouter();
  const [offerState, setOfferState] = useState<OfferState>(OfferState.Initial);
  function onSuccess(data: CoreOfferExistQueryQuery) {
    if (!data.coreOfferExist || !zip || !searchTerm) {
      setOfferState(OfferState.Error);
      return;
    }
    setOfferState(OfferState.Success);
    router
      .push({
        pathname: "/tracking",
        query: {
          offerNumber: searchTerm,
          memberId: data.coreOfferExist.memberId,
          memberIdMatched: data.coreOfferExist.memberIdMatched,
          userId: data.coreOfferExist.responsibleMatchedUserId,
          userIdClient: data.coreOfferExist.responsibleUserId,
          offerId: data.coreOfferExist.offerId,
        },
      })
      .catch(() => console.log("error within routing to second page"));
  }
  const { refetch } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["offers", zip, searchTerm],
    queryFn: async () => {
      const gData = await request(
        process.env.NEXT_PUBLIC_SERVER_URL ?? "",
        coreOfferExistQueryDocument,
        {
          offerNumber: searchTerm,
          zip: zip,
        }
      );
      return gData;
    },
    enabled: false,
    onSuccess: (data) => onSuccess(data),
  });

  return {
    offerState: offerState,
    setOfferState: setOfferState,
    fetchOffer: refetch,
  };
}
