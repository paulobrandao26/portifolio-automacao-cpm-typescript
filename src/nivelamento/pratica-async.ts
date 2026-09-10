//Importando a função ultilitaria de aguardar tempo (delay)

import {aguardar} from "../../utils/helpers";
//SIMULANDO UMA API DE LOGIN
function simularLogin (usuario:string, senha:string): Promise <string>{
    return new Promise((resolve, reject) =>{

        if (usuario === 'admin' && senha === '12345678'){
            resolve ('token-secreto-aprovado-123');

        } else{
            reject('erro 401 - USUARIO OU SENHA INVALIDOS');
        }

    });  
}
//FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT

async function executarCT() {
    console.log('inicindo cenario de teste');
    try {
        console.log('passo 1: abrindo tela de login...');
        await aguardar(10000);
        console.log('passo 2: inserindo credenciais...');
        await aguardar(3000);
        
        const token = await simularLogin('gta6', '12345678');
        console.log(`SUCESSO! USUARIO LOGADO TOKEN RECEBIDO: ${token}\n`);
    } catch (erro){
        console.error(`FALHA NO TESTE: ${erro}\n`);
    }finally{
        console.log('passo final: Fechando navegador e limpado dados');
    }
}

executarCT();