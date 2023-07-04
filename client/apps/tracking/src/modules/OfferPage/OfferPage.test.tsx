import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { useTrackingData } from "hooks/use-tracking-data/useTrackingData";

import { OfferPage } from ".";

jest.mock("modules/OrderTracking/ModalContent", () => ({
  ModalContent: () => {
    return <></>;
  },
}));
jest.mock("hooks/use-tracking-data/useTrackingData", () => ({
  useTrackingData: jest.fn(),
}));

describe("OfferPage", () => {
  beforeAll(() => {
    (useTrackingData as jest.Mock).mockImplementation(() => {
      return {
        dataOffer: "dataOffer",
        dataSubuser: "dataSubuser",
        dataSubuserClient: "dataSubuserClient",
        dataMember: "dataMember",
        dataCalendar: undefined,
        isLoading: false,
      };
    });
  });
  it("should show the OfferPage when rendering", () => {
    expect.assertions(12);

    renderWithTheme(<OfferPage />);

    const banner = screen.getByAltText("DC Dachdecker Florian bohrt");
    const hero = screen.getByText(/auftragsverfolgung/i);
    const orderTracking = screen.getByText(/verfolgen/i);
    const backButton = screen.getByText(/zurück/i);
    const title = screen.getByText("INSTALLION Auftrag");
    const dates = screen.getByText(/termine/i);
    const status = screen.getByText(/auftragsverlauf/i);
    const contact1 = screen.getByTestId("contact-element");
    const contact2 = screen.getByTestId("contact-element2");
    const divider1 = screen.getByTestId("contact-divider");
    const divider2 = screen.getByTestId("contact-divider2");

    expect(banner).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(orderTracking).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("INSTALLION Auftrag");
    expect(dates).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(contact1).not.toBeVisible();
    expect(contact2).not.toBeVisible();
    expect(divider1).not.toBeVisible();
    expect(divider2).not.toBeVisible();
  });
  it("should show contact info on the OfferPage when info available", () => {
    expect.assertions(4);
    (useTrackingData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataOffer: undefined,
        dataSubuser: {
          firstName: "firstName",
          lastName: "lastName",
          email: "email",
          phone: "phone",
        },
        dataSubuserClient: {
          firstName: "firstName",
          lastName: "lastName",
          email: "email",
          phone: "phone",
        },
        dataMember: undefined,
        dataCalendar: undefined,
        isLoading: false,
      };
    });
    renderWithTheme(<OfferPage />);

    const contact1 = screen.getByTestId("contact-element");
    const contact2 = screen.getByTestId("contact-element2");
    const divider1 = screen.getByTestId("contact-divider");
    const divider2 = screen.getByTestId("contact-divider2");

    expect(contact1).toBeVisible();
    expect(contact2).toBeVisible();
    expect(divider1).toBeVisible();
    expect(divider2).toBeVisible();
  });

  it("should show skeleton when loading prop is passed", () => {
    expect.assertions(1);
    (useTrackingData as jest.Mock).mockImplementationOnce(() => {
      return {
        dataOffer: "dataOffer",
        dataSubuser: "dataSubuser",
        dataSubuserClient: "dataSubuserClient",
        dataMember: "dataMember",
        dataCalendar: "dataCalendar",
        isLoading: true,
      };
    });
    renderWithTheme(<OfferPage />);

    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toBeInTheDocument();
  });
});
