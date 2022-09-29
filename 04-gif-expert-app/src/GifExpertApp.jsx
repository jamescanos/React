import { useState } from "react"
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = () => {
        
        // 1 Forma
        setCategories([ ...categories, 'Demon Slayer' ]);

        // 2 Forma
        //setCategories( cat => [ ...categories, 'Demon Slayer' ]);
    }

    return (
        <>
            { /* Título */}
            <h1>GifExpertApp</h1>

            { 
            /* 
                Input 
                Se agrega el prop setCategories para pasar el estado categories
            */              
            }
            <AddCategory setCategories = { setCategories }/>

            { /* Gif List */}
            <ol>
                { 
                    categories.map( 
                        category  => {
                            return <li key={ category }>{category}</li>
                        }
                    )
                }
                
            </ol>

                { /* Gif Item */}


        </>
    )
}

export default GifExpertApp
