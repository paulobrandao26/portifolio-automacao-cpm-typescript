const cenarioExemplo = { nome: "Login com sucesso", critico: true };

if (cenarioExemplo.critico) {
    console.log(`O cenário "${cenarioExemplo.nome}" deve ser automatizado.`);
} else {
    console.log(`O cenário "${cenarioExemplo.nome}" deve ser testado manualmente.`);
}

const listaCenarios = [
    { nome: "Login de Utilizador", automatizar: true },
    { nome: "Adicionar Produto ao Carrinho", automatizar: true },
    { nome: "Finalizar Pagamento", automatizar: true },
    { nome: "Alterar Foto de Perfil", automatizar: false },
    { nome: "Validar Layout do Rodapé", automatizar: false }
];

let totalAutomatizaveis = 0;

for (let i = 0; i < listaCenarios.length; i++) {
    if (listaCenarios[i].automatizar) {
        totalAutomatizaveis++;
    }
}

console.log(`Total de cenários automatizáveis: ${totalAutomatizaveis}`);