import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/index.js';
import { toast } from 'react-toastify';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3 || body.length < 10) {
      toast.error('Title must be at least 3 chars, body at least 10.');
      return;
    }
    dispatch(addPost({ id: Date.now(), title, body, userId: 1, likes: 0, comments: [] }));
    toast.success('Post created!');
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow m-4">
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border p-2 w-full mb-2" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" className="border p-2 w-full mb-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Post</button>
    </form>
  );
};

export default PostForm;