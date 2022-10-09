import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItems from "./GifItems";

export default function GifGrid({ category }) {
   
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  // No se deben hacer llamados a funciones desde un functional component
  useEffect( () => {
    getImages();
  }, [])

  return (
    <>
        <h3>{ category }</h3> 

        <div className="card-grid">
          { 
              /*images.map( ({ id, title })  => (
                <li key={ id }>{ title }</li>
              ))  */ 
              
              images.map( ( image )  => (
                <GifItems 
                  key   = { image.id }
                  /*title = { image .title }
                  url   = { image.url }*/
                  // ... se utiliza para esparcir las propiedades de un objeto sin nombrarlos todos
                  { ...image }
                />
              ))
          }
        </div>
    </>
  )
}
