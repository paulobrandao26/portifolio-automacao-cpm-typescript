import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test ('metodo Post para criar um novo post', async() => {
        const res = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                userId: 1,
                title: 'meu novo post', 
                body: 'conteudo do meu post'
              })
            });
            //testa status code
            expect (res.status) .toBe(201);
            // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe ('meu novo post');
            expect(dados.body).toBe('conteudo do meu post');
        });

test ('metodo put para atualizar um post', async() => {
        const res = await fetch(`${BASE_URL}/Posts/1`, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                userId: 1,
                title: 'minha atualização', 
                body: 'atualizando do meu post'
              })
            }); 
            //testa status code
            expect (res.status).toBe(200);
            // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe ('minha atualização');
            expect(dados.body).toBe('atualizando do meu post');
        });

test ('metodo PATCH para atualizar um post', async() => {
        const res = await fetch(`${BASE_URL}/Posts/1`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                
                title: 'minha atualização no titulo', 
                
              })
            }); 
            //testa status code
            expect (res.status).toBe(200);
            // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe ('minha atualização no titulo');
            //expect(dados.body).toBe('atualizando do meu post');
        });

test ('metodo DELETE para APAGAR um post', async() => {
        const res = await fetch(`${BASE_URL}/Posts/1`, {
            method: 'DELETE',
          });
           
            //testa status code
            expect (res.status).toBe(200);
        
        });

        

