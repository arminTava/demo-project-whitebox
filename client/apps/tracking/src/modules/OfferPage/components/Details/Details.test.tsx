import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Details } from ".";

describe("Details", () => {
  it("should show a details section with customer info when variant==='customer'", () => {
    expect.assertions(10);

    renderWithTheme(
      <Details
        variant="customer"
        name="testname"
        address="teststreet 1"
        city="12345 testcity"
        orderNumber="0000"
      />
    );

    const title = screen.getByText(/Installion/i);
    const orderNumber = screen.getByText(/0000/i);
    const name = screen.getByText(/testname/i);
    const address = screen.getByText(/teststreet/i);
    const city = screen.getByText(/testcity/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("INSTALLION Auftrag");
    expect(orderNumber).toBeInTheDocument();
    expect(orderNumber).toHaveTextContent("0000");
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("testname");
    expect(address).toBeInTheDocument();
    expect(address).toHaveTextContent("teststreet 1");
    expect(city).toBeInTheDocument();
    expect(city).toHaveTextContent("12345 testcity");
  });

  it("should show a details section with contact info when variant==='contact'", () => {
    expect.assertions(8);

    renderWithTheme(
      <Details
        variant="contact"
        title="Projektmanager bei Installion"
        name="peter manager"
        email="pm@installion.eu"
        phone="+49123456789"
        mobile="+46123456789"
      />
    );

    const title = screen.getByText(/Projektmanager/i);
    const name = screen.getByText(/peter/i);
    const email = screen.getByText(/pm/i);
    const phone = screen.getByText(/49/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Projektmanager bei Installion");
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("peter manager");
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent("pm@installion.eu");
    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent("+49123456789");
  });

  it("should show a details section with branch info when variant==='branch'", () => {
    expect.assertions(6);

    renderWithTheme(
      <Details
        variant="branch"
        title="Sie betreut die Niederlassung Köln"
        address="teststreet 1"
        city="12345 testcity"
      />
    );

    const title = screen.getByText(/niederlassung/i);
    const address = screen.getByText(/teststreet/i);
    const city = screen.getByText(/testcity/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Sie betreut die Niederlassung Köln");
    expect(address).toBeInTheDocument();
    expect(address).toHaveTextContent("teststreet 1");
    expect(city).toBeInTheDocument();
    expect(city).toHaveTextContent("12345 testcity");
  });
});
