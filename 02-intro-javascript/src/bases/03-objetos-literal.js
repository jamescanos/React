
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55331321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

console.log( persona );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona2 );