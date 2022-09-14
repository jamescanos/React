/* eslint-disable react-hooks/rules-of-hooks */

// Desestructuraci�n de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1 ] = personajes;

console.log(p1);

// Obtener el segundo elemento del array personajes
// Con la coma se ignora la primera posici�n del array
const [ , p2 ] = personajes;
console.log(p2);

// Obtener el tercer elemento del array personajes
// Con la coma se ignora la primera y segunda posici�n del array
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras);
console.log(numeros);

//Tarea
//1. El primer valor del arreglo se llamar� nombre
//2. Se llamar� setNombre
const useState = ( valor ) => {
    return [ valor, ()=> { console.log('Hola Mundo') } ]
}

const arr = useState('Goku');
arr[1]();

const [ nombre, setNombre ] = useState('Goku');

console.log(nombre);
setNombre();
arr[1]();
