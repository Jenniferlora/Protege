import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Register extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    // take note how the onSubmit method is passed down to the UserForm
    // as a prop
    return (
      <div>
        <h1> Mentors</h1>
      </div>
    )
  }
}
