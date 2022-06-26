import React from "react";
import '../styles/Testimony.css';

function Testimony({name,country,position,business,desc,img}) {
  return(
    <>
      <div className="container-card">
        <img className="img" src={img} alt="Foto de {name}"/>
        <div className="container-text">
          <p className="name"><strong>{name}</strong> in {country}</p>
          <p className="position">{position} at <strong>{business}</strong></p>
          <p className="desc">"{desc}"</p>
        </div>
      </div>

    </>
  );
}

export default Testimony;