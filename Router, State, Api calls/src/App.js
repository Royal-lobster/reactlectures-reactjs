import React from "react";
import "./Styles.css";
import { Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Message from "./Components/Message";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Users from "./Components/Users";
function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Dashboard} exact />
      <Route path="/about" component={About} />
      <Route path="/message/:msg" component={Message} />
      <Route path="/message/" component={Message} exact />
      <Route path="/contact" component={Contact} />
      <Route path="/users" component={Users} />
      <Footer />
    </div>
  );
}

export default App;
