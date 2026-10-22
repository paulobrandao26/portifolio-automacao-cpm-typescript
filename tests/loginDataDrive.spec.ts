import { test, expect} from '@playwright/test';
import { LoginPage } from '../page/loginPage';
import { ctsLogins } from '../data/login.data';

test.describe('autenticação por Data-Drive de multiplos perfis com POM',
        () => {
            for(const cenarios of ctsLogins)
            test(`Login com perfil: ${cenarios.perfil}`, async ({page}) =>{
                 const loginPage = new LoginPage(page);
                 await loginPage.goto()
                 await loginPage.login(cenarios.email, cenarios.senha);

                 if (cenarios.esperaSucesso){
                    await expect(page).toHaveURL(cenarios.urlEsperada)  
                 } else {

                    await expect(loginPage.erroMessage).toBeVisible();
                    await expect(page).toHaveURL(cenarios.urlEsperada)
                 }
            
                })
        }
)