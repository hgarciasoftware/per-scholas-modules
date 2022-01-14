import { useState } from 'react';

function FormControl() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event => {
    if (event.target.id === 'username') {

      setUsername(event.target.value);
    } else if (event.target.id === 'password') {

      setPassword(event.target.value);
    } else if (event.target.id === 'email') {

      setEmail(event.target.value);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, password, email, submitted)
  };

  return (
    <form onSubmit={handleSubmit} className="cf" noValidate>

      <label htmlFor="username">username:</label>
      <input
        id="username"
        onChange={handleChange}
        value={username}
      />

      <label htmlFor="password">password:</label>
      <input
        id="password"
        onChange={handleChange}
        value={password}
        type="password"
      />

      <label htmlFor="email">email:</label>
      <input
        id="email"
        onChange={handleChange}
        value={email}
        type="email"
      />

      <button>Submit</button>

    </form>
  );
}

export default FormControl;
