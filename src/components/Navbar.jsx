import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector(state => state.users[0]); // Mock logged-in user
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold">Social Dashboard</Link>
      <div>
        <Link to="/profile" className="mx-2">Profile ({user?.name})</Link>
        <Link to="/analytics" className="mx-2">Analytics</Link>
      </div>
    </nav>
  );
};

export default Navbar;