import './App.css';
import FormControl from './components/FormControl';
import FormUncontrol from './components/FormUncontrol';

function App() {
  return (
    <div className="App">

        <h3 className='cfh'>Controlled Form</h3>
        <FormControl />

        <h3 className='ucfh'>Uncontrolled Form</h3>
        <FormUncontrol />

    </div>
  );
}

export default App;
