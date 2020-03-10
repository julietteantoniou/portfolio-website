import React from 'react';
import { logo } from '../svg/logo'

const About = () => {
    return(
        <section className='about' id='about'>
            <div className='logo'>{logo()}</div>
            <h1>Juliette Antoniou</h1>
            <h3>Software Developer</h3>
            <p>I've had a passion for learning how things work and creating new ones for as long as I can remember. Currently, I am a Section Lead at Lambda School, guiding a team of teaching assistants and students through Lambda School's full stack bootcamp, but am looking to bring my dedication, drive, and coding skills into a new software development role.</p>
        </section>
    )
}

export default About;