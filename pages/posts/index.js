import React from "react";
import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ borderBottom: "2px solid gray" }}>
            <Link href={`/posts/${post.id}`} passHref>
              <h2>
                {post.id}. {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      posts: data,
    },
  };
}
