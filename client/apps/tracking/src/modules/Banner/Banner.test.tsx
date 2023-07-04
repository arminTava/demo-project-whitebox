import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Banner } from ".";

describe("Banner", () => {
  it("should have background image when rendering", () => {
    expect.assertions(2);

    renderWithTheme(<Banner />);

    const logo = screen.getByAltText("DC Dachdecker Florian bohrt");
    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
  });
});
