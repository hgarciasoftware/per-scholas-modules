import { useEffect } from 'react';

function Counter(props) {

  // mounting
  useEffect(() => {
    console.log('Counter is mounted.');

    // unmounting
    return () => {
      console.log('Counter is unmounting');
    };

  }, []);

  return (
    <div>
      <h3>Count: {props.count}</h3>
      <button onClick={props.increment}>Add</button>
      <button onClick={props.decrement}>Subtract</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default Counter;
