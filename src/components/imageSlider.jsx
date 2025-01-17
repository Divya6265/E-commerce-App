import React, { useEffect, useState } from 'react'

function imageSlider({ images }) {


   const [currentIndex, setCurrentIndex] = useState(0);

   const len = Object.values(images).length;

   const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % len)
   }

   const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + len) % len)
   }
   return (
      <>
         <div className="product__image">
            <div className="images__slider">
               {Object.values(images).map((image, index) => {
                  return <img src={image} alt={`${image}`} key={index} className={`image__slide ${currentIndex == index ? "active" : " "}`} />
               })}
            </div>

            <div className="controllers__container">
               <button className="prev__btn" onClick={handlePrev}> prev </button>
               <div className="dots__nav">
                  {Object.values(images).map((image, index) => {
                     return <button key={index} className={`dot ${currentIndex == index ? "active" : " "}`} onClick={() => setCurrentIndex(index)} />
                  })}
               </div>
               <button className="next__btn" onClick={handleNext}> next </button>

            </div>
         </div>
      </>
   )
}

export default imageSlider