import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimage1 from "../assets/bannerimage1.jpeg";
import bannerimage2 from "../assets/bannerimage2.jpeg";
import bannerimage4 from "../assets/bannerimage4.jpeg";
import bannerimage3 from "../assets/bannerimage3.jpeg";

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
          src={bannerimage1}
          alt="Slide 1"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
          src={bannerimage2}
          alt="Slide 2"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
                   src={bannerimage3}

          alt="Slide 3"
          className="slide-image"
        />
      </div>
      <div className="slide">
        <img
                   src={bannerimage4}

          alt="Slide 3"
          className="slide-image"
        />
      </div>
    </Slider>
  );
}

export default Carousel;
