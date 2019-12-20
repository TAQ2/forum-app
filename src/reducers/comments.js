import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  ADD_COMMENT
} from "../actions/comments";

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
    case ADD_COMMENT:
      const newComment = { ...action.formData, postId: action.postId };
      const newComments = [...state.items[action.postId], newComment];
      return {
        ...state,
        items: { ...state.items, [action.postId]: newComments }
      };
    default:
      return state;
  }
};

export default comments;
