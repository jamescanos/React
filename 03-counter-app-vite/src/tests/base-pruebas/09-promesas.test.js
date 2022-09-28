import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('09-promises.js', () => {
  
    test('getHeroeByIdAsync debe retornar un héroe', ( done ) => {
      
        const id = 1;
        getHeroeByIdAsync( id ).
            then( hero => {                
                expect( hero ).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );
                done();
            })
    });

    test('getHeroeByIdAsync debe obtener un error si no existe el héroe', ( done ) => {
      
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
            
                console.log( error );
                expect( error ).toBe( `No se pudo encontrar el héroe ${ id }` );
                done();
            
            })
    });
    

})
