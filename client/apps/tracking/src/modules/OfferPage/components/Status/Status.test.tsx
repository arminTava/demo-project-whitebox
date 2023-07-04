import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Status } from ".";

const log = [
  { type: "complete", createdAt: "2021-10-25T14:01:37.000Z" },
  { type: "vot_koordinierung", createdAt: "2021-10-26T09:53:54.000Z" },
  { type: "vot_dokumentation", createdAt: "2021-11-02T06:43:35.000Z" },
  { type: "not_in_enum", createdAt: "2021-11-02T06:43:35.000Z" },
];

describe("Status", () => {
  it("should show a timeline when rendering'", () => {
    expect.assertions(3);

    renderWithTheme(
      <Status
        coreOfferlog={log}
        descriptionInformation={["test", "test", "test"]}
      />
    );

    const title = screen.getByText(/auftragsverlauf/i);
    const timeLineItem = screen.getByText(/angeboten/i);

    expect(title).toBeInTheDocument();
    expect(timeLineItem).toBeInTheDocument();
    expect(title).toHaveTextContent("Detaillierter Auftragsverlauf");
  });
});
