import {Page, Locator } from '@playwright/test';
//RECEBER O PAGE NO CONSTRUCTOR
//ENCAPSULA OS SELETORES/UI
//METODOS CLAROS EX: Login(), fillemail()...
//METODOS RETOMAM OS LOCATOS PARA O TESTE APENAS FAZER O (ASSERT)
//MELHOR PQ SE UM SELETOR MUDAR NO HTML SO ATUALIZAMOS EM UM UNICO LOCAL DO PAGE OBJECT MODEL

export class LoginPage{
    //locators 
    readonly emailImput: Locator;
    readonly passwordImput: Locator;
    readonly loginButton: Locator;
    readonly erroMessage: Locator;
    readonly statusMessage: Locator;
    readonly credentialsBox: Locator;

    constructor(private page:Page){
        this.emailImput = page.locator('#email');
        this.loginButton = page.locator('#loginBtn');
        this.passwordImput = page.locator('#password');
        this.statusMessage = page.locator('#statusMessage');
        this.erroMessage = page.locator('#erroMessage');
        this.credentialsBox = page.locator('.credentils-into');
    }

    // navegar para tela de login

    async goto(){
        
        await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html')

    }

    //metodo/Ação de Login
  
    async login(username: string, password: string){

         await this.emailImput.fill(username);
         await this.passwordImput.fill(password);
         await this.loginButton.click();
      }
      async fillEmail(email: string){

        await this.emailImput.fill(email);
      }

      async fillPassword(password: string){

        await this.passwordImput.fill(password);
      }

      async clickSubmit(){
        await this.loginButton.click();
      }



}