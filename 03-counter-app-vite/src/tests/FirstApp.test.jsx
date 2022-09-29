import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp";


describe('Pruebas en FirstApp', () => {
  
    test('Debe hacer match con el Snapshot', () => {
        
        const title = 'Hola, soy JJ';
        const container = render( <FirstApp title = { title }/> )

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el título en un H1', () => {
        
        const title = 'Hola, soy JJ';
        const {container, getByText } = render( <FirstApp title = { title }/> )

        expect( getByText (title) ).toBeTruthy();

        const h1 = container.querySelector('h1');   
        expect(h1.innerHTML).toContain( title );

    });
    

})
