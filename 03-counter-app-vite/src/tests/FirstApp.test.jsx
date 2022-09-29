import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp";


describe('Pruebas en FirstApp', () => {
  
    test('Debe hacer match con el Snapshot', () => {
        
        const title = 'Hola, soy JJ';
        render( <FirstApp title = { title }/> )

    });
    

})
