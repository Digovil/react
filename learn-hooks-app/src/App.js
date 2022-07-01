import './styles/App.css';
import CounterApp from './components/useState/CounterApp';
import CounterCustom from './components/useState/CounterCustom';
import SimpleForm from './components/useEffect/SimpleForm';
import FormCustom from './components/useEffect/FormCustom';
import FocusScreen from "./components/useRef/FocusScreen";
import MultipleCustomHooks from './components/examples/MultipleCustomHooks';

function App() {
  return (
    <div className="App min-vh-100">
     
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4'><CounterApp /></div>
        <div className='col-lg-4'><CounterCustom /></div>
        <div className='col-lg-4'><SimpleForm /></div>
        <div className='col-lg-4'><FormCustom /></div>
        <div className='col-lg-4'><FocusScreen /></div>
        <div className='col-lg-4'><MultipleCustomHooks /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
