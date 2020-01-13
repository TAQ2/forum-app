import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  receivePosts,
  retrievePosts,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "./posts";

describe("receivePosts", () => {
  it("should work", () => {
    const posts = "posts";
    const error = "error";
    const expected = {
      type: RECEIVE_POSTS,
      posts,
      error
    };

    const result = receivePosts({ posts, error });

    expect(result).toEqual(expected);
  });
});

describe("retrievePosts", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  // afterEach(() => {
  //   fetchMock.restore();
  // });
  it("should send a request for posts then response is put into the store", () => {
    const post = {
      body: "body",
      id: 1,
      title: "title",
      userId: 1
    };
    const error = undefined;

    // @Incomplete put this url in a different place
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/posts", {
      body: [post]
    });

    const expectedActions = [
      { type: REQUEST_POSTS },
      { type: RECEIVE_POSTS, posts: [post], error }
    ];
    const store = mockStore();
    store.dispatch(retrievePosts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should send a request for posts and the error is put into the store", () => {
    const post = {
      body: "body",
      id: 1,
      title: "title",
      userId: 1
    };
    const error = undefined;

    // @Incomplete put this url in a different place
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/posts", {
      body: [post]
    });

    const expectedActions = [
      { type: REQUEST_POSTS },
      { type: RECEIVE_POSTS, posts: [post], error }
    ];

    expect(retrievePosts("broken url")).toThrow();
    // const store = mockStore();
    // store.dispatch(retrievePosts("broken url")).then(() => {
    //   // return of async actions
    //
    // });
  });
});
