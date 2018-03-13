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
      full_name: '',
      category: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);


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
        <label>User Name
          <input 
            type="text" 
            name="username" 
            onChange={this.handleChange}
            value={this.state.username} />
        </label>
       
       <label>Name
          <input 
            type="text" 
            name="full_name" 
            onChange={this.handleChange}
            value={this.state.full_name} />
        </label>

        <label>Password
          <input 
            type="password" 
            name="password" 
            onChange={this.handleChange}
            value={this.state.password} />
        </label>

         <label>Occupation
          <input 
            type="text" 
            name="occupation" 
            onChange={this.handleChange}
            value={this.state.occupation} />
        </label>

        <label>Location
          <input 
            type="text" 
            name="location" 
            onChange={this.handleChange}
            value={this.state.location} />
        </label>

       <label>Work
          <input 
            type="text" 
            name="work" 
            onChange={this.handleChange}
            value={this.state.work} />
        </label>

        <label>School
          <input 
            type="text" 
            name="school" 
            onChange={this.handleChange}
            value={this.state.school} />
        </label>

        <label>Tags
          <input 
            type="text" 
            name="tags" 
            onChange={this.handleChange}
            value={this.state.tags} />
        </label>
         <label>Category
          <input 
            type="radio" 
            name="category" 
            onChange={this.handleChange}
            value="mentee" />
            mentee <br /> 
        
        
          <input 
            type="radio" 
            name="category" 
            onChange={this.handleChange}
            value="mentor" />
            mentor <br /> 
       </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}