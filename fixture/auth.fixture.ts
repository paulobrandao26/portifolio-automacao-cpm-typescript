import { test as base, Page} from '@playwright/test';
import { loginPage, loginPage } from '../page/loginPage';
import { expect } from 'vitest';

type authFixture={
    
    loginPage: loginPage;
    loggedPage: Page;
};

export const test = base.extend<authFixture>({

      loginPage: async({page}, use) => {
        const loginPage = new LoginPage (page);
        await loginPage.goto();
        await use(loginPage);
      },
      loggedPage: async({page}, use) =>{
        const loginPage = new loginPage(page);
        await loginPage.goto();
        await loginPage.login('admin@system.com','AdminPassword123')
        await page.waitForURL(/painel\.html/);
        await use(page);
      }
});

export {expect} from '@playwright/test'