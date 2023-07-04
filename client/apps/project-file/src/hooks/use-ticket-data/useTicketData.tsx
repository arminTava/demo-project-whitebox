/* eslint-disable import/order */
import { useQuery } from "@tanstack/react-query";
import { getCookies, setCookie } from "cookies-next";
import { SearchTicketQueryDocument } from "gql/graphql";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useTicketData() {
  const router = useRouter();
  const { orderNumber, userId, sessionId } = router.query;
  const { userId: userIdCookie, sessionId: sessionIdCookie } = getCookies();
  const [userIdState, setUserIdState] = useState("");
  const [sessionIdState, setSessionIdState] = useState("");
  const [parameterComplete, setParameterComplete] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    if (!userId || !sessionId) {
      if (!userIdCookie || !sessionIdCookie) {
        setParameterComplete(false);
        return;
      }
      setUserIdState(userIdCookie);
      setSessionIdState(sessionIdCookie);
      return;
    }
    setCookie("userId", userId, { maxAge: 60 * 6 * 24 });
    setCookie("sessionId", sessionId, { maxAge: 60 * 6 * 24 });
    setUserIdState(userId as string);
    setSessionIdState(sessionId as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderNumber, userId, sessionId]);

  const { data, isLoading, isError } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["tickets", orderNumber],
    queryFn: async () => {
      return await request({
        url: process.env.NEXT_PUBLIC_SERVER_URL ?? "",
        document: SearchTicketQueryDocument,
        variables: {
          orderNumber: orderNumber as string,
        },
        requestHeaders: {
          authorization: `${userIdState}_${sessionIdState}`,
        },
      });
    },
    enabled: !!orderNumber && !!userIdState && !!sessionIdState,
  });

  return {
    dataTicket: data,
    isLoading: isLoading,
    queryParameterComplete: parameterComplete,
    isError: isError,
  };
}
