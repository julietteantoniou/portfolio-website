import React from 'react';
import Nav from './components/nav';
import About from './components/About';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import Form from './components/Fom'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Contact />
      {/* <Carousel /> */}
    </div>
  );
}

export default App;
