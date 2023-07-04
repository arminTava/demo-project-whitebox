/* eslint @typescript-eslint/no-unsafe-return: 0 */

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithTheme } from "utils-test";

import { OrderTracking } from ".";

jest.mock("./ModalContent", () => ({
  ModalContent: () => {
    return <></>;
  },
}));

describe("OrderTracking", () => {
  it("should show Input, Button and Text when rendering", () => {
    expect.assertions(4);
    renderWithTheme(<OrderTracking />);
    const title = screen.getByText(/auftrag/i);
    const input = screen.getByPlaceholderText(/auftragsnummer/i);
    const button = screen.getByText(/suchen/i);
    expect(title).toHaveTextContent("Auftrag verfolgen");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Auftragsnummer eingeben");
    expect(button).toBeInTheDocument();
  });
  it("should show given value, when input change", async () => {
    expect.assertions(1);
    renderWithTheme(<OrderTracking />);
    const input = screen.getByPlaceholderText(/auftragsnummer/i);
    await userEvent.type(input, "1234567");
    expect(input).toHaveValue("1234567");
  });
  it("should show trimmed value, when input with spaces", async () => {
    expect.assertions(1);
    renderWithTheme(<OrderTracking />);
    const input = screen.getByPlaceholderText(/auftragsnummer/i);
    await userEvent.type(input, " 1234567  ");
    expect(input).toHaveValue("1234567");
  });
  it("should show modal, when button clicked", async () => {
    expect.assertions(1);
    const setState = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => ["", setState]);
    renderWithTheme(<OrderTracking />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(setState).toHaveBeenCalledWith(true);
  });
});
