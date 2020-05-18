import React, { Component } from "react";
import './layout.css';
import $ from 'jquery'

import Header from '../header/header'
import About from '../aboutMe/aboutMe'

export default class layout extends Component {
  componentDidMount(){
    var $page = $(".page");

    $(".menu_toggle").on("click", function () {
      $page.toggleClass("shazam");
    });
    $(".content").on("click", function () {
      $page.removeClass("shazam");
    });
  }
  render() {
    return (
      <div>
        <div className="page">
          <span className="menu_toggle">
            <i className="menu_open fa fa-bars fa-lg"></i>
            <i className="menu_close fa fa-times fa-lg"></i>
          </span>
          <ul className="menu_items">
            <li>
              <i className="icon fas fa-igloo"></i> Home
            </li>
            <li>
              <i className="icon fas fa-address-card"></i> About - Skills
            </li>
            <li>
              <i className="icon fas fa-project-diagram"></i> Works
            </li>
            <li>
              <i className="icon fas fa-mail-bulk"></i> Contact
            </li>
          </ul>
          <main className="content">
            <div className="content_inner">
             <Header/>
             <About/> 
            </div>
          </main>
        </div>
      </div>
    );
  }
}
