import React, { useState } from 'react';
import './App.css';
import DivOne from './components/DivOne';

export const UserContext = React.createContext();

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
    <UserContext.Provider value={{ user, logUser }}>
      App
      <DivOne />
    </UserContext.Provider>
  );
}

export default App;
