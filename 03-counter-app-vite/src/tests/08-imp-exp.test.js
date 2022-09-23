import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('08-imp-exp', () => {
  
    test('getHeroeById debe retornar un heroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } ); 
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
    });
    

    test('getHeroesByOwner debe retornar Heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) )

    });

    test('getHeroesByOwner debe retornar Heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        console.log(heroes)
        expect( heroes ).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        )

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner) )
        
    });

})
