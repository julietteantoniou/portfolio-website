import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard'
import { carouselData } from './CarouselData';

const Carousel = () => {

    const [active, setActive] = useState(0);

    const selectSlide = (index) => setActive(index);

    const back = () => {
        //e.preventDefault()
        let index = active
        let slidesLength = carouselData.length
        if(index < 1){
            index = slidesLength
        }
        --index
        setActive(index)
    }

    const next = () => {
        let slidesLength = carouselData.length - 1
        if(active === slidesLength){
            setActive(0)
        }
        else if (active < slidesLength){
            setActive(active + 1)
        }
    }

  
    const interval = () => {
        setInterval(() => {
        next()
      }, 1000);
      return () => clearInterval(interval);
    }
    interval()
  

    return(
        <div className='carousel'>
            <div className='carousel-cards'>
            {carouselData.map((content, index) => <CarouselCard content={content} index={index} activeIndex={active}/> )}
            </div>
            <div className='carousel-buttons'>
                <button onClick={(e)=>back(e)}>Back</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Carousel;

// const [focus, setFocus] = useState(1);

// const slides = document.getElementsByClassName('carousel-card');
// console.log(slides)

// useEffect(() => {
//     showSlides(focus)
//     console.log(slides[0])
// }, [slides])

// const slideNav = (n) => {
//     showSlides(focus + n)
//     setFocus(focus + n)
// }

// const showSlides = (n) => {
//     let i;
//     console.log('n', n, 'focus', focus)
//     //dot querySelector here
//     if (n > 3){
//         setFocus(1)
//     }
//     if (n < 1){
//         setFocus(slides.length)
//     }
//     for(i=0; i < slides.length; i++){
//         slides[i].style.display = 'none'
//     }
//     slides[focus -1].style.display = 'block'
// }