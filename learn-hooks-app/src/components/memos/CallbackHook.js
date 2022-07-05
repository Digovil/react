import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

function CallbackHook() {
    const [counter,setCounter] = useState(10);

    const increment = useCallback((n) => {
        setCounter(c=>c+n);
    },[setCounter]);

    return (
        <>
            <div className='w-75 m-auto card p-4 mb-4 mt-4'>
            <div className='w-75 m-auto'>
                <h1 className='m-4  text-center'>
                    <strong className='text-danger'>useCallback</strong>
                </h1>
                <div className='w-100 d-block'>
                <h3>Counter: {counter}</h3>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                
                <ShowIncrement increment={ increment }/>

            </div>
            
            </div>
  
        </>
    );
}

export default CallbackHook;