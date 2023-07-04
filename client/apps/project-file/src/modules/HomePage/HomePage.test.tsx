import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { useTicketData } from "../../hooks/use-ticket-data/useTicketData";

import { HomePage } from ".";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../hooks/use-ticket-data/useTicketData", () => ({
  useTicketData: jest.fn(),
}));

describe("HomePage", () => {
  beforeAll(() => {
    (useTicketData as jest.Mock).mockImplementation(() => {
      return {
        dataTicket: {
          searchTicket: {
            data: [
              {
                subject: "Maurer_Gehrden_Enercity_Funktionalität:PV-Anlage",
                createdTime: "2023-03-10T12:51:59.000Z",
                status: "In Bearbeitung",
                ticketNumber: "345",
              },
              {
                subject: null,
                createdTime: null,
                status: null,
                ticketNumber: null,
              },
            ],
          },
        },
        isLoading: false,
        queryParameterComplete: true,
      };
    });
  });
  it("should render home page when no props are present", () => {
    expect.assertions(10);

    renderWithTheme(<HomePage />);

    const title = screen.getByText(/schnittstellen/i);
    const helpdeskButton = screen.getByText(/zoho/i);
    const ticketNumber = screen.getByText(/ticketnummer/i);
    const status = screen.getByText(/bearbeitung/i);
    const subject = screen.getByText(/enercity/i);

    expect(ticketNumber).toBeInTheDocument();
    expect(ticketNumber).toHaveTextContent("Ticketnummer");
    expect(status).toBeInTheDocument();
    expect(status).toHaveTextContent("In Bearbeitung");
    expect(subject).toBeInTheDocument();
    expect(subject).toHaveTextContent(
      "Maurer_Gehrden_Enercity_Funktionalität:PV-Anlage"
    );

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Schnittstellen");
    expect(helpdeskButton).toBeInTheDocument();
    expect(helpdeskButton).toHaveTextContent("Zoho Desk");
  });
  it("should render skeleton when query is loading", () => {
    expect.assertions(1);

    (useTicketData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataTicket: {
          searchTicket: {
            data: [
              {
                subject: "",
                createdTime: "",
                status: "",
                ticketNumber: "",
              },
            ],
          },
        },
        isLoading: true,
        queryParameterComplete: true,
      };
    });

    renderWithTheme(<HomePage />);

    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toBeInTheDocument();
  });
  it("should render error page when parameter incomplete", () => {
    expect.assertions(2);

    (useTicketData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataTicket: {
          searchTicket: {
            data: [
              {
                subject: "",
                createdTime: "",
                status: "",
                ticketNumber: "",
              },
            ],
          },
        },
        isLoading: true,
        queryParameterComplete: false,
      };
    });

    renderWithTheme(<HomePage />);

    const title = screen.getByText(/berechtigung/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Keine Berechtigung");
  });
  it("should render error page when auth invalid", () => {
    expect.assertions(2);

    (useTicketData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataTicket: {
          searchTicket: {
            data: [
              {
                subject: "",
                createdTime: "",
                status: "",
                ticketNumber: "",
              },
            ],
          },
        },
        isLoading: false,
        isError: true,
        queryParameterComplete: true,
      };
    });

    renderWithTheme(<HomePage />);

    const title = screen.getByText(/berechtigung/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Keine Berechtigung");
  });
  it("should render no Tickets page when no Tickets", () => {
    expect.assertions(2);

    (useTicketData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataTicket: {
          searchTicket: {
            data: null,
          },
        },
        isLoading: false,
        isError: false,
        queryParameterComplete: true,
      };
    });

    renderWithTheme(<HomePage />);

    const subtitle = screen.getByText(/auftrag/i);

    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(
      "Zu diesem Auftrag gibt es keine Tickets."
    );
  });
});
