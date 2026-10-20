import {test,expect} from '@playwright/test'
import { loginPage } from '../page/loginPage'

test.describe('login tests com POM', () => {
    let loginPage: LoginPage; 
    
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage({page});
        await loginPage.goto();
    })
   
    test('LOGIN COM SUCESSO VIA POM', async({page}) => {
        await loginPage.login('admin@system.com','AdminPassword123')
        await expect(loginPage.statusMessage).toBeVisible();
        await expect(loginPage.statusMessage).toContainText(/login bem-sucedido/i);
        await expect(page).toHaveURL(/painel\.html/);

    })

    test('testar visibilidade do bt login', async ({page}) => {
        await expect (loginPage.loginButton).toBeDisabled();
    });

})