import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export default function useFectchGifs( category ) {
    
    const [images, setImages]       = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    // No se deben hacer llamados a funciones desde un functional component
    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }

}
