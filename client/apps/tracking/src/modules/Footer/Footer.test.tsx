import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Footer } from ".";

describe("Footer", () => {
  it("should show email, phone number and Links when rendering", () => {
    expect.assertions(12);

    renderWithTheme(<Footer />);

    const title = screen.getByText(/fragen/i);
    const email = screen.getByText(/inf/i);
    const emailIcon = screen.getByTestId("SendIcon");
    const phone = screen.getByText(/49/i);
    const phoneIcon = screen.getByTestId("PhoneIcon");
    const link1 = screen.getByText(/impressum/i);
    const link2 = screen.getByText(/datenschutz/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Bei Fragen melden Sie sich gerne unter:");
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent("info@installion.eu");
    expect(emailIcon).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent("+49 221 4291 42 70");
    expect(phoneIcon).toBeInTheDocument();
    expect(link1).toBeInTheDocument();
    expect(link1).toHaveTextContent("Impressum");
    expect(link2).toBeInTheDocument();
    expect(link2).toHaveTextContent("Datenschutz");
  });
});
