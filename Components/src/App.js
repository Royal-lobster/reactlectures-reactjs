import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__main">
        <Body />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
