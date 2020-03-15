import React, { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const ref = useRef()
  const [height, setHeight] = useState(0)
  
  useEffect(()=> {
    setHeight(ref.current.scrollHeight)
    console.log(height)
  })
  return (
    <div className="App" ref={ref}>
      {/* <Nav /> */}
      <div alt='white paint splatters on a dark gray background' className='splatter-l'>
      {/* {splatterLeft()} */}
      <img alt='white paint splatters on a dark gray background' src ='/images/splatter-left.svg' style={{width: '25vw'}} />
      <img alt='white paint splatters on a dark gray background' src ='/images/splatter-left2.svg' style={{width: '32vw', marginTop: '1550px'}}/>
      </div>
      <div className='content'>
       <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
      <div className='splatter-r'>
      <img alt='white paint splatters on a dark gray background' src='/images/splatter-right.svg' style={{width: '32vw', marginTop: '200px'}}/>
      <img alt='white paint splatters on a dark gray background' src='/images/splatter-right2.svg' style={{width: '25vw', marginTop: '750px'}}/>
       </div>
      {/* <Carousel /> */}
    </div>
  );
}

export default App;
