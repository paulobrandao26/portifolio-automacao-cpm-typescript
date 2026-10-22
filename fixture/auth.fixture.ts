import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../page/loginPage';

type authFixture = {
  loginPage: LoginPage;
  loggedPage: Page;
};

export const test = base.extend<authFixture>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  loggedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      'admin@system.com',
      'AdminPassword123'
    );

    await page.waitForURL(/painel\.html/);
    await use(page);
  },
});

export { expect };