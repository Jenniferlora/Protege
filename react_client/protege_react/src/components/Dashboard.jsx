import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";
import MentorsDash from '../components/MentorsDash';
import MenteesDash from '../components/MenteesDash';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menteesdata:[],
      mentorsdata:[]
    };

    this.getMentorsInfo = this.getMentorsInfo.bind(this);
    this.getMenteesInfo = this.getMenteesInfo.bind(this);

  }
  componentDidMount() {
    this.getMentorsInfo()
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
          mentorsdata: resp.data
      })
      })
      .catch(err => console.log(err));
  }

    getMenteesInfo() {
    axios("http://localhost:3000/mentees", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        console.log("from getMenteesInfo", resp.data)
        this.setState({ 
          menteesdata: resp.data
      })
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log("from dashboard:mentorsdata", this.state.mentorsdata);
        console.log("from dashboard:menteesdata", this.state.menteesdata);

    return (
      <div>
        <Navbar
          {...this.props}
          login={this.login}
          checkLogin={this.checkLogin}
          authClick={this.authClick}
          register={this.register}
          logout={this.logout}
        />

        <h1> Welcome to your dashboard</h1>
         <MentorsDash mentorsdata={this.state.mentorsdata} {...this.props} getMentorsInfo = {this.getMentorsInfo} />
         <MenteesDash menteesdata={this.state.menteesdata} {...this.props} getMenteesInfo = {this.getMenteesInfo} />
      </div>
    );
  }
}
