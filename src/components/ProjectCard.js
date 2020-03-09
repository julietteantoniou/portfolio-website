import React from 'react'

const ProjectCard = ({content}) => {
    const {title, desc, img, tech, link} = content
    return(
        <div className='project-section'>
        <div className='project-section-text'>
            <a href={link} className='link' target='_blank' rel="noopener noreferrer">
            {title}
            </a>
            <p>{desc}</p>
            <div className='tech-used'>
                {tech.map(tech => <img src={tech}/>)}
            </div>
        </div>
        <div className='project-section-image'>
        <a href={link} target='_blank' rel="noopener noreferrer">
            <img src={img}/>
        </a>
        </div>
        </div>
    )
}

export default ProjectCard;