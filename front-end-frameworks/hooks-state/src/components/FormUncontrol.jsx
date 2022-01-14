import { useRef } from 'react';

function FormUncontrol() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value
    };

    console.log(userNameRef);

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="ucf" noValidate>

      <label htmlFor="username1">username:</label>
      <input
        id="username1"
        ref={userNameRef}
      />

      <label htmlFor="password1">password:</label>
      <input
        id="password1"
        ref={passwordRef}
        type="password"
      />

      <label htmlFor="email1">email:</label>
      <input
        id="email1"
        ref={emailRef}
        type="email"
      />

      <button>Submit</button>

    </form>
  );
  
}

export default FormUncontrol;
