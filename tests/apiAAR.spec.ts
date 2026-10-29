import {test, expect, request} from "@playwright/test"
const ApiUrl = 'https://api-qa-fap2026.onrender.com/api';

test.describe('testes apino padrão AAR, geração de massa para UI',
     () =>{
          let authToken: string;
          let createdProdID: string;
          const uniqueProdName = `teclado mecanico ${Date.now()}`;

          // ARRANGE(SETUP login logista)

          test.beforeAll(async ({request}) =>{
            const loginRes = await request.post(`${ApiUrl}/login`,
                {
                    data:{
                        'email':'logista@system.com',
                        'password':'SellerPass123'
                    },
                }
            );
            expect (loginRes.status()).toBe(200);
            const loginData = await loginRes.json();
            authToken = loginData.token
            expect(authToken).toBeDefined();
            //criar massa de testes(criar um prodto)
            const productRes = await request.post(`${ApiUrl}/seller/products`,
                {  headers: {
            Authorizaton: `Bearer ${authToken}`
                },
                    data:{
                          "name": uniqueProdName,
                          "description": "massa de teste gerado no setup",
                          "category" : "perifericos",
                          "prince": 64.7,
                          "stock": 108,
                          "image": "https://exemplo.com/imagem/teclado.jpg"
                    }
                }
            )

            expect(productRes.status()).toBe(201)
            const productBody = await productRes.json();
            createdProdID = productBody.product._id;
            expect(createdProdID).toBeDefined();

          })
         test("validar produto recem criado", async ({request}) =>{
             expect(createdProdID).toBeDefined();
             const res = await request.get(`${ApiUrl}/products?search=${uniqueProdName}
                `)
         expect(res.status()).toBe(200)
         const productData = await res.json();
         expect (Array.isArray(productData)).toBeTruthy();
         const targetProd = productData.find((p:any) =>p._id === createdProdID);
         expect(targetProd).toBeDefined();
         expect(targetProd.name).toBe(uniqueProdName);

         //verificando estoque
         expect(targetProd.stock).toBe(323)

         })
          
         }
)