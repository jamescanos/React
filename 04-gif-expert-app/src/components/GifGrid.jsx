import useFectchGifs from "../hooks/useFectchGifs";
import GifItems from "./GifItems";

export default function GifGrid({ category }) {
   
  // Custom Hook
  const { images, isLoading } = useFectchGifs( category );

  return (
    <>
        <h3>{ category }</h3> 

        <div className="card-grid">
          {               
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
