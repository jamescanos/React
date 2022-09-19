/*import { Fragment } from "react";

export const FirstApp = () => {
    <Fragment>
    return(
        <h1>FirstApp</h1>
    );
    </Fragment>

}*/

import PropTypes from 'prop-types';

const myFunction = (a, b) => {

    return a+b;

}

const newMessage = {

    message: "Hola",
    title: "JJ"

}

export const FirstApp = ({ title, valor }) => {
    // <> Es un Fragment sin necesidad de importar  
    
    if (!title){
        throw new Error("Prop Title no existe");
    }

    return(
        <>
            
            <h1>{ /*newMessage.message + " " +newMessage.title - myFunction(2,3)*/    }</h1>
            <h2>{ title }</h2>
            <h3>{ valor }</h3>
            <p>Nuevo Elemento</p>
        </>
    );
    

}

FirstApp.propTypes = {

    title: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired

}

FirstApp.defaultProps = {
    title: 'Sin Título',
    valor: 0
}