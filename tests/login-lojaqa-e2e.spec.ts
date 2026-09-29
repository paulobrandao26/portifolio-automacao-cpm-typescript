import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe("ato 1 - validar carregamento e visibilidade de elementos", () => {
  
  // Executa antes de cada teste dentro do describe
  test.beforeEach(async ({ page }) => {
    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`);
  });

  test("validar titulo e carregamento da pagina", async ({ page }) => {
    await expect(page).toHaveTitle(/LojaQA | Entrar/i);
  });

  test("verificar exibição dos campos do form de login", async ({ page }) => {
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
    
    // verificar se btn esta desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();
  });
});

test.describe('Ato 2 - Caminho feliz', () => {
    test('Validar Acesso e redireionar ao Painel', async({page}) =>{
        //navegar ate pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        // preencher campos utilizando o fill()
        await page.fill('#email','slow@system.com');
        await page.fill('#password','SlowPass123');
        //validar botão ativo
        await expect(page.locator('#loginBtn')).toBeEnabled();
        //ação de clique no botão
        await page.click('#loginBtn'); 
        //validar o redirecionamento para a pagina/painel
        await expect (page).toHaveURL(/painel\.html/);
    })
} )