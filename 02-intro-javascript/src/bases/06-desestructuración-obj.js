/* eslint-disable react-hooks/rules-of-hooks */
// Desestructuración de Objetos
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Senior'
}

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//Extrae en las llaves lo que se necesita de un objeto
const { nombre } = persona;
//Si se tiene una variable 'nombre' se puede cambiar la
//asignación con otra variable como 'nombre2'
//nombre:nombre2
//objeto que se extrae : nombre variable
const { nombre:nombre2 } = persona;

console.log( nombre );
console.log( nombre2 );

const { nombre:nombre3, edad, clave } = persona;
console.log(nombre3);
console.log(edad);
console.log(clave);


const useContext = ({ clave, nombre, edad, rango = 'Junior'})  => {
    //console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const personas = useContext( persona );
console.log( personas );

//Desestructuración de arreglos
const { nombreClave, anios } = useContext();
console.log( nombreClave, anios);

// Extraer objetos anidados y asignarlos a constantes
const { latlng:{ lat, lng } } = useContext();
console.log( lat, lng );

