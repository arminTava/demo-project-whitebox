import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Content } from ".";

describe("Content", () => {
  it("should show Title and paragraph when rendering", () => {
    expect.assertions(2);

    renderWithTheme(<Content />);

    const title = screen.getByText(/verfolgen sie/i);
    const paragraph = screen.getByText(/auftragsverfolgung/i);

    expect(title).toHaveTextContent(
      "Verfolgen Sie den aktuellen Stand Ihres Auftrags"
    );

    expect(paragraph).toHaveTextContent(
      "Mit der Auftragsverfolgung haben Sie die Möglichkeit Ihren Auftrag zu verfolgen und den aktuellen Stand einzusehen. Geben Sie dafür einfach die Auftragsnummer aus der Bestätigungsemail und die Postleitzahl des Objekts ein und Ihnen wird der aktuelle Status Ihres Auftrags angezeigt."
    );
  });
});
