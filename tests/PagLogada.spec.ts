import { test, expect} from '../fixture/auth.fixture'

test.describe('acesso area protegida - painel', () => {

    test('deve acessar painel com usuario ja logado', async ({loggedPage}) =>{
        //validar se esta na pagina de painel

        await expect (loggedPage).toHaveURL(/painel\.html/);
        
        // verificar existencia de titulo h1

        const h1Painel = loggedPage.locator("#panelTitle");

        await expect(h1Painel).toBeVisible();

        //verificar presença do bt loggout

        const btSair = loggedPage.locator('#logoutButton');
        await expect(btSair).toBeVisible();

    })

})