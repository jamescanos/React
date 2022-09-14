// Funciones en Javascript

const saludar = function( nombre ){
    return `Hola, ${nombre}`;
}

//Función de flecha, impide modificar el objeto
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

// Se utiliza cuando solo se devuelve un return
const saludar3 = ( nombre ) => `Hola, ${nombre}`;

//Return mensaje sin argumentos
const saludar4 = () => 'Hola, Trunks';

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Gohan') );
console.log( saludar4() );

const getUser = () =>{
    return{
        userid: 'ABC123',
        username: 'admin'
    }
}

//Se puede simplificar la función quitando el return
//y colocando el elemento a devolver entre paréntesis ()
const getUser2 = () => ({
        userid: 'ABC123',
        username: 'admin'
});

console.log( getUser() )

console.log( getUser2() )

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC123',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('James');
console.log(usuarioActivo);

//##########

// Función de flecha con return de objeto implícito.
const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC123',
    username: nombre
})

const usuarioActivo2 = getUsuarioActivo2('Jhon');
console.log(usuarioActivo2);