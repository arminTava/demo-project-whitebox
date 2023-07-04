import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useRouter } from "next/router";

import {
  coreCalendarQueryDocument,
  coreMemberQueryDocument,
  coreOfferQueryDocument,
  coreSubuserQueryDocument,
} from "graphql-requests";

export function useTrackingData() {
  const router = useRouter();
  const {
    offerNumber,
    memberId,
    memberIdMatched,
    userId,
    userIdClient,
    offerId,
  } = router.query;
  const { data: dataOffer, isLoading: isLoadingOffer } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["offers", offerNumber],
    queryFn: async () => {
      return (
        await request(
          process.env.NEXT_PUBLIC_SERVER_URL ?? "",
          coreOfferQueryDocument,
          {
            offerNumber: offerNumber as string,
          }
        )
      ).coreOffer;
    },
    enabled: !!offerNumber,
  });
  const { data: dataSubuser, isLoading: isLoadingSubuser } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["subuser", memberIdMatched, userId],
    queryFn: async () =>
      (
        await request(
          process.env.NEXT_PUBLIC_SERVER_URL ?? "",
          coreSubuserQueryDocument,
          {
            userId: userId as string,
            memberId: memberIdMatched as string,
          }
        )
      ).coreSubUser,
    enabled: !!userId || !!memberIdMatched,
  });
  const { data: dataSubuserClient, isLoading: isLoadingSubuserClient } =
    useQuery({
      // eslint-disable-next-line @tanstack/query/exhaustive-deps
      queryKey: ["subuser", userIdClient],
      queryFn: async () =>
        (
          await request(
            process.env.NEXT_PUBLIC_SERVER_URL ?? "",
            coreSubuserQueryDocument,
            {
              userId: userIdClient as string,
              memberId: "",
            }
          )
        ).coreSubUser,
      enabled: !!userIdClient,
    });
  const { data: dataMemberMatched, isLoading: isLoadingMemberMatched } =
    useQuery({
      // eslint-disable-next-line @tanstack/query/exhaustive-deps
      queryKey: ["member", memberIdMatched],
      queryFn: async () =>
        (
          await request(
            process.env.NEXT_PUBLIC_SERVER_URL ?? "",
            coreMemberQueryDocument,
            {
              memberId: memberIdMatched as string,
            }
          )
        ).coreMember,
      enabled: !!memberIdMatched,
    });
  const { data: dataMember, isLoading: isLoadingMember } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["member", memberId],
    queryFn: async () =>
      (
        await request(
          process.env.NEXT_PUBLIC_SERVER_URL ?? "",
          coreMemberQueryDocument,
          {
            memberId: memberId as string,
          }
        )
      ).coreMember,
    enabled: !!memberId,
  });
  const { data: dataCalendar, isLoading: isLoadingCalendar } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["calendar", offerId],
    queryFn: async () =>
      (
        await request(
          process.env.NEXT_PUBLIC_SERVER_URL ?? "",
          coreCalendarQueryDocument,
          {
            offerId: offerId as string,
          }
        )
      ).coreCalendar,
    enabled: !!offerId,
  });
  const isLoading =
    isLoadingOffer &&
    isLoadingCalendar &&
    isLoadingMember &&
    isLoadingMemberMatched &&
    isLoadingSubuser &&
    isLoadingSubuserClient;
  return {
    dataOffer: dataOffer,
    dataSubuser: dataSubuser,
    dataSubuserClient: dataSubuserClient,
    dataMember: dataMember,
    dataMemberMatched: dataMemberMatched,
    dataCalendar: dataCalendar,
    isLoading: isLoading,
  };
}
