import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp";


describe('Pruebas en FirstApp', () => {
  
    /*test('Debe hacer match con el Snapshot', () => {
        
        const title = 'Hola, soy JJ';
        const container = render( <FirstApp title = { title }/> )

        expect( container ).toMatchSnapshot();
    });*/

    test('Debe mostrar el título en un H1', () => {
        
        const title = 'Hola, soy JJ';
        const {container, getByText, getByTestId } = render( <FirstApp title = { title }/> )

        expect( getByText (title) ).toBeTruthy();


        expect( getByTestId ('test-title').innerHTML ).toContain( title );

        /*const h1 = container.querySelector('h1');   
        expect(h1.innerHTML).toContain( title );*/

    });

    test('Debe mostrar el subtítulo enviado por props', () => {
      
        const title = 'Hola, soy JJ';
        const subTitle = 'Soy un subtitle';
        const { getByText } = render( 
            <FirstApp 
                title = { title }
                subTitle = {subTitle}
            /> 
        );

        expect( getByText (subTitle) ).toBeTruthy();

    })
    
    

})
