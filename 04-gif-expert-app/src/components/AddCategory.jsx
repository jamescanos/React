import { useState } from 'react';

/* 
    Se desestructura el prop (setCategories) para poder usarlo
    function AddCategory({ setCategories })

*/
export default function AddCategory({ setCategories }) {

    const [ inputValue, setInputValue ] = useState('');

    // Sin desestructurar
    //const onInputChange = ( event ) => {

    // Desestructurado
    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        
        // impide la recarga del form
        event.preventDefault();
        //console.log( JSON.stringify( setCategories ) );

        if( inputValue.trim().length <= 1) return;
        // Se conservan las categorìas y se agrega un nuevo valor
        setCategories( categories => [ inputValue, ...categories]);

        setInputValue('');
    }

    const onFocus = () => {
        
        setInputValue('');

    }

    return (
        // (event) => onSubmit(event) => Hace referencia a un callBack, se puede reemplazar
        // por el nombre de la acción onSubmit que para fines prácticos es lo mismo.
        <form onSubmit={ onSubmit }>
            <input 
                type = "text"
                placeholder = "Buscar Gifs"
                value = {inputValue}
                onChange = { onInputChange }
                onFocus = { onFocus }
            />

        </form>
        
    )
}
