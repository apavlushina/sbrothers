import React from "react";
export default function PostsList(props) {
  return (
    <div>
      <h1>All Posts</h1>
      <p>There are {props.posts.length} posts available.</p>

      <ul>
        {props.posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
