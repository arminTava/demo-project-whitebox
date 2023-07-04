import { test, expect } from "@playwright/test";
import expectHomePageUICorrect from "./pages/homePage/expectHomePageUICorrect";

test.describe("Startseite der Auftragsverfolung", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Texte der startseite", async ({ page }) => {
    await expectHomePageUICorrect(page);
  });

  test("Click Logo", async ({ page }) => {
    await page.getByTestId("logo").click();

    await expect(page.url()).toBe("http://localhost:3100/");
  });
  test("Click Impressum", async ({ page }) => {
    await page.getByTestId("logo").click();
    await page.getByTestId("link-impressum").click();

    await expect(page.url()).toBe("https://installion.eu/impressum/");
  });
  test("Click Datenschutz", async ({ page }) => {
    await page.getByTestId("logo").click();
    await page.getByTestId("link-datenschutz").click();

    await expect(page.url()).toBe("https://installion.eu/datenschutz/");
  });
});
