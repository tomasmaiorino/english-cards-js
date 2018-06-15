import React from "react";
import Contents from './contents/Contents';
import Cards from './cards/Cards';
import Contact from './contact/Contact';
import Features from './Features';
import Definition from './definition/Definition';

const HomePage = () => {
    return (
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
    )
}
export default HomePage;