import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = ( newCategory ) => {
        
        // Valida si la categoría insertada existe en el array
        if( categories.includes(newCategory) ) return;
        // 1 Forma
        setCategories([ ...categories, newCategory ]);

        // 2 Forma
        //setCategories( cat => [ ...categories, 'Demon Slayer' ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }
            />

            { 
                categories.map( (category)  => (
                    < GifGrid 
                        key = {category}
                        category = {category}
                    />
                ))      
            }



        </>
    )
}

export default GifExpertApp