export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = ({ posts, error }) => ({
  type: RECEIVE_POSTS,
  posts,
  error
});

export const retrievePosts = () => async dispatch => {
  dispatch(requestPosts());

  let posts, error;
  try {
    posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
  } catch (e) {
    posts = [];
    error = true;
  }

  dispatch(receivePosts({ posts, error }));
};
