import React, { Component } from 'react';
import logo from './../img/logo.svg';
import Nav from './Nav';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-top">
        <Nav />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
