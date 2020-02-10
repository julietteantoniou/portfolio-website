import React from 'react';

const About = () => {
    return(
        <section className='about' id='about'>
            <div className='about-top'>
            <h1>Hi, my name is <span>Juliette</span>.</h1>
            <h1>I'm a full stack software engineer based in <span>New York City</span>.</h1>
            <p>I've had a passion for learning how things work and creating new ones for as long as I can remember. I fell in love with coding and web development in the early 00's from the moment I created my first Geocities site, but as an adult shifted my focus to working with human brains rather than mexhanical ones. I graduated from Rutgers University with a BA in Psychology in 2013, but in 2018 made the decision to refocus on wed development. After many late nights coding on my own, and attending Lambda School's full stack web development bootcamp, I have honed my skills and found my passion. Currently, I am a Section Lead at Lambda School, guiding a team of teaching assistants and students through that same full stack bootcamp, but am looking to bring my dedication, drive, and coding skills into a new software development role.</p>
            </div>
            <div className='about-cta'>
            <h3>Want to find out more or discuss an opportunity?</h3>
            <h3>Check out my <a href='#projects'><span>projects</span></a> or <a href='#contact'><span>get in touch</span></a>.</h3>
            </div>
        </section>
    )
}

export default About;