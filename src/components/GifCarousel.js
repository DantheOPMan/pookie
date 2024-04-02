import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function importAll(r) {
  return r.keys().map(r);
}

// Automatically import all .gif files in the ../assets directory
const gifs = importAll(require.context('../assets/', false, /^\.\/pookie.*\.gif$/));


const GifCarousel = () => {
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 3000,
    slidesToShow: 6, // Adjust based on how many GIFs you want visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Adjust for how fast you want the carousel to move
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 480, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: '#F5A190'}}>
    <Slider {...settings}>
      {gifs.map((gif, index) => (
        <div key={index} style={{ userSelect: 'none', pointerEvents: 'none' }}>
          <img src={gif} alt={`Pookie ${index + 1}`} style={{ width: "100%", height: "auto", opacity: .6 }} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default GifCarousel;
