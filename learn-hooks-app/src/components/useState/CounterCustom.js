import useCounter from "../../hooks/useCounter";

export default function CounterCustom() {

  const {counter,increment, decrement,reset} = useCounter();

  return (
      <>
        <div className='w-75 m-auto card p-4 mb-4 mt-4  text-center'>
          <h1><strong className='text-danger'>Custom Hook Counter</strong></h1>
          <div className='w-100'>
            <h3>Counter with Hook: {counter}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className= "btn btn-primary w-10 m-1"
              onClick= {increment}
            >
              +1
            </button>
            <button
              className= "btn btn-primary w-10 m-1"
              onClick= {reset}
            >
              reset
            </button>

            <button
              className= "btn btn-primary w-10 m-1"
              onClick= {decrement}
            >
              -1
            </button>
          </div>
        </div>
      </>
  )
}