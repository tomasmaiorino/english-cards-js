import React, { Component } from 'react';

import './NavBar.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

const pStyle = {

};

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div className="container">
            <a className="navbar-brand" href="">EG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto smooth-scroll">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#best-features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cards">Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#grammar">Grammar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link"><i className="fa fa-facebook"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><i className="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="intro"
          style={pStyle}
          className="view hm-black-strong">
          <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 text-center">
                <h2 className="display-3 font-bold white-text mb-2">English Cards</h2>
                <hr className="hr-light" />
                <h4 className="white-text my-4">Improving your english vocabulary and skills.</h4>
                <button type="button" href="#best-features" className="btn btn-outline-white">Read more<i className="fa fa-book ml-2"></i></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
