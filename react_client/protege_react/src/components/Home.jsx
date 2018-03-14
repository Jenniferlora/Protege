import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <div className="login_register">
        <h1>Protege</h1>
          <Link to="/login"><button>Login</button></Link>

        <Link to="/register"><button>Register</button></Link>

      </div>
      </div>
    )
  }
}
