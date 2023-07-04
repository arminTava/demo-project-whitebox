import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { getCookies } from "cookies-next";
import { graphql } from "msw";
import { setupServer } from "msw/node";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { useTicketData } from "./useTicketData";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
jest.mock("cookies-next", () => ({
  getCookies: jest.fn(),
  setCookie: jest.fn(),
}));

const server = setupServer(
  graphql.query("searchTicketQuery", (req, res, ctx) => {
    return res(
      ctx.data({
        searchTicket: {
          data: [
            {
              subject: "Maurer_Gehrden_Enercity_Funktionalität:PV-Anlage",
              createdTime: "2023-03-10T12:51:59.000Z",
              status: "In Bearbeitung",
              ticketNumber: "345",
            },
          ],
        },
      })
    );
  })
);

describe("useTicketData", () => {
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
          orderNumber: "1",
          userId: "jdfdfj",
          sessionId: "djkfdkfj",
        },
        isReady: true,
      };
    });
    (getCookies as jest.Mock).mockImplementation(() => {
      return {
        userId: "dfdf",
        sessionId: "dfdf",
      };
    });
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("should getTicketData when called", async () => {
    expect.assertions(1);

    const { result } = renderHook(() => useTicketData(), {
      wrapper,
    });
    await waitFor(() =>
      result.current.isLoading ? Promise.reject() : Promise.resolve()
    );

    expect(result.current).toEqual({
      // dataTicket: undefined,
      dataTicket: {
        searchTicket: {
          data: [
            {
              createdTime: "2023-03-10T12:51:59.000Z",
              status: "In Bearbeitung",
              subject: "Maurer_Gehrden_Enercity_Funktionalität:PV-Anlage",
              ticketNumber: "345",
            },
          ],
        },
      },
      isError: false,
      isLoading: false,
      queryParameterComplete: true,
    });
  });

  it("should not getTicketData when router is not ready", () => {
    expect.assertions(1);

    (useRouter as jest.Mock).mockImplementationOnce(() => {
      return {
        query: {},
        isReady: false,
      };
    });
    const { result } = renderHook(() => useTicketData(), {
      wrapper,
    });

    expect(result.current).toEqual({
      dataTicket: undefined,
      isError: false,
      isLoading: true,
      queryParameterComplete: true,
    });
  });

  it("should getTicketData when called without auth in query", async () => {
    expect.assertions(1);
    (useRouter as jest.Mock).mockImplementationOnce(() => {
      return {
        query: {
          orderNumber: "1",
          userId: null,
          sessionId: null,
        },
        isReady: true,
      };
    });

    (getCookies as jest.Mock).mockImplementationOnce(() => {
      return {
        userId: "dfdf",
        sessionId: "dfdf",
      };
    });

    const { result } = renderHook(() => useTicketData(), {
      wrapper,
    });
    await waitFor(() =>
      result.current.isLoading ? Promise.reject() : Promise.resolve()
    );

    expect(result.current).toEqual({
      dataTicket: {
        searchTicket: {
          data: [
            {
              createdTime: "2023-03-10T12:51:59.000Z",
              status: "In Bearbeitung",
              subject: "Maurer_Gehrden_Enercity_Funktionalität:PV-Anlage",
              ticketNumber: "345",
            },
          ],
        },
      },
      isError: false,
      isLoading: false,
      queryParameterComplete: true,
    });
  });

  it("should not getTicketData when called without cookies and auth in query", () => {
    expect.assertions(1);
    (useRouter as jest.Mock).mockImplementationOnce(() => {
      return {
        query: {
          orderNumber: "1",
          userId: null,
          sessionId: "dfdf",
        },
        isReady: true,
      };
    });

    (getCookies as jest.Mock).mockImplementationOnce(() => {
      return {
        userId: null,
        sessionId: null,
      };
    });

    const { result } = renderHook(() => useTicketData(), {
      wrapper,
    });

    expect(result.current).toEqual({
      dataTicket: undefined,
      isError: false,
      isLoading: true,
      queryParameterComplete: false,
    });
  });

  it("should not getTicketData when no query", () => {
    expect.assertions(1);

    const { result } = renderHook(() => useTicketData(), {
      wrapper,
    });

    expect(result.current).toEqual({
      dataTicket: undefined,
      isError: false,
      isLoading: true,
      queryParameterComplete: true,
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

      renderHook(() => useTicketData(), {
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
