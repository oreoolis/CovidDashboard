import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from './Home';
import Weekly from './Weekly';
import Admin from './Admin';
import Locations from './Locations';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import CreateDateAdmin from './CreateDateAdmin';
import CreateCaseAdmin from './CreateCaseAdmin'
import CreateLocationAdmin from './CreateLocationAdmin';
import CovidCases from './CovidCases';
import CovidLocations from './CovidLocations';
 
class Main extends Component {
  render() {
    return (
      
        <HashRouter>
        <div>
          <br></br>
          <h1><b>KO-Vid 19</b></h1>
          <h3><u>Singapore COVID-19 Statistics</u></h3>
          <br></br>
          <div className = "text-center">
            <LoginButton></LoginButton>
            <LogoutButton></LogoutButton>
          </div>
          
          <br></br>
          <ul className="header">
            <li ><NavLink to ="/home">Today</NavLink></li>
            <li ><NavLink to ="/weekly">Weekly</NavLink></li>
            <li> <NavLink to ='/locations'>Locations</NavLink></li>
            <li><NavLink to = "/admin">Admin</NavLink></li>
            

            
          </ul>

          <div className="content">
              <Route exact path = '/home' component = {Home}></Route>
              <Route path = '/weekly' component = {Weekly}></Route>
              <Route path = '/admin' component = {Admin}></Route>
              <Route path = '/locations' component={Locations}></Route>
              <Route path = "/add-date/:id" component = {CreateDateAdmin}></Route>
              <Route path = "/add-case/:id" component = {CreateCaseAdmin}></Route>
              <Route path = "/add-location/:id" component = {CreateLocationAdmin}></Route>
              <Route path = "/covid-cases" component = {CovidCases}></Route>
              <Route path = "/covid-locations" component = {CovidLocations}></Route>
              {/* <Route path = "/update-date/:id" component={UpdateDateAdmin}></Route> */}

          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;