import { Link } from "react-router-dom";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";
import CallbackHook from "../memos/CallbackHook";
import MemoHook from "../memos/MemoHook";
import Memorize from "../memos/Memorize";
import FormCustom from "../useEffect/FormCustom";
import SimpleForm from "../useEffect/SimpleForm";
import Layout from "../useLayoutEffect/Layout";
import FocusScreen from "../useRef/FocusScreen";
import RealExampleRef from "../useRef/RealExampleRef";
import CounterApp from "../useState/CounterApp";
import CounterCustom from "../useState/CounterCustom";
import '../../styles/App.css';

function HookScreen() {
  return ( 
    <div className="App min-vh-100">
      <div className='container'>
        <div className='row'>
          
          <div className='col-lg-4'><CounterApp /></div>
          <div className='col-lg-4'><CounterCustom /></div>
          <div className='col-lg-4'><SimpleForm /></div>
          <div className='col-lg-4'><FormCustom /></div>
          <div className='col-lg-4'><MultipleCustomHooks /></div>
          <div className='col-lg-4'><FocusScreen /></div>
          <div className='col-lg-4'><RealExampleRef /></div>
          <div className='col-lg-4'><Layout /></div>
          <div className='col-lg-4'><Memorize /></div>
          <div className='col-lg-4'><MemoHook /></div>
          <div className='col-lg-4'><CallbackHook /></div>
          <div className='col-lg-4'>
            <Link to='/home' className='text-center w-75 m-auto card p-4 mb-4 mt-4'>
              <button 
                className="btn btn-outline-primary "
                        
              >      
                App useContext  
              </button>
            </Link> 
            
          </div>

        </div>
      </div>
    </div>

  );
}

export default HookScreen;