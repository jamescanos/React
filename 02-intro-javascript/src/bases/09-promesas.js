import { getHeroeById } from './bases/08-importar-exportar'

/*const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {

        //resolve();
        const heroe = getHeroeById(2);
        //console.log(heroe);
        // Lo que se envíe en el resolve va al then
        resolve(heroe);
        //reject('No se pudo encontrar el error');
    }, 2000)

});

promesa.then( (heroe) => {
    console.log('Heroe: ', heroe)
})
.catch( err => console.warn( err ) );*/

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            //resolve();
            const heroe = getHeroeById( id );
            //console.log(heroe);
            // Lo que se envíe en el resolve va al then
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
            
            
        }, 2000)
    
    })

}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( err => console.warn( err ) );