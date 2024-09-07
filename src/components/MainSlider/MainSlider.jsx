// import React, { useEffect, useState } from 'react';
// import './MainSlider.css';
// import SliderCards from '../SliderCards/SliderCards';

// export default function MainSlider({ slides, gallery }) {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const slidesToShow = gallery ? 5 : 3;

//     const totalSlides = slides.length;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//         }, 3300);

//         return () => clearInterval(interval); 
//     }, [totalSlides]);

//     const handleDotClick = (index) => {
//         setCurrentIndex((index + totalSlides - 1) % totalSlides);
//     };

//     const visibleSlides = [];
//     for (let i = 0; i < slidesToShow; i++) {
//         visibleSlides.push(slides[(currentIndex + i) % totalSlides]);
//     }

//     return (
//         <div className={`slider-container position-relative w-100  ${gallery ? 'gallery-mode' : ''}`}>
//             <div className="w-100 overflow-hidden">
//                 <div className="slides d-flex gap-4 py-5">
//                     {visibleSlides.map((slide, index) => (
//                         <div key={index} className="slide">
//                             {gallery ? (
//                                 <div className={`image-wrapper ${currentIndex === (index + (visibleSlides.length - 1)) % totalSlides ? 'active' : ''}`}>
//                                     <img src={slide.image} alt={`Gallery slide ${index + 1}`} />
//                                 </div>
//                             ) : (
//                                 <SliderCards cards={[slide]} />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="dots text-center">
//                 {slides.map((_, index) => (
//                     <span
//                         key={index}
//                         className={`dot d-inline-block rounded-3 mx-1 ${currentIndex === (index + totalSlides - 1) % totalSlides ? 'active' : ''}`}
//                         onClick={() => handleDotClick(index)}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useState } from 'react';
import './MainSlider.css';
import SliderCards from '../SliderCards/SliderCards';

export default function MainSlider({ slides, gallery }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5); // Default to 5 for gallery

    const totalSlides = slides.length;

    useEffect(() => {
        // Function to update the number of slides based on screen width
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width < 576) {
                setSlidesToShow(1); // Show 1 slide for screens smaller than 576px
            } else if (width < 992) {
                setSlidesToShow(2); // Show 2 slides for screens smaller than 992px
            } else {
                setSlidesToShow(gallery ? 5 : 3); // Show 5 slides for gallery mode, otherwise 3
            }
        };

        // Initial call to set the correct number of slides on load
        updateSlidesToShow();

        // Add event listener for window resize
        window.addEventListener('resize', updateSlidesToShow);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, [gallery]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3300);

        return () => clearInterval(interval); 
    }, [totalSlides]);

    const handleDotClick = (index) => {
        setCurrentIndex((index + totalSlides - 1) % totalSlides);
    };

    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
        visibleSlides.push(slides[(currentIndex + i) % totalSlides]);
    }

    return (
        <div className={`slider-container position-relative w-100  ${gallery ? 'gallery-mode' : ''}`}>
            <div className="w-100 overflow-hidden">
                <div className="slides d-flex gap-4 py-5">
                    {visibleSlides.map((slide, index) => (
                        <div key={index} className="slide">
                            {gallery ? (
                                <div className={`image-wrapper ${currentIndex === (index + (visibleSlides.length - 1)) % totalSlides ? 'active' : ''}`}>
                                    <img src={slide.image} alt={`Gallery slide ${index + 1}`} />
                                </div>
                            ) : (
                                <SliderCards cards={[slide]} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots text-center">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot d-inline-block rounded-3 mx-1 ${currentIndex === (index + totalSlides - 1) % totalSlides ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
