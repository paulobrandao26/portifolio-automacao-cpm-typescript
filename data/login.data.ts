export interface CenarioLogin{
    perfil: string;
    email: string;
    senha: string;
    esperaSucesso: boolean;
    msgEsperada?: string;
    urlEsperada: RegExp;
}

export const ctsLogins: CenarioLogin[] = [
    {
        perfil:'cliente',
        email:' user@system.com',
        senha:'UserPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
     {
        perfil:'lojista',
        email:' lojista@system.com',
        senha:'SellerPass123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil:'admin',
        email:'admin@system.com',
        senha:'AdminPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil:'bloqueado',
        email:'blocked@system.com',
        senha:'Blocked12',
        esperaSucesso: false,
        urlEsperada: /painel\.html/,
    },
    {
        perfil:'usuario não existente',
        email:'não_existe@sistem.com',
        senha:'qualquersenha',
        esperaSucesso: false,
        urlEsperada: /painel\.html/,
    }
   
]