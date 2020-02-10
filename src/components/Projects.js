import React from 'react';
import ProjectCard from './ProjectCard'
import { carouselData } from './CarouselData';

const Projects = () => {
    return(
        <section className='projects' id='projects'>
            <h2>Things I've Built</h2>
            {carouselData.map(content => <ProjectCard content={content}/>)}
            <h3>Like what you see? There's more on my <a href='https://www.github.com/julietteantoniou' target='_blank' rel="noopener noreferrer"><span>github</span></a></h3>
        </section>
    )
}

export default Projects;