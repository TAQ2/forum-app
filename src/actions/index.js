export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENTS = "REMOVE_COMMENTS";

export const HIDE_COMMENTS = "HIDE_COMMENTS";
export const SHOW_COMMENTS = "SHOW_COMMENTS";

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = ({ posts, error }) => ({
  type: RECEIVE_POSTS,
  posts,
  error
});

export const retrievePosts = (
  URL = "https://jsonplaceholder.typicode.com/posts"
) => async dispatch => {
  dispatch(requestPosts());

  let posts, error;
  try {
    posts = await (await fetch(URL)).json();
  } catch (e) {
    posts = [];
    error = e;
  }

  dispatch(receivePosts({ posts, error }));
};

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
