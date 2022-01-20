import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {

  switch (action.type) {
  case 'add':
    return {
      list: [...state.list, action.payload]
    };
  case 'remove':
    return {
      list: state.list.filter(num => num !== action.payload)
    };
  default:
    return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { list: [] });

  return (
    <div className="App">
      My App
      {state.list.map((num, i) => <p key={i} onClick={() => dispatch({ type: 'remove', payload: num })}>{num}</p>)}
      <button onClick={() => dispatch({ type: 'add', payload: Math.random() })}>Add</button>
    </div>
  );
}

export default App;


  // 1. Call dispatch with an action
  // 2. Action is sent to reducer function
  // 3. reducer function returns new state
