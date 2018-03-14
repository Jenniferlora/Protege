import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";

export default class MenteesDash extends Component {
  constructor(props){
    super(props)

}
  render() {
    console.log("from MenteesDashboad", this.props);
    console.log(this.props.menteesdata);
    return (
      <div>
      <h3>Mentors Dashboard</h3>
      {this.props.menteesdata.map((el,i)=>{
        return (
          <p>{el.username}</p>
          )
      })}
      </div>
    )}

  }