import { useEffect, useState } from "react";

import Message from "./Message";

export default function SimpleForm() {

  /**
   * No llames Hooks dentro de ciclos, 
   * condicionales o funciones anidadas. 
   * En cambio, usa siempre Hooks en el 
   * nivel superior de tu función en React 
   */ 

  const [formState, setForm ] =  useState({
    name: '',
    email: ''
  });

  const {name,email} = formState;

  // Nos permite ejecutar un efecto secundario, cuando algo suceda en nuestro componente
  // Esto se ejecutara cuantas veces yo haga cambios en el estado de mi componente

  useEffect(() => {
    // console.log("Ey!")    
  },[]) // Como no tiene dependencias solo se ejecuta la primera vez :D

  useEffect(()=> {
    // console.log("Estas escribiendo en el email :D")
  },[email])

  const  handleInputChange = ({target}) => {

    setForm({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto  text-center'>
          <h1 className='m-4'><strong className='text-danger'>useEffect</strong></h1>
          <div className='w-100 d-block'>


          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <input 
            type='text'
            name='name'
            className= 'form-control'
            placeholder= "Tu nombre"
            autoComplete= "off"
            value={name}
            onChange = {handleInputChange}
          />

          <input 
            type='email'
            name='email'
            className= 'form-control'
            placeholder= "email@gmail.com"
            autoComplete= "off"
            value={email}
            onChange = {handleInputChange}
          />    

          { (name || email) &&  <Message />}
        </div>
        
      </div>

    </>
  );
}