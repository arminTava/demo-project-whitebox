import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
  await expect(page.getByTestId("back-button")).toBeVisible();
  await expect(page.getByTestId("details-ordernumber")).toHaveText(
    "Auftragsnummer: 67890"
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
  await expect(page.getByTestId("details-title").first()).not.toBeVisible();
  await expect(page.getByTestId("details-name").nth(1)).not.toBeVisible();
  await expect(page.getByTestId("email").first()).not.toBeVisible();
  await expect(page.getByTestId("phone").first()).not.toBeVisible();
  await expect(page.getByTestId("details-title").nth(1)).not.toBeVisible();
  await expect(page.getByTestId("details-name").nth(2)).not.toBeVisible();
  await expect(page.getByTestId("email").nth(1)).not.toBeVisible();
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
  await expect(page.locator(".MuiTimelineDot-root").last()).toHaveCSS(
    "background-color",
    "rgb(189, 189, 189)"
  );
  await expect(page.getByTestId("status-description").nth(1)).toHaveText(
    "Unser Projektmanager hat Ihnen eine E-Mail zugesendet, die Ihnen dabei hilft, Ihre PV-Anlage beim Marktstammdatenregister anzumelden. Sie haben Ihre Anlage dort angemeldet und uns den Nachweis an unseren Projektmanager zurückgesendet. Unser Netzanmeldungsteam hat die Fertigstellung Ihrer Anlage gemeldet. Der Termin zur Zählersezung wurde vereinbart und durchgeführt. Wir wünschen Ihnen viel Freude und eine Menge sonnige Tage mit Ihrer PV-Anlage."
  );
  await expect(page.getByTestId("status-description").nth(2)).toHaveText(
    "Wir werden Sie telefonisch kontaktieren, um einen Termin zum Gerüstabbau und ggf. einen AC-Installationstermin zu vereinbaren."
  );
  await expect(page.getByTestId("status-description").nth(3)).toHaveText(
    `Das Gerüst wird zur Montage aufgebaut. Anschließend werden unsere Monteure mit der Montage beginnen. Weitere Informationen finden Sie unter dem Abschnitt "Termine".`
  );
  await expect(page.getByTestId("status-description").nth(4)).toHaveText(
    "Unser Projektmanager wird mit Ihnen telefonisch einen DC-Montagetermin und einen AC-Installationstermin vereinbaren."
  );
  await expect(page.getByTestId("status-description").nth(5)).toHaveText(
    "Ihr Anbieter prüft aktuell die Ergebnisse des Vor Ort Termins und wird ggf. offene Rückfragen mit Ihnen besprechen bevor er uns final mit der Errichtung Ihrer PV-Anlage beauftragt."
  );
  await expect(page.getByTestId("status-description").nth(6)).toHaveText(
    `Der mit Ihnen vereinbarte Vor-Ort-Termin findet demnächst statt. Weitere Informationen finden Sie unter dem Abschnitt "Termine".`
  );
  await expect(page.getByTestId("status-description").nth(7)).toHaveText(
    "In Kürze wird Sie unser Projektmanager telefonisch kontaktieren, um einen Vor-Ort-Termin mit Ihnen zu vereinbaren."
  );
  await expect(page.getByTestId("status-description").nth(7)).toHaveCSS(
    "color",
    "rgb(128, 128, 128)"
  );
  await expect(page.getByTestId("status-description").last()).toHaveText(
    "Wir haben ihr unverbindliches Angebot entgegengenommen. Den aktuellen Stand Ihres Auftrags können Sie hier einsehen. Ihre Auftragsnummer lautet 67890."
  );
}
