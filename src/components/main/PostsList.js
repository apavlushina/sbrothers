import React, { useState } from "react";
export default function PostsList(props) {
  const [count, loadMore] = useState(4);

  const formatDate = date => {
    let newDate = [];
    newDate = [
      "0" + date.getDate(),
      "0" + (date.getMonth() + 1),
      "" + date.getFullYear()
    ].map(component => component.slice(-2));

    return newDate.join(".");
  };

  return (
    <div>
      <ul>
        {props.posts.slice(0, count).map(post => {
          return (
            <li key={post.id}>
              <img src={post.img_url} alt={post.title}></img>
              <p>{post.category && post.category.name}</p>
              <p>{formatDate(new Date(post.created_at))}</p>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          );
        })}
      </ul>
      {count < props.posts.length && (
        <button onClick={() => loadMore(count + 4)} type="button">
          Load more posts
        </button>
      )}
    </div>
  );
}
