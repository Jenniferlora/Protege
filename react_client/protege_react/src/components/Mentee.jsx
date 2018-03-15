import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import axios from 'axios';


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state={
      mentee:[]
    }
  }

  componentDidMount(){
    this.getItem()
  }

  getItem() {
    axios({
      url: `http://localhost:3000/mentees/${this.props.match.params.id}`,
      method: "get"
    }).then(response => {
      console.log(response.data)
      this.setState({
        mentee: response.data
      });
    });
  }

  render() {
    // take note how the onSubmit method is passed down to the UserForm
    // as a prop
    return (
      <div>
          <div className="individuals">
          <h4>Name: {this.state.mentee.full_name}</h4>
          <img url={this.state.mentee.image_url} />
          <p>Location:{this.state.mentee.location}</p>
          <p>Career: {this.state.mentee.occupation}</p>
          <p>Employer: {this.state.mentee.work}</p>
          <p>School: {this.state.mentee.school}</p>
          <p>Tags: {this.state.mentee.school}</p>
          </div>
         
      </div>

      )
  }
}
