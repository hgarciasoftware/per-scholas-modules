function DivThree(props) {
  return (
    <div>
      Div Three
      <h3>{props.user.loggedIn ? `Weclome ${props.user.name}!` : ''}</h3>
      <button onClick={() => props.logUser()}>{props.user.loggedIn ? 'Log Out' : 'Log In'}</button>
    </div>
  );
}

export default DivThree;
