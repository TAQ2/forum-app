import { combineReducers } from "redux";

import comments from "./comments";
import posts from "./posts";
import userMetrics from "./userMetrics";

export default combineReducers({
  posts,
  comments,
  userMetrics
});
