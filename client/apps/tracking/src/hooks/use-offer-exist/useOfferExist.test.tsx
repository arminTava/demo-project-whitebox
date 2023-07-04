import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { graphql } from "msw";
import { setupServer } from "msw/node";
import { ReactNode } from "react";

import { useOfferExist } from "./useOfferExist";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => {
    return {
      push: mockPush.mockImplementation(() => Promise.resolve()),
    };
  },
}));

const server = setupServer(
  graphql.query("coreOfferExistQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        coreOfferExist: {
          offerId: "test",
          memberId: "test",
          memberIdMatched: "test",
          responsibleMatchedUserId: "test",
          responsibleUserId: "test",
        },
      })
    );
  })
);

describe("useOfferExist", () => {
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
  beforeEach(() => queryClient.clear());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("should getOffer when called", async () => {
    expect.assertions(3);

    const { result } = renderHook(() => useOfferExist("12345678", "123"), {
      wrapper,
    });

    await result.current.fetchOffer();

    await waitFor(() => {
      return result.current.offerState !== 0
        ? Promise.resolve()
        : Promise.reject();
    });

    expect(result.current.offerState).toEqual(1);
    expect(result.current.setOfferState).toBeInstanceOf(Function);
    expect(result.current.fetchOffer).toBeInstanceOf(Function);
  });
  it("should log error when push was unsuccessful", async () => {
    expect.assertions(1);
    console.log = jest.fn();

    mockPush.mockImplementationOnce(() => Promise.reject());

    const { result } = renderHook(() => useOfferExist("12345678", "123"), {
      wrapper,
    });

    await result.current.fetchOffer();

    await waitFor(() => {
      return result.current.offerState !== 0
        ? Promise.resolve()
        : Promise.reject();
    });

    expect(console.log).toHaveBeenCalledWith(
      "error within routing to second page"
    );
  });
  it("should set offerstate error when data is missing", async () => {
    expect.assertions(1);

    const { result } = renderHook(() => useOfferExist("12345678", ""), {
      wrapper,
    });

    await result.current.fetchOffer();

    await waitFor(() => {
      return result.current.offerState !== 0
        ? Promise.resolve()
        : Promise.reject();
    });

    expect(result.current.offerState).toEqual(2);
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

      const { result } = renderHook(() => useOfferExist("12345678", ""), {
        wrapper,
      });

      await result.current.fetchOffer();
      expect(console.error).toHaveBeenCalledWith(
        new TypeError("Only absolute URLs are supported")
      );
    });
  });
});
