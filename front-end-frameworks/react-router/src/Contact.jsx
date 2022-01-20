import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate();

  return (
    <div>
      <h3>This is a Contact Us page</h3>
      <button onClick={() =>{navigate('/home')}}>Go back to Home Page</button>
    </div>
  );
}

export default Contact;
