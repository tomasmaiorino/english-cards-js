import React, { Component } from 'react';
import NavBar from './lib/NavBar';
import Footer from './lib/Footer';
import Contents from './lib/contents/Contents';
import Cards from './lib/cards/Cards';
import Contact from './lib/contact/Contact';
import Features from './lib/Features';
import Definition from './lib/definition/Definition';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <main className="mt-5">
          <div className="container">
            <hr className="my-5" />
            <Features />
            <hr className="my-5" />
            <Cards />
            <hr className="my-5"/>
            <Definition />
            <hr className="my-5" />
            <Contents />
            <hr className="my-5" />
            <Contact />
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
