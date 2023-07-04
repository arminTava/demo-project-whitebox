import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Hero } from ".";

describe("Hero", () => {
  it("should show Text when rendering", () => {
    expect.assertions(3);

    renderWithTheme(<Hero />);

    const title1 = screen.getByText(/auftragsverfolgung/i);
    const title2 = screen.getByText(/nachschauen/i);

    expect(title1).toHaveTextContent("Installion Auftragsverfolgung");
    expect(title1).toHaveStyle("text-transform: uppercase");
    expect(title2).toHaveTextContent(
      "Den aktuellen Status des Auftrags ganz einfach nachschauen"
    );
  });
});
