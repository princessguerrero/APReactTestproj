import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <div>
          <Link to="/">Reactor</Link>
          </div>
          <div>
            <Link to="/login">Log In</Link>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
