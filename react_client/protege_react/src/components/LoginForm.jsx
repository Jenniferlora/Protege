import React, { Component } from 'react';
import "../App.css";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


export default class UserForm extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      username: '',
      password: '',
      location: '',
      work: '',
      school: '',
      tags: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.props.history.push('/users/dashboard')
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input 
            type="text" 
            name="username" 
            onChange={this.handleChange}
            value={this.state.username} />
        </label>
       
        <label>Password
          <input 
            type="password" 
            name="password" 
            onChange={this.handleChange}
            value={this.state.password} />
        </label>
        <button className="submit_button_login" type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}