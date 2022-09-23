import { usContext } from "../../base-pruebas/06-deses-obj";

describe('06-deses-obj Test', () => {
  
    test('useContext debe retornar un objeto ', () => {
      
        const clave = '123456';
        const edad  = '37';
        const lat   = 14.1232;
        const long  = -12.3232;

       const datos = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: lat,
                lng: long
            }
        } 

        const context = { clave, edad, latlng: { lat, long } };
        const context2 = usContext( context );

        expect( datos ).toEqual( context2 );

    })
    

})
