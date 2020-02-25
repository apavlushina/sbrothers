import request from "superagent";
import { auth } from "../auth.js";

const baseUrl = "http://178.62.198.162/api/posts";

export const ALL_POSTS = "ALL_POSTS";

function allPosts(payload) {
  return {
    type: ALL_POSTS,
    payload
  };
}

export const getPosts = () => (dispatch, getState) => {
  const state = getState();
  const { posts } = state;

  if (!posts.length) {
    request(`${baseUrl}`)
      .set("token", `${auth}`)
      .then(response => {
        const action = allPosts(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

export const ADD_POST = "ADD_POST";

function addPost(payload) {
  return {
    type: ADD_POST,
    payload
  };
}

export const createPost = data => dispatch => {
  console.log("data to send", data);
  request
    .post(`${baseUrl}`)
    .set("token", `${auth}`)
    .send(data)
    .then(response => {
      const action = addPost(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
