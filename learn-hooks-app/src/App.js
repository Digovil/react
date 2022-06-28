import './styles/App.css';
import CounterApp from './components/useState/CounterApp';
import CounterCustom from './components/useState/CounterCustom';
import SimpleForm from './components/useEffect/SimpleForm';
import FormCustom from './components/useEffect/FormCustom';

function App() {
  return (
    <div className="App">
     
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <CounterApp />
            <CounterCustom />
            <SimpleForm />
            <FormCustom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
