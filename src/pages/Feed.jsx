import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import usePosts from "../hooks/usePosts.js";
import PostForm from '../components/Postform.jsx';
import Post from '../components/Post.jsx';

const Feed = () => {
  usePosts();
  const posts = useSelector(state => state.posts);
  const [visiblePosts, setVisiblePosts] = useState(5); // Start with 5, load more
  const observer = useRef();

  const lastPostRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visiblePosts < posts.length) {
        setVisiblePosts(prev => prev + 5);
      }
    });
    if (node) observer.current.observe(node);
  }, [visiblePosts, posts.length]);

  return (
    <div className="max-w-2xl mx-auto">
      <PostForm />
      {posts.slice(0, visiblePosts).map((post, i) => (
        <div key={post.id} ref={i === visiblePosts - 1 ? lastPostRef : null}>
          <Post post={post} />
        </div>
      ))}
      {visiblePosts < posts.length && <p>Loading more...</p>}
    </div>
  );
};

export default Feed;