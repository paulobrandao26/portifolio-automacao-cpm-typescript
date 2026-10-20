# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/loginPOM.spec.ts >> login tests com POM >> LOGIN COM SUCESSO VIA POM
- Location: tests/loginPOM.spec.ts:12:9

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { loginPage } from '../page/loginPage'
  3  | 
  4  | test.describe('login tests com POM', () => {
  5  |     let loginPage: LoginPage; 
  6  |     
  7  |     test.beforeEach(async ({page}) => {
> 8  |         loginPage = new LoginPage({page});
     |         ^ ReferenceError: LoginPage is not defined
  9  |         await loginPage.goto();
  10 |     })
  11 |    
  12 |     test('LOGIN COM SUCESSO VIA POM', async({page}) => {
  13 |         await loginPage.login('admin@system.com','AdminPassword123')
  14 |         await expect(loginPage.statusMessage).toBeVisible();
  15 |         await expect(loginPage.statusMessage).toContainText(/login bem-sucedido/i);
  16 |         await expect(page).toHaveURL(/painel\.html/);
  17 | 
  18 |     })
  19 | 
  20 |     test('testar visibilidade do bt login', async ({page}) => {
  21 |         await expect (loginPage.loginButton).toBeDisabled();
  22 |     });
  23 | 
  24 | })
```