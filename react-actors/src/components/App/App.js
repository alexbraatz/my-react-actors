import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../Axbout/About'; 
// Axbout is named simply for my components file tree order - easier for me to visulaize
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
