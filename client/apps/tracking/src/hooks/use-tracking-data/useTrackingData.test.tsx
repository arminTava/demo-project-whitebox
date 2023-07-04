import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { graphql } from "msw";
import { setupServer } from "msw/node";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { useTrackingData } from "./useTrackingData";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const server = setupServer(
  graphql.query("coreOfferQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        coreOffer: {
          offerNumber: "1",
        },
      })
    );
  }),
  graphql.query("coreSubuserQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        coreSubUser: {
          test: "test",
        },
      })
    );
  }),
  graphql.query("coreMemberQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        coreMember: {
          test: "test",
        },
      })
    );
  }),
  graphql.query("coreCalendarQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        coreCalendar: "test",
      })
    );
  })
);

describe("useTrackingData", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  beforeAll(() => server.listen());
  beforeEach(() => {
    queryClient.clear();
    (useRouter as jest.Mock).mockImplementation(() => {
      return {
        query: {
          offerNumber: "1",
          memberId: "2",
          memberIdMatched: "3",
          userId: "4",
          userIdClient: "5",
          offerId: "6",
        },
      };
    });
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("should getTrackingData when called", async () => {
    expect.assertions(1);

    const { result } = renderHook(() => useTrackingData(), {
      wrapper,
    });

    await waitFor(() =>
      result.current.isLoading ? Promise.reject() : Promise.resolve()
    );

    expect(result.current).toEqual({
      dataOffer: { offerNumber: "1" },
      dataSubuser: { test: "test" },
      dataSubuserClient: { test: "test" },
      dataMember: { test: "test" },
      dataMemberMatched: { test: "test" },
      dataCalendar: "test",
      isLoading: false,
    });
  });
  it("should skip when no userId", async () => {
    expect.assertions(1);

    (useRouter as jest.Mock).mockImplementation(() => {
      return {
        query: {
          offerNumber: "1",
          memberId: "2",
          memberIdMatched: null,
          userId: null,
          userIdClient: "5",
          offerId: "6",
        },
      };
    });

    const { result } = renderHook(() => useTrackingData(), {
      wrapper,
    });

    await waitFor(() =>
      result.current.isLoading ? Promise.reject() : Promise.resolve()
    );

    expect(result.current).toEqual({
      dataOffer: { offerNumber: "1" },
      dataSubuser: undefined,
      dataSubuserClient: { test: "test" },
      dataMember: { test: "test" },
      dataMemberMatched: undefined,
      dataCalendar: "test",
      isLoading: false,
    });
  });
  describe("no process.env.NEXT_PUBLIC_SERVER_URL", () => {
    const env = process.env;

    beforeAll(() => {
      delete process.env.NEXT_PUBLIC_SERVER_URL;
    });
    afterAll(() => (process.env = env));
    it("should fetch empty string when no process.env is defined", async () => {
      expect.assertions(1);

      console.error = jest.fn();

      renderHook(() => useTrackingData(), {
        wrapper,
      });

      await waitFor(() =>
        queryClient.isFetching() === 0 ? Promise.resolve() : Promise.reject()
      );
      expect(console.error).toHaveBeenCalledWith(
        new TypeError("Only absolute URLs are supported")
      );
    });
  });
});
