import React from 'react';
// import Nav from './components/nav';
import About from './components/About';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import Form from './components/Fom'
import Contact from './components/Contact';
import Footer from './components/Footer';
//SVG
import { splatterLeft } from './svg/splatter-left'
import { splatterRight} from './svg/splatter-right'
import { splatterLeft2 } from './svg/splatter-left2'
import { splatterRight2} from './svg/splatter-right2'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className='splatter-l'>
      {/* {splatterLeft()} */}
      <img src ='/images/splatter-left.svg' style={{width: '25vw'}} />
      <img src ='/images/splatter-left2.svg' style={{width: '32vw', marginTop: '90vh'}}/>
      </div>
      <div className='content'>
       <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
      <div className='splatter-r'>
      <img src='/images/splatter-right.svg' style={{width: '32vw', marginTop: '50vh'}}/>
      <img src='/images/splatter-right2.svg' style={{width: '25vw', marginTop: '100vh'}}/>
       </div>
      {/* <Carousel /> */}
    </div>
  );
}

export default App;