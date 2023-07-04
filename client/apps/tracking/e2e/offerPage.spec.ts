import { test } from "@playwright/test";
import searchForOrder from "./pages/homePage/searchForOrder";
import expectOrderComplete from "./pages/offerPage/expectOrderComplete";
import expectOrderPartiallyIncomplete from "./pages/offerPage/expectOrderPartiallyIncomplete";
import expectOrderIncomplete from "./pages/offerPage/expectOrderIncomplete";

test.describe("Aufträge", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Vollständiger Auftrag", async ({ page }) => {
    await searchForOrder(page, "12345", "50676");
    await expectOrderComplete(page);
  });
  test("Teilweise unvollständiger Auftrag", async ({ page }) => {
    await searchForOrder(page, "45678", "50676");
    await expectOrderPartiallyIncomplete(page);
  });
  test("Unvollständiger auftrag", async ({ page }) => {
    await searchForOrder(page, "67890", "50676");
    await expectOrderIncomplete(page);
  });
});
