import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  // useQuery handles fetching, caching, and updating
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts", fetchPosts);
    async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    }

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
