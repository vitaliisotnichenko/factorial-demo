import { test } from '@playwright/test';
import { MainPage } from "./pages/mainPage";

test.describe('Verify factorial calculation for', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  });

  test('integer numbers', async ({ page }) => {
    const mainPage = new MainPage(page);
    let randomNum = Math.floor(Math.random() * (100 - 10) + 10);
    await mainPage.submitInputField(String(randomNum));
    const answer = await mainPage.calculateFactorial(randomNum);
    await mainPage.verifyResult(randomNum, answer);
  })
})
