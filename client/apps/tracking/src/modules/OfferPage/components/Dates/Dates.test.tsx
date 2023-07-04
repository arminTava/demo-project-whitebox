import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils-test";

import { Dates } from ".";

const testDates = [
  {
    isBinding: true,
    offerId: "ckv6q5g3v0001aoqtnvzodseh",
    itemId: "cl4pd1zk600010kpablhrimb2",
    memberId: "ckfxz2pfd0001z0mt20ux55u1",
    categoryId: "ckwvzpj42000b0amhblfe4oqj",
    start_date: "2028-02-02",
    end_date: "2028-02-02",
    coreCalendarType: { title: "Vor-Ort-Termin" },
  },
  {
    isBinding: true,
    offerId: "ckv6q5g3v0001aoqtnvzodseh",
    itemId: "cl4pd1zk600010kpablhrimb3",
    memberId: "ckfxz2pfd0001z0mt20ux55u1",
    categoryId: "ckwvzpj42000b0amhblfe4oqj",
    start_date: "2022-02-02",
    end_date: "2022-02-02",
    coreCalendarType: { title: "Vor-Ort-Termin" },
  },
];
describe("Dates", () => {
  it("should show a table with header row when rendering", () => {
    expect.assertions(6);

    renderWithTheme(<Dates dates={testDates} />);

    const datumTitle = screen.getByText(/datum/i);
    const uhrzeitTitle = screen.getByText(/uhrzeit/i);
    const terminartTitle = screen.getByText(/terminart/i);

    expect(datumTitle).toBeInTheDocument();
    expect(datumTitle).toHaveTextContent("Datum");
    expect(uhrzeitTitle).toBeInTheDocument();
    expect(uhrzeitTitle).toHaveTextContent("Uhrzeit");
    expect(terminartTitle).toBeInTheDocument();
    expect(terminartTitle).toHaveTextContent("Terminart");
  });

  it("should show a table with future dates in rgba(0, 0, 0, 0.87) when rendering", () => {
    expect.assertions(2);

    renderWithTheme(<Dates dates={testDates} />);

    const date = screen.getByText(/2028/i);

    expect(date).toBeInTheDocument();
    expect(date).toHaveStyle("color: rgba(0, 0, 0, 0.87)");
  });

  it("should show a table with past dates in rgba(0, 0, 0, 0.6) when rendering", () => {
    expect.assertions(2);

    renderWithTheme(<Dates dates={testDates} />);

    const date = screen.getByText(/2022/i);

    expect(date).toBeInTheDocument();
    expect(date).toHaveStyle("color: rgba(0, 0, 0, 0.6)");
  });
});
