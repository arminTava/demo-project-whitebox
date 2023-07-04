import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
  await expect(page.getByTestId("back-button")).toBeVisible();
  await expect(page.getByTestId("details-ordernumber")).toHaveText(
    "Auftragsnummer: 12345"
  );
  await expect(page.getByTestId("details-h1")).toHaveText("INSTALLION Auftrag");
  await expect(page.getByTestId("details-name").first()).toHaveText(
    "Hans Endkunde"
  );
  await expect(page.getByTestId("details-adress").first()).toHaveText(
    "Solarstraße 4"
  );
  await expect(page.getByTestId("details-city").first()).toHaveText(
    "50676 Köln"
  );
  await expect(page.getByTestId("details-title").first()).toHaveText(
    "Projektmanager bei Installion"
  );
  await expect(page.getByTestId("details-name").nth(1)).toHaveText(
    "Klaus Ansprech"
  );
  await expect(page.getByTestId("email").first()).toHaveText(
    "ansprech@installion.eu"
  );
  await expect(page.getByTestId("phone").first()).toHaveText("+49221485934");
  await expect(page.getByTestId("details-title").nth(1)).toHaveText(
    "Ansprechpartner bei Lichtblick"
  );
  await expect(page.getByTestId("details-name").nth(2)).toHaveText(
    "Frieda Auftrag"
  );
  await expect(page.getByTestId("email").nth(1)).toHaveText(
    "auftrag@geber.com"
  );
  await expect(page.getByTestId("phone").nth(2)).toHaveText("+492211234321");
  await expect(page.getByTestId("details-title").nth(2)).toHaveText(
    "Sie betreut die Niederlassung Installion Services - Köln"
  );
  await expect(page.getByTestId("details-adress").nth(1)).toHaveText(
    "Aachener Straße 23"
  );
  await expect(page.getByTestId("details-city").nth(1)).toHaveText(
    "50676 Köln"
  );
  await expect(page.getByText("17.06.2030")).toHaveCSS(
    "color",
    "rgba(0, 0, 0, 0.87)"
  );
  await expect(page.getByText("05.02.2023")).toHaveCSS(
    "color",
    "rgba(0, 0, 0, 0.6)"
  );

  // how to test the dates table????
  await expect(page.locator(".MuiTimelineDot-root").first()).toHaveCSS(
    "background-color",
    "rgb(46, 211, 174)"
  );
  await expect(page.getByTestId("status-description").nth(1)).toHaveText(
    "Ihre persönliche Energiewende ist abgeschlossen! Laut unseren Unterlagen ist Ihre PV Anlage nun Ordnugnsgemäß am Netz und produziert Ihren eigenen Strom aus 100% erneuerbaren Energien. Wir bedanken uns herzlich bei Ihnen für Ihr Vertrauen und wünschen Ihnen weiterhin alles Gute. Waren Sie mit uns zufrieden? Dann würden wir uns freuen wenn Sie uns weiterempfehlen und uns bei Google entsprechend bewerten!"
  );
  await expect(page.getByTestId("status-description").nth(2)).toHaveText(
    "Wir haben mit Ihnen telefonisch einen Termin zum Gerüstabbau und ggf. einen AC-Installationstermin vereinbart."
  );
  await expect(page.getByTestId("status-description").nth(3)).toHaveText(
    "Das Gerüst wurde aufgebaut. Anschließend haben unsere Monteure die Montage Ihrer Anlage durchgeführt."
  );
  await expect(page.getByTestId("status-description").nth(4)).toHaveText(
    "Unser Projektmanager hat mit Ihnen telefonisch einen DC-Montagetermin und einen AC-Installationstermin vereinbart."
  );
  await expect(page.getByTestId("status-description").nth(5)).toHaveText(
    "Ihr Anbieter hat die Ergebnisse des Vor Ort Termins geprüft und ggf. offene Rückfragen mit Ihnen besprochen bevor er uns final mit der Errichtung Ihrer PV-Anlage beauftragt hat."
  );
  await expect(page.getByTestId("status-description").nth(6)).toHaveText(
    "Der mit Ihnen vereinbarte Vor-Ort-Termin hat stattgefunden."
  );
  await expect(page.getByTestId("status-description").nth(7)).toHaveText(
    "Unser Projektmanager hat Sie telefonisch kontaktiert, um einen Vor-Ort-Termin mit Ihnen zu vereinbaren."
  );
  await expect(page.getByTestId("status-description").last()).toHaveText(
    "Wir haben Ihr unverbindliches Angebot entgegengenommen und Ihrem persönlichen Projektmanager Klaus Ansprech zugewiesen. Den aktuellen Stand Ihres Auftrags können Sie hier einsehen. Ihre Auftragsnummer lautet 12345."
  );
}
