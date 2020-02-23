import { ADD_POST } from "../actions/posts";
import { ALL_POSTS } from "../actions/posts";

export default (state = [], action) => {
  console.log("payload", action);
  switch (action.type) {
    case ADD_POST:
      return [{ ...action.payload }, ...state];
    case ALL_POSTS:
      return [...action.payload];
    default:
      return state;
  }
};
