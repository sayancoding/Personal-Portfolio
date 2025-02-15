import React, { Component } from "react";
import './layout.css';
import $ from 'jquery'
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom'

import Home from '../home/home'
import Skills from '../skills/skills'
import Works from '../../containers/works/works'
import Contact from '../../containers/contact/contact'

export default class layout extends Component {
  componentDidMount(){
    var $page = $(".page");

    $(".menu_toggle").on("click", function () {
      $page.toggleClass("shazam");
    });
    $(".content").on("click", function () {
      $page.removeClass("shazam");
    });
    $("li").on("click", function () {
      $page.toggleClass("shazam");
    });
  }
  render() {
    return (
      <Router>
        <div>
          <div className="page">
            <span className="menu_toggle">
              <i className="menu_open fa fa-bars fa-lg"></i>
              <i className="menu_close fa fa-times fa-lg"></i>
            </span>
            <ul className="menu_items">
              <li>
                <Link to="/home">
                  <i className="icon fas fa-igloo"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <i className="icon fas fa-address-card"></i>Proficiency
                </Link>
              </li>
              <li>
                <Link to="/works">
                  <i className="icon fas fa-project-diagram"></i> Works
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="icon fas fa-mail-bulk"></i> Contact
                </Link>
              </li>
            </ul>
            <main className="content">
              <div className="content_inner">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/Personal-Portfolio" exact component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/works" component={Works} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}
