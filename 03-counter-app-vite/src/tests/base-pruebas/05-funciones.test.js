import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
      
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        //console.log(user);

        expect( testUser ).toEqual( user );

    });
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const usernameT = 'James';

        const getUsuarioActivoTest = {
            uid: 'ABC567',
            username: usernameT
        }

        const userActive = getUsuarioActivo( usernameT );

        expect( getUsuarioActivoTest ).toEqual( userActive );

    })
    

})
