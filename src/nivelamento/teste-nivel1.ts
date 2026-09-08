type Usuario  = {'nome': string , 'posicao' : number}

let concurso: Usuario = {nome: 'Sabrino', posicao: 12}
let concurso2: Usuario = {nome: 'justino', posicao: 25}

function verificarAprovacao (UsuarioAgora: Usuario){

if (UsuarioAgora.posicao >= 20){
    console.log (`aprovado, sua nora foi ${UsuarioAgora.posicao}`)

} else {
    console.log (`Rerovado, sua nota foi ${UsuarioAgora.posicao}`)
}
};
verificarAprovacao(concurso);
verificarAprovacao(concurso2);
