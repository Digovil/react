import { useEffect, useState } from "react";

export default function Message() {


  // Añadiendole el documento con react 🤔
  const [coord, setCoord] = useState({x:0,y:0});
  const {x,y} = coord;
  
  useEffect(() => {

    const mouseMove = ({x,y}) => {
      // Primera forma de hacerlo con javascript puro y duro
      // const coor = document.querySelector("#coor");
      // coor.innerText=`Estas en la posición (x:${x},y:${y}) de la pantalla`;
      setCoord({x,y});
    }

    window.addEventListener('mousemove', mouseMove );

    return () => {
      // Se tiene que remover la por referencia a la funcion
      window.removeEventListener('mousemove',mouseMove)
    }
  })

  return (
    <>
      <div id="coor">Estas en la posición (x:{x},y:{y}) de la pantalla</div>
    </>
  );
}