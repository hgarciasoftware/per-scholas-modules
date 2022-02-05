import React, { useState } from 'react';
import './App.css';
import DivOne from './components/DivOne';
import { CustomUserContextProvider } from './context/user-context';

function App() {

  return (
    <CustomUserContextProvider>
      App
      <DivOne />
    </CustomUserContextProvider>
  );
}

export default App;


/*

---------------------------------

BASIC SETUP

(inside App):

export const UserContext = React.creatContext()

...

<UserContext.Provider>
  App
  <DivOne />
</UserContext.Provider>

---------------------------------


(inside child component):

import React, { useContext } from 'react';
import { UserContext } from '../App';

function DivThree(props) {

  const context = useContext(UserContext);

  console.log(context);
}


---------------------------------

*/
