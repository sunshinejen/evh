import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/aboutpage/About";
import Contact from "./components/Contact";
import News from "./components/News";
import Resources from "./components/Resources";
import Services from "./components/Services";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>EVH</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/services" component={Services}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;