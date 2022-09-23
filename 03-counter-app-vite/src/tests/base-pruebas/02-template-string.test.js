import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
  
    test('getSaludo - Debe retornar nombre', () => {
      
        const name = 'Jhon James';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${name}`);
    })
    

})
