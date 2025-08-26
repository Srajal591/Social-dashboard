import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost, addComment } from '../store/index.js';
import { toast } from 'react-toastify';

const Post = ({ post }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post.id));
    toast.info('Liked!');
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      dispatch(addComment({ postId: post.id, comment }));
      toast.success('Comment added!');
      setComment('');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow m-4">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleLike} className="text-blue-500 mr-2">Like ({post.likes || 0})</button>
      <form onSubmit={handleComment} className="mt-2">
        <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment" className="border p-1" />
        <button type="submit" className="ml-2 text-blue-500">Add</button>
      </form>
      <ul className="mt-2">
        {post.comments?.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
};

export default Post;