import React from 'react'
import { useState } from 'react';
import { Dot, Dotdiv, LeftArrow, RightArrow, SContent, SH3, SIMG, Slide, SlideProfile, SliderContainer, STTL } from './ImageSliderelement';



const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious =()=>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide? slides.length-1: currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const goToNext =()=>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }


  return (
    <>
    <SliderContainer>
        <LeftArrow onClick={goToPrevious}>&#9665;</LeftArrow>
        <RightArrow onClick={goToNext}>&#9655;</RightArrow>
        <Slide>
            <p>{slides[currentIndex].testimonies}</p>
            <SlideProfile>
                <SIMG src={slides[currentIndex].image}/>
                <SContent>
                    <SH3>{slides[currentIndex].name}</SH3>
                    <STTL>{slides[currentIndex].title}</STTL>
                </SContent>
            </SlideProfile>
        </Slide>
        <Dotdiv>
            {slides.map((slide, slideIndex)=>{
                <Dot key={slideIndex}>o</Dot>
            })}
        </Dotdiv>
    </SliderContainer>
    
</>
  )
}

export default ImageSlider;