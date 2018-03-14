import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";

export default class MenteesDash extends Component {
  constructor(props){
    super(props)

}

componentDidMount(){
  this.props.checkLogin
}
  render() {
    console.log("from MenteesDashboad", this.props);
    console.log(this.props.menteesdata);
    console.log('haiiiiii', this.props.user_data);
    return (
      <div className="dashboard">
      <h3>Mentees Dashboard</h3>
      {this.props.menteesdata.map((el,i)=>{
        return (
          <div key={i} className="individuals">
          <h4>Name: {el.full_name}</h4>
          <div className="dashboardImage">
           <img url="{el.image_url}" />
            </div>
          <p>Location:{el.location}</p>
          <p>Career: {el.occupation}</p>
          <p>Employer: {el.work}</p>

          </div>
          )
      })}
      </div>
    )}

  }