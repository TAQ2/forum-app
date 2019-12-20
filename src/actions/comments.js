export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const requestComments = postId => ({
  type: REQUEST_COMMENTS,
  postId
});

export const receiveComments = (postId, items) => ({
  type: RECEIVE_COMMENTS,
  items,
  postId
});

export const retrieveComments = postId => async dispatch => {
  dispatch(requestComments(postId));

  let comments;
  try {
    comments = await (await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + postId
    )).json();
  } catch (e) {
    comments = []; // TODO - error handling
  }

  dispatch(receiveComments(postId, comments.slice(0, 5)));
};
