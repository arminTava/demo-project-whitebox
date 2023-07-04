import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
  const title = page.getByTestId("modal-title");
  const description = page.getByTestId("modal-subtitle");
  const captcha = page.getByTestId("turnstile");
  const title2 = page.getByTestId("plz-title");
  const input = page.getByTestId("modal-input").locator("input");
  const button = page.getByTestId("modal-button");

  expect(title).toHaveText("Verifizierung");
  expect(description).toHaveText(
    "Bitte geben Sie zur Bestätigung die Postleitzahl des Objektes ein."
  );
  expect(captcha).toBeVisible();
  expect(title2).toHaveText("Auftrag verfolgen");
  expect(button).toBeVisible();
  expect(input).toBeEditable();
}
