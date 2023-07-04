import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { PhoneNumber } from ".";

describe("PhoneNumber", () => {
  it("should show phone number when rendering", () => {
    expect.assertions(3);

    renderWithTheme(<PhoneNumber>+49 221 4291 42 70</PhoneNumber>);

    const phone = screen.getByText(/49/i);
    const phoneIcon = screen.getByTestId("PhoneIcon");

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent("+49 221 4291 42 70");
    expect(phoneIcon).toBeInTheDocument();
  });
});
