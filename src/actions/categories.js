import request from "superagent";
// import { auth } from "../auth.js";
const auth = process.env.REACT_APP_AUTH;

export const ALL_CATEGORIES = "ALL_CATEGORIES";

function allCategories(payload) {
  return {
    type: ALL_CATEGORIES,
    payload
  };
}

export const getCategories = () => (dispatch, getState) => {
  const state = getState();
  const { categories } = state;

  if (!categories.length) {
    request(`http://178.62.198.162/api/categories`)
      .set("token", `${auth}`)
      .then(response => {
        const action = allCategories(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
