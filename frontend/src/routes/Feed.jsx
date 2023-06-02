import {useEffect, useState} from "react";
import React from "react";
import PostList from "../components/PostList";

export default function Feed() {
  const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("/api/feed")
		.then((res) => res.json())
		.then((data) => setPosts(data));
	}, []);

  return (
    <div className="container">
      <h2>Feed</h2>
      <div className="row justify-content-center mt-5">
        <PostList posts={posts} />
      </div>
    </div>
  )
}