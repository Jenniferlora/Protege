import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.submit(data);

  }


  render() {
    return (
      <div className="background">
        <div className="loginstuff">
        <h1>Login</h1>
        <LoginForm {...this.props} submit={this.onSubmit}/>
        <p><Link to="/"><button>Back Home</button></Link></p>
      </div>
      </div>
    )
  }
}
