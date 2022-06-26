import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

function GifGrid({category}) {

  const [images,setImages] = useState([]);

  useEffect(()=>{
    // getGifs(category).then(images => {setImages(images)})
    getGifs(category).then(setImages)
  },[category]); 
  // Se le manda que no tiene una dependencia para que solo se dispare una sola vez
  // Con el modo estricto de react no funciona 🙄

  


  return (
    <>
      <div id="card-grid">
        {
          
          images.map(img => <GifGridItem key={img.id} {...img} />)
          
        }
      </div>
    </>
  );
  
}   



export default GifGrid;