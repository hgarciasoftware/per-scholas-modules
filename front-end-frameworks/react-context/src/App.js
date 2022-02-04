import { useState } from 'react';
import './App.css';
import DivOne from './components/DivOne';

function App() {

  let [user, setUser] = useState({ name: 'Bob', loggedIn: false });

  const logUser = () => {
    if (user.loggedIn) {
      setUser({
        name: user.name,
        loggedIn: false
      });
    } else {
      setUser({
        name: user.name,
        loggedIn: true
      });
    }
  }

  return (
    <div className="App">
      App
      <DivOne logUser={logUser} user={user} />
    </div>
  );
}

export default App;
