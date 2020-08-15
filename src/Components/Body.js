import React from "react";
import Post from "./Post";
import "./Body.css";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="body">
      <div className="body__post">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="body__sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Body;
