import { Page } from "@playwright/test";
import expectModalUICorrect from "../modal/expectModalUICorrect";

export default async function (page: Page, orderNumber: string, plz: string) {
  await page.waitForLoadState("domcontentloaded");

  const trackingInput = page.getByTestId("tracking-input").locator("input");
  await trackingInput.click();
  await trackingInput.fill(orderNumber);

  expectModalUICorrect(page);

  await page.getByTestId("tracking-button").click();

  const modalInput = page.getByTestId("modal-input").locator("input");
  await modalInput.click();
  await modalInput.fill(plz);
  await page.getByTestId("modal-button").click();
}
