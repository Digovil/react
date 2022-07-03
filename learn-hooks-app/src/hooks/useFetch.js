import { useEffect, useRef, useState } from "react";

function useFetch(url) {

  // isMounted sirve como referencia para cuando el hook este vivo o cuando el componente de este esté montado

  const isMounted = useRef(true);
  const [state,setState] = useState({loading:true, error: null, data: null});

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  },[])

  useEffect(() => {
    setState({loading:true, error: null, data: null})
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {

          if(isMounted.current ){
            setState({
                loading:false,
                error: null,
                data
            }); 
          }
        }, 1000);
        
      })
  },[url]) // esto se ejecutara cada que cambie la url

  return state;
}

export default useFetch;