import useFetch from "../../hooks/useFetch";

function MultipleCustomHooks() {
  
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
  console.log(state);
  
  return ( 
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto'>
          <h1 className='m-4'><strong className='text-danger'>Multiple Custom Hooks</strong></h1>
          <div className='w-100 d-block'>


          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <input 
            type='text'
            name="focusScreen"
            className= 'form-control'
            autoComplete= "off"
          />

          <button 
            type='submit'
            className="btn  btn-outline-primary mt-5"
          >
            Focus
          </button>


        </div>
      </div>
    </>
  );
}

export default MultipleCustomHooks;