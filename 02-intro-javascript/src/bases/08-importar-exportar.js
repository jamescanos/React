//import { heroes } from './data/heroes'
//import { heroes } from './data/heroes'

//import heroes, { owners } from '../datos/heroes'
import heroes from '../datos/heroes'


/*export const getHeroeById = ( id ) => {
    //Find solo sirve para encontrar un elemento en un array
    return heroes.find( (heroe) => heroe.id === id);
}*/

export const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id )

//console.log( getHeroeById(2) )

//Filter permite encontrar múltiples elementos en un array
const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner )

//console.log( getHeroesByOwner('Marvel') )