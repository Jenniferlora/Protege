import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";
import MentorsDash from "../components/MentorsDash";
import MenteesDash from "../components/MenteesDash";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_data:[],
      menteesdata: [],
      mentorsdata: []
    };

    this.getMentorsInfo = this.getMentorsInfo.bind(this);
    this.getMenteesInfo = this.getMenteesInfo.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    this.checkLogin();
    this.getMentorsInfo();
    this.getMenteesInfo();
  }
  
  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => {
    console.log('from checkLogin', resp.data)
    this.setState({
      user_data:resp.data
    });
  })
    .catch(err => console.log(err));
  }

  getMentorsInfo() {
    axios("http://localhost:3000/mentors", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        console.log("from getMentorsInfo", resp.data);
        this.setState({
          mentorsdata: resp.data
        });
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
        console.log("from getMenteesInfo", resp.data);
        this.setState({
          menteesdata: resp.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log("from dashboard:mentorsdata", this.state.mentorsdata);
    console.log("from dashboard:menteesdata", this.state.menteesdata);
    console.log("from dashboard haaaiiiiiii", this.props.user_data);

    let menteesOrMentorsElement;
    if (this.state.user_data.category === "mentor") {
      menteesOrMentorsElement = (
        <MenteesDash
          menteesdata={this.state.menteesdata}
          {...this.props}
          getMenteesInfo={this.getMenteesInfo}
        />
      );
    } else if (this.state.user_data.category === "mentee") {
      menteesOrMentorsElement = (
        <MentorsDash
          mentorsdata={this.state.mentorsdata}
          {...this.props}
          getMentorsInfo={this.getMentorsInfo}
        />
      );
    } else {
      menteesOrMentorsElement = "loading";
    }

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
        {menteesOrMentorsElement}
      </div>
    );
  }
}
