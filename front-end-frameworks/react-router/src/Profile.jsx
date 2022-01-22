import { useParams } from 'react-router-dom';

function Profile() {
  let { user } = useParams();

  return (
    <div>
      <h2>Hello {user}</h2>
    </div>
  );
}

export default Profile;
