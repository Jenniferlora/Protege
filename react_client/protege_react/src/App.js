import React, { Component } from 'react';
import { BrowserRouter, Redirect, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Mentors from './components/Mentors';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import TokenService from './services/TokenService';
import Calendar from './components/Calendar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    
    this.state ={
      // user_data: '',
      logged_in: false
    }
  
  // this.checkLogin = this.checkLogin.bind(this)
  this.login = this.login.bind(this)
  this.authClick = this.authClick.bind(this)
  this.register = this.register.bind(this)
  this.checkUserCategory=this.checkUserCategory.bind(this)
  // this.logout = this.logout.bind(this)

  }
  // api call for creating a new user
  // note that TokenService.save with the token is called
  // may also want to setState with the user data and
  // whether or not the user is logged in


  register(data) {
    console.log(data)
    axios('http://localhost:3000/users', {
      method: "POST",
      data
    }).then(resp => {
      console.log('from register in App.js', resp.data)
      TokenService.save(resp.data.token);
      this.history.push("/login");
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    console.log('from login', data)
    axios('http://localhost:3000/users/login', {
      method: "POST",
      data
    }).then(resp => {
      console.log('from login in App.js', resp.data.token)
      TokenService.save(resp.data.token);
      this.setState({
        user_data:resp.data.user,
        logged_in:true
      })
      this.checkUserCategory();
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // calling a restricted route on the server
  // the important part is setting the Authorization header
  // with the token retrieved from the TokenService
  authClick(ev) {
    ev.preventDefault();
    axios('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log('from authClick', resp))
  
    .catch(err => console.log(err));
  }

  // just delete the token moved to Navbar
  // logout(ev) {
  //   ev.preventDefault();
  //   TokenService.destroy();
  //   this.history.push("/")


  // }

  // checkLogin() {
  //   axios('http://localhost:3000/isLoggedIn', {
  //     headers: {
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //   }).then(resp => console.log('from checkLogin', resp))
  //   .catch(err => console.log(err));
  // }


  checkUserCategory(){
    console.log('from checkUserCategory', this.state.user_data)
  }



  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
           
            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
            )} />
          
            <Route exact path="/login" component={(props) => (
              <Login {...props}  submit={this.login.bind(this)} />
            )} />
            
            <Route exact path="/users/calendar" component={(props) => (
              <Calendar {...props} />
            )} />

            <Route exact path="/users/dashboard" component={(props) => (
              <Dashboard {...props} user_data={this.state.user_data} />
            )} />

            <Route exact path="users/mentors" component={Mentors} />
                     

          </Switch>
        
        </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
    // <div>
    //       Weird button: <button onClick={this.authClick.bind(this)}>Weird Button</button>
    //             <p><button onClick={this.checkLogin.bind(this)}>Check If Logged In</button></p>

    //       <p><button onClick={this.logout.bind(this)} >Logout</button></p>
    //     </div>