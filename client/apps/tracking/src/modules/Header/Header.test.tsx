import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Header } from ".";

describe("Header", () => {
  it("should show Logo when rendering", () => {
    expect.assertions(2);

    renderWithTheme(<Header />);

    const logo = screen.getByAltText("Installion Logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
  });
});
