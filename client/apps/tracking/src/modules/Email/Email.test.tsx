import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Email } from ".";

describe("Email", () => {
  it("should show email when rendering", () => {
    expect.assertions(3);

    renderWithTheme(<Email>info@installion.eu</Email>);

    const email = screen.getByText(/inf/i);
    const emailIcon = screen.getByTestId("SendIcon");

    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent("info@installion.eu");
    expect(emailIcon).toBeInTheDocument();
  });
});
