import { combineReducers } from "redux";

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REMOVE_COMMENTS
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

// const comments = (
//   state = {
//     fetchingComments: true,
//     items: {},
//     postIdsShowingComments: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case REQUEST_COMMENTS:
//       return {
//         ...state,
//         fetchingComments: true
//       };
//     case RECEIVE_COMMENTS:
//       return {
//         ...state,
//         fetchingComments: false,
//         items: { ...state.comments, ...action.comments }
//       };
//     // case REMOVE_COMMENTS:
//     //   return {
//     //     ...state,
//     //     fetchingComments: false,
//     //     items: action.comments,
//     //     postId: action.id
//     //   };
//     default:
//       return state;
//   }
// };

const intialState = {
  items: {}
};

const comments = (state = intialState, action) => {
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
      console.log(action.postId);
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
