import React from "react";
import Post from "./Post";
import "./Body.css";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="body">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Body;
