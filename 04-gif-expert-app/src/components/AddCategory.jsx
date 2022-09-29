import { useState } from 'react';

/* 
    Se desestructura el prop (onNewCategory) para poder usarlo
    function AddCategory({ onNewCategory })

*/
export default function AddCategory({ onNewCategory }) {

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

        if( inputValue.trim().length <= 1) return;

        // Se conservan las categorìas y se agrega un nuevo valor
        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        
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
