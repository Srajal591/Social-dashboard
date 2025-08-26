import { useSelector, useDispatch } from 'react-redux';
import { followUser } from '../store/index.js';

const Profile = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profiles</h2>
      {users.map(user => (
        <div key={user.id} className="bg-white p-4 rounded shadow mb-4">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => dispatch(followUser(user.id))} className="bg-green-500 text-white p-2 rounded">
            Follow ({user.followers || 0})
          </button>
        </div>
      ))}
    </div>
  );
};

export default Profile;