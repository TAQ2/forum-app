import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/posts";

const posts = (
  state = {
    fetchingPosts: true,
    items: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        fetchingPosts: false,
        items: action.posts,
        error: action.error
      };
    default:
      return state;
  }
};

export default posts;
