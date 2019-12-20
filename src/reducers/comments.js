import { REQUEST_COMMENTS, RECEIVE_COMMENTS } from "../actions/comments";

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

export default comments;
