import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TokenService from "../services/TokenService";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getMenteesId = this.getMenteesId.bind(this);
    this.getMentorsId = this.getMentorsId.bind(this);
  }
  componentDidMount() {
    this.getMentorsId();
  }

  getMentorsId() {
    axios("http://localhost:3000/mentors", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        console.log("from getMentorsId", resp);
        this.setState({ mentorsIdObjects: resp.data }, this.getAllMentorInformation);
      })

      .catch(err => console.log(err));
  }


  getAllMentorInformation(){
      axios("http://localhost:3000/users/", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: {
        mentorsIdObjects: this.state.mentorsIdObjects
      }
    })
      .then(resp => {
        console.log("from getMenteesId", resp)
    })
      .catch(err => console.log(err));
  }

  getMenteesId() {
    axios("http://localhost:3000/mentees", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: {
        mentorsIdObjects: this.state.mentorsIdObjects
      }
    })
      .then(resp => {
        console.log("from getMenteesId", resp)
    })
      .catch(err => console.log(err));
  }
  render() {
    console.log("from dashboard", this.props);
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

        <h1> Welcome to your dashbard</h1>
      </div>
    );
  }
}
