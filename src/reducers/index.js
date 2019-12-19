import { combineReducers } from "redux";

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS
} from "../actions";

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

const comments = (
  state = {
    items: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.postId]: { fetchingComments: true }
        }
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        items: { ...state.items, [action.postId]: action.items }
      };
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  comments
});
