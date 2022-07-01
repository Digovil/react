import { useState } from 'react';

export default function CounterApp() {
  const [state,setState] = useState({
    counterA:10,
    counterB:10,
    counterC:10,
    counterD:11
  })

  const {counterA,counterB} = state;

  return (
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto'>
          <h1 className='m-4'><strong className='text-danger'>useState</strong></h1>
          <div className='w-100 d-block'>
            <h3>CounterA: {counterA}</h3>
            <h3>CounterB: {counterB}</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className= "btn btn-primary"
            onClick= {()=>setState({
              ...state,  // Técnica para pasarle todos los valores anteriores al nuevo estado
              counterB:counterB+1
            })}
          >
          +1
        </button>
        </div>
        
      </div>

    </>
  );
}