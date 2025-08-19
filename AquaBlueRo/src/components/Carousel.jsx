import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 1300, // Slide transition speed (in ms)
    slidesToShow: 1, // Only one slide at a time
    slidesToScroll: 1, // One slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 200, // Time interval for autoplay (in ms)
    swipe: true, // Enable swipe gestures
    touchMove: true, // Enable touch move for swiping
    arrows: true, // Show arrows for navigation
    centerMode: true, // Center the active slide
    centerPadding: "0", // Remove padding around the centered slide
    adaptiveHeight: true, // Adjust height according to content
    fade: true,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img
          src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Slide 1"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
          src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Slide 2"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
          src="https://images.pexels.com/photos/103567/pexels-photo-103567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Slide 3"
          className="slide-image"
        />
      </div>
    </Slider>
  );
}

export default Carousel;
