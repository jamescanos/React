const activo = true;

/*let mensaje = '';

if ( activo ){
    mensaje = 'activo';
}else{
    mensaje = 'Inactivo';
}*/

//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje = activo && 'Activo';

console.log(mensaje);