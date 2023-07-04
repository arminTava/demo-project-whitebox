import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils-test";

import { useOfferExist } from "hooks/use-offer-exist/useOfferExist";

import { ModalContent } from ".";

jest.mock("hooks/use-offer-exist/useOfferExist", () => ({
  useOfferExist: jest.fn(),
}));
jest.mock("@marsidev/react-turnstile", () => ({
  Turnstile: () => {
    return <></>;
  },
}));

const mockFetchOffer = jest.fn(); // keyword var because otherwise not hoisted. (const and let in temoral deadzone)

beforeAll(() => {
  (useOfferExist as jest.Mock).mockImplementation(() => {
    return {
      fetchOffer: mockFetchOffer,
      offerState: 0,
      setOfferState: () => console.log("state"),
    };
  });
});
describe("Modal Content", () => {
  const open = true;
  const setOpen = (input: boolean) => console.log("open", input);
  const searchTerm = "123456";
  it("should show Text, Input and Button when rendering", () => {
    expect.assertions(3);

    renderWithTheme(
      <ModalContent searchTerm={searchTerm} open={open} setOpen={setOpen} />
    );
    const title = screen.getByText(/verifizierung/i);
    const input = screen.getByPlaceholderText(/postleitzahl/i);

    fireEvent.change(input, { target: { value: "1234567" } });
    expect((input as HTMLInputElement).value).toBe("1234567");
    expect(title).toHaveTextContent("Verifizierung");
    expect(input).toBeInTheDocument();
  });
  it("should show trimmed input when spaces where input", () => {
    expect.assertions(1);

    renderWithTheme(
      <ModalContent searchTerm={searchTerm} open={open} setOpen={setOpen} />
    );
    const input = screen.getByPlaceholderText(/postleitzahl/i);

    fireEvent.change(input, { target: { value: "  1234567  " } });
    expect((input as HTMLInputElement).value).toBe("1234567");
  });

  it("should show test disable Button when rendering", () => {
    expect.assertions(2);

    renderWithTheme(
      <ModalContent searchTerm={searchTerm} open={open} setOpen={setOpen} />
    );
    const button = screen.getByText(/öffnen/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("should close when close button is clicked", async () => {
    expect.assertions(3);

    console.log = jest.fn();

    renderWithTheme(
      <ModalContent searchTerm={searchTerm} open={open} setOpen={setOpen} />
    );
    const closeButton = screen.getByTestId("close-button");
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);
    expect(console.log).toHaveBeenCalledWith("state");
    expect(console.log).toHaveBeenCalledWith("open", false);
  });
});
