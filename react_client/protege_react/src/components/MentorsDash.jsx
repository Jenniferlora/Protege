import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";

export default class MentorsDash extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.getMentorsInfo()
  }

  getMentorsInfo() {
    axios("http://localhost:3000/mentors", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        console.log("from getMentorsInfo", resp.data)
        this.setState({ 
          mentorsdata: resp
      })
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log("from MentorsDashboad", this.props);
    console.log(this.props.mentorsdata);
    return (
      <div>
      <h3>Mentors Dashboard</h3>
      {this.props.mentorsdata.map((el,i)=>{
      	return (
      		<h4 key={i}>{el.full_name}</h4>
      		)
      })}
      </div>
   	)}

  }





