import React, { Component } from "react";
import Form from "./Form";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./HomePage.css";
import Home from "./Home";

class HomePage extends Component {
  render() {
    return (
      <div className="formStart">
        <BrowserRouter>
          <Link to="/home">
            <button className="button">Home</button>
          </Link>
          <Link to="/details">
            <button className="button">Form</button>
          </Link>
          <Route path="/home" component={Home} exact />
          <Route path="/details" component={Form} exact />
        </BrowserRouter>
      </div>
    );
  }
}

export default HomePage;
