import React from 'react';
import Border from './Border';
import Necklaces from '../graphics/Necklaces.png';
import Earrings from '../graphics/Earings.png';
import PendantSets from '../graphics/PendantSets.png';
import Rings from '../graphics/Rings.png';
import Bracelets from '../graphics/Bracelets.png';
import SilverOrnaments from '../graphics/SilverOrnaments.png';
import Explore1 from '../graphics/Explore1.png';
import Explore2 from '../graphics/Explore2.png';
import Explore3 from '../graphics/Explore3.png';
import Explore4 from '../graphics/Explore4.png';
import Explore5 from '../graphics/Explore5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Collection() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ],
  };
  return (
    <>
      <Border />
      <div className="mosaic-container">
        <div className="image-mosaic">
          <div className="col1">
            <div className="photo">
              <img src={Explore1} alt="" />
            </div>
            <div className="photo">
            <img src={Explore4} alt="" />
            </div>
          </div>
          <div className="col2">
            <div className="photo">
              <img src={Explore3} alt="" />
            </div>
            
          </div>
          <div className="col3">
            <div className="photo">
              <img src={Explore2} alt="" />
            </div>
            <div className="photo">
              <img src={Explore5} alt="" />
            </div>
          </div>
        </div>
        <div className="explore-text">
          <div className="explore"><p>EXPLORE</p></div>
          <div className="collection"><p>Our Collection!</p></div>
        </div>
        <div className="card-slider">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="card">
                  <Link to={"/"}>
                    <img src={Necklaces} alt="Necklaces" />
                    <h3>Necklaces</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src={Rings} alt="Rings" />
                    <h3>Rings</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src={Bracelets} alt="Bracelets" />
                    <h3>Bracelets</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src={PendantSets} alt="Pendant Sets" />
                    <h3>Pendant Sets</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src={Earrings} alt="Earrings" />
                    <h3>Earrings</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src={SilverOrnaments} alt="Silver Ornaments" />
                    <h3>Silver Ornaments</h3>
                  </Link>
                </div>
            </Slider>
          </div>
        </div>
      </div>
      
      <Border />
    </>
  );
}

export default Collection;
