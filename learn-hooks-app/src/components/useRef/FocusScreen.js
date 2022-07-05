import React, { useRef } from "react";

const FocusScreen = () => {

  // El uso básico que se le da a el useRef
  // Es el de tener un referencia mutable
  // Se le puede hacer referencia a cualquier elemento html
  // Y se le puede dar seguimiento a cualquier valor
  
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input[name="focusScreen"]').select();
    console.log(inputRef);
    inputRef.current.select();
  } 

  return (
    <>
    <div className='w-75 m-auto card p-4 mb-4 mt-4'>
      <div className='w-75 m-auto  text-center' >
        <h1 className='m-4'><strong className='text-danger'>useRef</strong></h1>
        <div className='w-100 d-block'>


        </div>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <input 
          ref={inputRef}
          type='text'
          name="focusScreen"
          className= 'form-control'
          autoComplete= "off"
        />

        <button 
          type='submit'
          onClick = {handleClick}
          className="btn  btn-outline-primary mt-5"
        >
          Focus
        </button>


      </div>
      
      </div>

    </>
  );
}

export default FocusScreen;