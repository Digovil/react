import { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import useCounter  from "../../hooks/useCounter";


function MemoHook() {

  const { counter, increment} = useCounter(100);
  const [ show, setShow] = useState(true);

  

  const memoProcesoPesado = useMemo(()=>{
    return procesoPesado(counter);
  },[counter])

  // Recibe una función y recibe una dependecia, 
  // La funcion retorna el valor a memorizar para que no se ejecute nuevamente, 
  // Hasta que cambie el valor la dependencia



  return (
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto'>
          <h1 className='m-4  text-center'><strong className='text-danger'>MemoHook</strong></h1>
          <div className='w-100 d-block'>
            <p>{memoProcesoPesado}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className= "btn btn-primary  m-2"
            onClick= {increment}
          >
          +1
          </button>
          <button 
            className="btn btn-outline-primary m-2"
            onClick={()=>{
              setShow(!show);
            }}
          >
            Show/Hide {JSON.stringify(show)}
          </button>
        </div>
        
      </div>

    </>
  );
}

export default MemoHook;