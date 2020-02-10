import React from 'react';
import Carousel from './Carousel';

const CarouselCard = ({content, index, activeIndex}) => {
    const {title, desc, img, tech} = content
    return(
        <div className={index == activeIndex ? 'carousel-card' : 'carousel-card active-card'}>
        <div className='carousel-text'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className='tech-used'>
                {tech.map(tech => <img src={tech}/>)}
            </div>
        </div>
        <div className='carousel-image'>
            <img src={img}/>
        </div>
        </div>
    )
}

export default CarouselCard;