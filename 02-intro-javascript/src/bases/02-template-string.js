// Variables y Constantes

const nombre = 'James';
const apellido = 'Cano';

const nombreCompleto = `${ nombre } ${ apellido}`;

console.log( nombreCompleto );

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log( ` Este es un texto ${ getSaludo( nombreCompleto ) }` );