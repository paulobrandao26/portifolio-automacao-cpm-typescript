let idade : number;
const nome = 'ze';

type usuario = {'nick': string, 'age': number };

let jogador: usuario = {nick: 'karlo', age: 11};

let jogadorVelho: usuario = {nick: 'justino', age: 92 };

function verificarIdade (usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso jogos`)
    }else{
        console.log(`ei ${usuarioAtual.nick} é de menor pode ta pei pei não tem só ${usuarioAtual.age} anos e é um bebe`)
    }
};

verificarIdade(jogador);
verificarIdade(jogadorVelho);