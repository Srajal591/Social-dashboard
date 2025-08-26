 import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts, setUsers } from '../store/index.js';

const usePosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=5');
      dispatch(setPosts(postsRes.data.map(post => ({ ...post, likes: 0, comments: [] })))); // Add mock likes/comments
      dispatch(setUsers(usersRes.data));
    };
    fetchData();

    // Simulate real-time updates (poll every 5s)
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);
};

export default usePosts;