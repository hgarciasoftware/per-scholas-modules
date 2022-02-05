import React, { useState } from 'react';

const UserContext = React.createContext();

export const CustomUserContextProvider = props => {

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
  };

  return (
    <UserContext.Provider value={{ user, logUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
