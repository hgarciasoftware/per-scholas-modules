import { useState, useEffect } from 'react';
import './App.css';

import Counter from './components/Counter';

function App() {

  let [count, setCount] = useState(0);
  let [showCount, setShowCount] = useState(false);

  // mounting
  useEffect(() => {
    console.log('App component mounted.');
  }, []);

  // updating
  useEffect(() => {
    console.log('testing for count 1');
  }, [count]);

  const increment = () => setCount(x => x + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">

      <button onClick={() => setShowCount(!showCount)}>Toggle</button>
      {showCount ? (
        <Counter count={count} increment={increment} decrement={decrement} reset={reset} />
        ) : null}

    </div>
  );
}

export default App;





/*


REACT LIFECYCLE


mounting
  - when we first render a component (first see it on the page)

updating
  - when the state of a component changes
  - when the props being passed down to the component changes

unmounting
  - when you hide the component or go to a different page


*/
