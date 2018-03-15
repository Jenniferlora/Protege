import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import axios from 'axios';


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state={
      mentor:[]
    }
  }

  componentDidMount(){
    this.getItem()
  }

  getItem() {
    axios({
      url: `http://localhost:3000/mentors/${this.props.match.params.id}`,
      method: "get"
    }).then(response => {
      console.log(response.data)
      this.setState({
        mentor: response.data
      });
    });
  }

  render() {
    // take note how the onSubmit method is passed down to the UserForm
    // as a prop
    return (
      <div>
          <div className="individuals">
          <h4>Name: {this.state.mentor.full_name}</h4>
          <img url={this.state.mentor.image_url} />
          <p>Location:{this.state.mentor.location}</p>
          <p>Career: {this.state.mentor.occupation}</p>
          <p>Employer: {this.state.mentor.work}</p>
          <p>School: {this.state.mentor.school}</p>
          <p>Tags: {this.state.mentor.school}</p>
          </div>
         
      </div>

      )
  }
}