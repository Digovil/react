import React, { useState } from 'react';
import MultipleCustomHooks from "../../components/examples/MultipleCustomHooks";

function RealExampleRef() {
    const [show, setShow] = useState(false);
    
    return (
        <>
        <div className='w-100 m-auto card mb-4 m-4 p-4'>
            <div className='w-75 m-auto  text-center'>
                <h1 className='m-4'><strong className='text-danger'>Real Example Ref</strong></h1>
            </div>
            <div className="d-flex justify-content-center flex-column">

                {show && <MultipleCustomHooks />}


                <button 
                    className="btn btn-primary"
                    onClick={()=>{
                        setShow(!show);
                    }}
                >
                    { show? "Hiden" : "Show" }
                
                </button>
            </div>
        </div>
        </>
    );
}

export default RealExampleRef;