import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Kamoshida",
      postImage:
        "http://i.imgur.com/OLWtAsD.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Cassie_Cage10",
      postImage:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/05/PhantomThieves.2.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "DeadPool",
      postImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d4651e3-4bd7-408a-a2b1-f5266f8fb2ea/d9rcb3d-fb2b27b1-23a5-438a-9865-bf0ff5b8f195.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkNDY1MWUzLTRiZDctNDA4YS1hMmIxLWY1MjY2ZjhmYjJlYVwvZDlyY2IzZC1mYjJiMjdiMS0yM2E1LTQzOGEtOTg2NS1iZjBmZjViOGYxOTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P2wPDFzkefO1Q_RlfnMAo7spub7jBrQpmH28nzJfNXE",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "Shido",
      postImage:
        "http://i.imgur.com/OLWtAsD.jpg",
      likes: 999,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
