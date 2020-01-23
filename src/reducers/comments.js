import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  ADD_COMMENT
} from "../actions/comments";

const comments = (
  state = {
    items: {},
    error: false
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
        error: action.error,
        items: {
          ...state.items,
          [action.postId]: { nodes: action.items, fetchingComments: false }
        }
      };
    case ADD_COMMENT:
      const newComment = { ...action.formData, postId: action.postId };
      const newComments = [...state.items[action.postId].nodes, newComment];
      return {
        ...state,
        items: {
          ...state.items,
          [action.postId]: { nodes: newComments, fetchingComments: false }
        }
      };
    default:
      return state;
  }
};

export default comments;
