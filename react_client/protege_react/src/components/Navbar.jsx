import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import TokenService from '../services/TokenService';


export default class Navbar extends Component {
  constructor(props) {
    super(props);


  }
  // just delete the token
  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
    this.props.history.push("/")
    
  }



  render() {
    console.log('form Navbar.js', this.props)
    return (
      <div>
          <p><button onClick={this.logout.bind(this)} >Logout</button></p>

         </div>
       
      
    )
  }
}

         //  <button onClick={this.props.authClick.bind(this)}>Weird Button</button>
         // <p><button onClick={this.props.checkLogin.bind(this)}>Check If Logged In</button></p>