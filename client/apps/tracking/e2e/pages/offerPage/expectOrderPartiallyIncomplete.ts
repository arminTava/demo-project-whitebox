import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
  await expect(page.getByTestId("back-button")).toBeVisible();
  await expect(page.getByTestId("details-ordernumber")).toHaveText(
    "Auftragsnummer: 45678"
  );
  await expect(page.getByTestId("details-h1")).toHaveText("INSTALLION Auftrag");
  await expect(page.getByTestId("details-name").first()).toHaveText(
    "Peter Endkunde"
  );
  await expect(page.getByTestId("details-adress").first()).toHaveText(
    "Solarstraße 56"
  );
  await expect(page.getByTestId("details-city").first()).toHaveText(
    "50676 Köln"
  );
  await expect(page.getByTestId("details-title").first()).toHaveText(
    "Projektmanager bei Installion"
  );
  await expect(page.getByTestId("details-name").nth(1)).toHaveText(
    "Klaus Ansprech2"
  );
  await expect(page.getByTestId("email").first()).not.toBeVisible();
  await expect(page.getByTestId("phone").first()).toHaveText("+49221485934");
  await expect(page.getByTestId("details-title").nth(1)).toHaveText(
    "Ansprechpartner bei Lichtblick"
  );
  await expect(page.getByTestId("details-name").nth(2)).toHaveText(
    "Frieda Auftrag2"
  );
  await expect(page.getByTestId("email").nth(1)).toHaveText(
    "auftrag2@geber.com"
  );
  await expect(page.getByTestId("phone").nth(2)).not.toBeVisible();
  await expect(page.getByTestId("details-title").nth(2)).toHaveText(
    "Sie betreut die Niederlassung Installion Services - Köln"
  );
  await expect(page.getByTestId("details-adress").nth(1)).toHaveText(
    "Aachener Straße 23"
  );
  await expect(page.getByTestId("details-city").nth(1)).toHaveText(
    "50676 Köln"
  );

  // how to test the dates table????
  await expect(page.locator(".MuiTimelineDot-root").nth(4)).toHaveCSS(
    "background-color",
    "rgb(189, 189, 189)"
  );
  await expect(page.locator(".MuiTimelineDot-root").nth(5)).toHaveCSS(
    "background-color",
    "rgb(46, 211, 174)"
  );
}
