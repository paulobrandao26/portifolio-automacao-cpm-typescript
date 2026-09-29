# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/login-lojaqa-e2e.spec.ts >> Ato 2 - Caminho feliz >> Validar Acesso e redireionar ao Painel
- Location: tests/login-lojaqa-e2e.spec.ts:28:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /painel\.html/
Received string:  "https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="pt-BR">…</html>
       - unexpected value "https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html"

```

```yaml
- link "← Voltar para a loja":
  - /url: loja.html
- link "LojaQA":
  - /url: loja.html
- heading "Acesso à LojaQA" [level=2]
- text: E-mail
- textbox "E-mail":
  - /placeholder: Digite seu e-mail
  - text: slow@system.com
- text: Senha
- textbox "Senha":
  - /placeholder: Mínimo de 8 caracteres
  - text: SlowPass123
- button "Mostrar ou ocultar senha":
  - img
- button "Entrar"
- link "Criar conta":
  - /url: "#"
- text: "|"
- link "Esqueci minha senha":
  - /url: "#"
- strong: "Massa de dados para QA:"
- text: "Admin:"
- code: admin@system.com
- text: /
- code: AdminPassword123
- text: "Cliente:"
- code: user@system.com
- text: /
- code: UserPassword123
- text: "Lojista:"
- code: lojista@system.com
- text: /
- code: SellerPass123
- text: "Bloqueado:"
- code: blocked@system.com
- text: /
- code: Blocked123
- text: "Lento:"
- code: slow@system.com
- text: /
- code: SlowPass123
- text: Erro de comunicação com o servidor da API.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';
  4  | 
  5  | test.describe("ato 1 - validar carregamento e visibilidade de elementos", () => {
  6  |   
  7  |   // Executa antes de cada teste dentro do describe
  8  |   test.beforeEach(async ({ page }) => {
  9  |     //navegar ate pagina de login
  10 |     await page.goto(`${BASE_URL}/login.html`);
  11 |   });
  12 | 
  13 |   test("validar titulo e carregamento da pagina", async ({ page }) => {
  14 |     await expect(page).toHaveTitle(/LojaQA | Entrar/i);
  15 |   });
  16 | 
  17 |   test("verificar exibição dos campos do form de login", async ({ page }) => {
  18 |     await expect(page.locator('#email')).toBeVisible();
  19 |     await expect(page.locator('#password')).toBeVisible();
  20 |     await expect(page.locator('#loginBtn')).toBeVisible();
  21 |     
  22 |     // verificar se btn esta desativado
  23 |     await expect(page.locator('#loginBtn')).toBeDisabled();
  24 |   });
  25 | });
  26 | 
  27 | test.describe('Ato 2 - Caminho feliz', () => {
  28 |     test('Validar Acesso e redireionar ao Painel', async({page}) =>{
  29 |         //navegar ate pagina de login
  30 |         await page.goto(`${BASE_URL}/login.html`);
  31 |         // preencher campos utilizando o fill()
  32 |         await page.fill('#email','slow@system.com');
  33 |         await page.fill('#password','SlowPass123');
  34 |         //validar botão ativo
  35 |         await expect(page.locator('#loginBtn')).toBeEnabled();
  36 |         //ação de clique no botão
  37 |         await page.click('#loginBtn'); 
  38 |         //validar o redirecionamento para a pagina/painel
> 39 |         await expect (page).toHaveURL(/painel\.html/);
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  40 |     })
  41 | } )
```