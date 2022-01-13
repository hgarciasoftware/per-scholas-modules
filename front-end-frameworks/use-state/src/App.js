import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0); // [state, setState]

  /*

    CLASS COMPONENT

    this.state = {
      count: 0,
      name: 'bob',
      job: 'builder'
    }

    this.setState({ count: this.state.count + 1 })


    FUNCTIONAL COMPONENT

    let [myObj, setMyObj] = useState({ count: 0, name: 'bob', job: 'builder' })

    setMyObj({ ...myObj, name: 'george' })

  */

  const increment = () => {
    setCount(prev => prev + 1);
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
