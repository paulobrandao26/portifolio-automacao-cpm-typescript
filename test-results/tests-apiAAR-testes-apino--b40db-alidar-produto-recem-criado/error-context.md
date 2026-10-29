# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/apiAAR.spec.ts >> testes apino padrão AAR, geração de massa para UI >> validar produto recem criado
- Location: tests/apiAAR.spec.ts:47:14

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test, expect, request} from "@playwright/test"
  2  | const ApiUrl = 'https://api-qa-fap2026.onrender.com/api';
  3  | 
  4  | test.describe('testes apino padrão AAR, geração de massa para UI',
  5  |      () =>{
  6  |           let authToken: string;
  7  |           let createdProdID: string;
  8  |           const uniqueProdName = `teclado mecanico ${Date.now()}`;
  9  | 
  10 |           // ARRANGE(SETUP login logista)
  11 | 
  12 |           test.beforeAll(async ({request}) =>{
  13 |             const loginRes = await request.post(`${ApiUrl}/login`,
  14 |                 {
  15 |                     data:{
  16 |                         'email':'logista@system.com',
  17 |                         'password':'SellerPass123'
  18 |                     },
  19 |                 }
  20 |             );
> 21 |             expect (loginRes.status()).toBe(200);
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |             const loginData = await loginRes.json();
  23 |             authToken = loginData.token
  24 |             expect(authToken).toBeDefined();
  25 |             //criar massa de testes(criar um prodto)
  26 |             const productRes = await request.post(`${ApiUrl}/seller/products`,
  27 |                 {  headers: {
  28 |             Authorizaton: `Bearer ${authToken}`
  29 |                 },
  30 |                     data:{
  31 |                           "name": uniqueProdName,
  32 |                           "description": "massa de teste gerado no setup",
  33 |                           "category" : "perifericos",
  34 |                           "prince": 64.7,
  35 |                           "stock": 108,
  36 |                           "image": "https://exemplo.com/imagem/teclado.jpg"
  37 |                     }
  38 |                 }
  39 |             )
  40 | 
  41 |             expect(productRes.status()).toBe(201)
  42 |             const productBody = await productRes.json();
  43 |             createdProdID = productBody.product._id;
  44 |             expect(createdProdID).toBeDefined();
  45 | 
  46 |           })
  47 |          test("validar produto recem criado", async ({request}) =>{
  48 |              expect(createdProdID).toBeDefined();
  49 |              const res = await request.get(`${ApiUrl}/products?search=${uniqueProdName}
  50 |                 `)
  51 |          expect(res.status()).toBe(200)
  52 |          const productData = await res.json();
  53 |          expect (Array.isArray(productData)).toBeTruthy();
  54 |          const targetProd = productData.find((p:any) =>p._id === createdProdID);
  55 |          expect(targetProd).toBeDefined();
  56 |          expect(targetProd.name).toBe(uniqueProdName);
  57 | 
  58 |          //verificando estoque
  59 |          expect(targetProd.stock).toBe(323)
  60 | 
  61 |          })
  62 |           
  63 |          }
  64 | )
```