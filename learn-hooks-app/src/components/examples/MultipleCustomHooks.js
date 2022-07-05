import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

function MultipleCustomHooks() {
  
  const {counter, increment} = useCounter(1);
  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote } = !!data && data[0];

  return ( 
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto text-center'>
          <h1 className='m-4'><strong className='text-danger'>Multiple Custom Hooks</strong></h1>
          <h3 className='m-4'><strong className='text-success'>BreakingBad Quotes</strong></h3>
        </div>
        <div className="d-flex justify-content-center flex-column">

          {
            loading ?
              (
                <div className="alert alert-info text-center">Loading...</div>
              )
            :
              (
                <blockquote className="blockquote text-right fs-6 w-100">
                  <p>{quote}</p>
                  <footer className="blockquote-footer"> {author} </footer>
                </blockquote>
              )
            
          }

          <button className="btn btn-primary" onClick={increment}>Next Quotes</button>
        </div>
      </div>
    </>
  );
}

export default MultipleCustomHooks;