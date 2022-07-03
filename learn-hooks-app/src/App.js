import CounterApp from './components/useState/CounterApp';
import CounterCustom from './components/useState/CounterCustom';
import SimpleForm from './components/useEffect/SimpleForm';
import FormCustom from './components/useEffect/FormCustom';
import FocusScreen from "./components/useRef/FocusScreen";
import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
import './styles/App.css';
import RealExampleRef from './components/useRef/RealExampleRef';
import Layout from './components/useLayoutEffect/Layout';
import Memorize from './components/memos/Memorize';
import MemoHook from './components/memos/MemoHook';
import CallbackHook from './components/memos/CallbackHook';

function App() {
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

        </div>
      </div>
    </div>
  );
}

export default App;
