import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
  const heroTitle = page.getByTestId("hero-title");
  const heroSubtitle = page.getByTestId("hero-subtitle");
  const contentTitle = page.getByTestId("content-title");
  const contentText = page.getByTestId("content-text");
  const trackingText = page.getByTestId("tracking-text");
  const email = page.getByTestId("email");
  const emailIcon = page.getByTestId("SendIcon");
  const phone = page.getByTestId("phone");
  const phoneIcon = page.getByTestId("PhoneIcon");

  await expect(heroTitle).toHaveText("Installion Auftragsverfolgung");
  await expect(heroSubtitle).toHaveText(
    "Den aktuellen Status des Auftrags ganz einfach nachschauen"
  );
  await expect(contentTitle).toHaveText(
    "Verfolgen Sie den aktuellen Stand Ihres Auftrags"
  );
  await expect(contentText).toHaveText(
    "Mit der Auftragsverfolgung haben Sie die Möglichkeit Ihren Auftrag zu verfolgen und den aktuellen Stand einzusehen. Geben Sie dafür einfach die Auftragsnummer aus der Bestätigungsemail und die Postleitzahl des Objekts ein und Ihnen wird der aktuelle Status Ihres Auftrags angezeigt."
  );
  await expect(trackingText).toHaveText("Auftrag verfolgen");

  await expect(email).toHaveText("info@installion.eu");
  await expect(emailIcon.locator("path")).toHaveAttribute(
    "d",
    "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
  );
  await expect(phone).toHaveText("+49 221 4291 42 70");
  await expect(phoneIcon.locator("path")).toHaveAttribute(
    "d",
    "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
  );
}
