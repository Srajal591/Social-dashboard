import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  users: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPosts: (state, action) => { state.posts = action.payload; },
    setUsers: (state, action) => { state.users = action.payload; },
    addPost: (state, action) => { state.posts.unshift(action.payload); },
    likePost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.likes = (post.likes || 0) + 1;
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post) post.comments = [...(post.comments || []), comment];
    },
    followUser: (state, action) => {
      const user = state.users.find(u => u.id === action.payload);
      if (user) user.followers = (user.followers || 0) + 1;
    },
  },
});

export const { setPosts, setUsers, addPost, likePost, addComment, followUser } = appSlice.actions;

const store = configureStore({ reducer: appSlice.reducer });

export default store;