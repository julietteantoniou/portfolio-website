import React from 'react';
import ProjectCard from './ProjectCard'
import { vertRule } from '../svg/vert-rule'
import { carouselData } from './CarouselData';

const Projects = () => {
    return(
        <section className='projects' id='projects'>
            <div className='vert-rule'>
                {vertRule()}
            </div>
            <h2>Things I've Built</h2>
            {carouselData.map(content => <ProjectCard content={content}/>)}
            <h3>Like what you see? There's more on my <a href='https://www.github.com/julietteantoniou' target='_blank' rel="noopener noreferrer">github</a></h3>
        </section>
    )
}

export default Projects;