import{test, expect, vi} from 'vitest';

function loginLento (usuario: string): Promise <string>{
   return new Promise ((resolve) => {
    setTimeout(() => {
        resolve (`BEM VINDO ${usuario}!`);
    },5000);

   });
}

test('simular login usando fake times', async () => {
 //ligando a maquina do tempo
    vi.useFakeTimers();
    console.log('INICIANDO CENARIO DE TESTE')

    //chamando promisse de usuario sem whait ainda
    const promessaLogin = loginLento('getea 6'); 
    //consfigura avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;
    expect(resultado).toBe('BEM VINDO getea 6!');
    console.log('CENARIO DE TESTE FINALIZADO')
  
    //desligando a maquina do tempo
    vi.useRealTimers();
})