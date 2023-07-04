import { expect, test } from "@playwright/test";
import searchForOrder from "./pages/homePage/searchForOrder";

test.describe("Modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("keine PLZ", async ({ page }) => {
    await searchForOrder(page, "12345", "");
    const helperText = page.getByTestId("modal-input").locator("p");
    expect(helperText).toHaveText("Bitte Postleitzahl angeben");
  });
  test("falsche auftragsnummer", async ({ page }) => {
    await searchForOrder(page, "23232", "50676");
    const error = page.getByTestId("modal-error");
    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Der Auftrag konnte nicht gefunden werden. Bitte überprüfen Sie Ihre Eingaben."
    );
  });
  test("falsche plz", async ({ page }) => {
    await searchForOrder(page, "12345", "50666");
    const error = page.getByTestId("modal-error");
    await expect(error).toBeVisible();
    await expect(error).toHaveText(
      "Der Auftrag konnte nicht gefunden werden. Bitte überprüfen Sie Ihre Eingaben."
    );
  });
});
