import { useState } from "react";
import useCounter  from "../../hooks/useCounter";

import Small from "./Small";

function Memorize() {

  const { counter, increment} = useCounter();
  const [ show, setShow] = useState(true);




  return (
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto'>
          <h1 className='m-4  text-center'><strong className='text-danger'>React.memo</strong></h1>
          <div className='w-100 d-block'>
            <h3><Small value={counter} /></h3>
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

export default Memorize;