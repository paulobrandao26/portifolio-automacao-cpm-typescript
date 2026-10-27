import {test, expect, request} from "@playwright/test"
const ApiUrl = 'https://api-qa-fap2026.onrender.com/api';
test.describe('teste de api lojaQA', () =>{
    test ('get catalogo lojaQA', async ({request}) => {
        const res = await request.get(`${ApiUrl}/products`)

        expect(res.status()).toBe(200);
        // VALIDAR SE STATUS ENTRE 200 A 299(STATUS DE SUCESSO DE API OK)
    
        expect(res.ok).toBeTruthy();

        const bodyRes = await res.json();
        expect(bodyRes[0]).toHaveProperty("_id");
        expect(bodyRes[0]).toHaveProperty("name");
        expect(typeof bodyRes[0].name).toBe("string");
        
    })

     test ('post login lojaQA', async ({request}) => {
        const res = await request.post(`${ApiUrl}/login`,
            {
                data:{
                    "email": "admin@system.com",
                    "password": "AdminPassword123"
                },
                headers:{'content-type': 'application/json'}
            }
        );
      //valida status 200
    expect(res.status()).toBe(200);
    //validar json
    const resBody = await res.json();
    expect(resBody).toHaveProperty("token");
    expect(typeof resBody.token).toBe('string');
    expect(resBody.token.length).toBeGreaterThan(10);
    });
});