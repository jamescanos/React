/*import { Fragment } from "react";

export const FirstApp = () => {
    <Fragment>
    return(
        <h1>FirstApp</h1>
    );
    </Fragment>

}*/

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    // <> Es un Fragment sin necesidad de importar  
    
    /*if (!title){
        throw new Error("Prop Title no existe");
    }*/

    return(
        <>
            <div data-testid="test-title">{ title }</div>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
    

}

FirstApp.propTypes = {

    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string

}

FirstApp.defaultProps = {
    name: 'Jhon James',
    //title: 'Sin Título',
    subTitle: 'No hay un Subtítulo'
}