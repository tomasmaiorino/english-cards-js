import React, { Component } from 'react';
import NavBar from './lib/NavBar';
import Footer from './lib/Footer';
import HomePage from './lib/HomePage';
import Login from './lib/login/Login';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const  App = () => {
return (
  <Router>
      <div>
        <NavBar></NavBar>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
