import { useLayoutEffect, useState,useRef    } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

function Layout() {
  
  const {counter, increment} = useCounter(1);
  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author,quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize,setBoxSize]  = useState({});

  useLayoutEffect(() => {
    // setBoxSize(pTag.current.getBoundingClientRect())

    setBoxSize(pTag.current.getBoundingClientRect())
    
  },[quote]);

  return ( 
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto  text-center'>
          <h1 className='m-4'><strong className='text-danger'>useLayoutEffect</strong></h1>
        </div>
        <div className="d-flex justify-content-center flex-column">

        
  
          <blockquote className="blockquote text-right fs-6 w-100">
            <p ref={pTag}>{quote}</p>
            <footer className="blockquote-footer"> {author} </footer>
          </blockquote>

          <pre>
            {JSON.stringify(boxSize,null, 3)}  
          </pre>  
        
      
            
          
          
            
          <button className="btn btn-primary" onClick={increment}>Next Quotes</button>
        </div>
      </div>
    </>
  );
}

export default Layout;