import { useContext } from 'react';
import UserContext from '../context/user-context';

function DivThree() {
  const context = useContext(UserContext);

  return (
    <div>
      Div Three
      <h3>{context.user.loggedIn ? `Weclome ${context.user.name}!` : ''}</h3>
      <button onClick={() => context.logUser()}>{context.user.loggedIn ? 'Log Out' : 'Log In'}</button>
    </div>
  );
}

export default DivThree;
