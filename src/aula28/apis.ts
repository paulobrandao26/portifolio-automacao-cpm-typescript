const base_url = 'https://jsonplaceholder.typicode.com/';
// definir contratos de tipo

type Post =  {

     userID: Number;
     id?: number; // campo opicional
     title: string;
     body: string;
};

type comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

// GET /post

async function listarPost() {
    console.log(`--- 1. GET /post ---`);
    const res = await fetch (`${base_url}/posts`);
    const dados: Post[] = await res.json()
    console.log (`status: ${res.status}`);
    console.log(`Lidos ${dados.length} post. 
              Ex: do primeiro:`, dados[0].title)
};

// GET /post/1
async function buscarPorId(id:number) {
 console.log(`--- 2. GET /post/1 ---`);
    const res = await fetch (`${base_url}/posts/${id}`);
    const dados: Post = await res.json()
    console.log (`status: ${res.status}`);
    console.log(`titulo do post ${id}:`, dados.title);

}

// GET /post/1/comments

async function ListarComent(postId:number) {
    console.log(`--- 3. GET /post/1/comments ---`);
    const res = await fetch (`${base_url}/posts/${postId}/Comments`);
    const dados: comment[] = await res.json()
    console.log (`status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentarios.
        EX: Email do primeiro comentario`, dados[0].email);
    
}

async function chamarRes(){

    listarPost();
    buscarPorId(2);
    ListarComent(3);
    
};

chamarRes();
