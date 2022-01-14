import { useState } from 'react';

function FormControl() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    submitted: false
  });

  const handleChange = event => {
    /*
    if (event.target.id === 'username') {

      setUsername(event.target.value);
    } else if (event.target.id === 'password') {

      setPassword(event.target.value);
    } else if (event.target.id === 'email') {

      setEmail(event.target.value);
    }
    */

    // Computed property name

    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="cf" noValidate>

      <label htmlFor="username">username:</label>
      <input
        id="username"
        onChange={handleChange}
        value={formData.username}
      />

      <label htmlFor="password">password:</label>
      <input
        id="password"
        onChange={handleChange}
        value={formData.password}
        type="password"
      />

      <label htmlFor="email">email:</label>
      <input
        id="email"
        onChange={handleChange}
        value={formData.email}
        type="email"
      />

      <button>Submit</button>

    </form>
  );
}

export default FormControl;
