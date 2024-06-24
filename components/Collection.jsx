import React from 'react';
import Border from './Border';
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
              <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213443/besfl114mbmyd9wguiqj.png' alt="" />
            </div>
            <div className="photo">
            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213503/if9g9hisgm8prfyxn7oh.png' alt="" />
            </div>
          </div>
          <div className="col2">
            <div className="photo">
              <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213501/vnwcqisfsg7wkrhgsa1v.png' alt="" />
            </div>
            
          </div>
          <div className="col3">
            <div className="photo">
              <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213452/e1id7dgw3icrpmtmfm8m.png' alt="" />
            </div>
            <div className="photo">
              <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213505/xtksb9nydaieetnv4faj.png' alt="" />
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
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213507/cxvzlbuclo8ppseivvsa.png' alt="Necklaces" />
                    <h3>Necklaces</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213512/vlrvg7if0eebq5h4pavc.png' alt="Rings" />
                    <h3>Rings</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213420/puikuigokzrfmbifn3xa.png' alt="Bracelets" />
                    <h3>Bracelets</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213510/hwpqxwbauorgb1j4dkzz.png' alt="Pendant Sets" />
                    <h3>Pendant Sets</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213437/du9e89gkhi37gzo1qeiy.png' alt="Earrings" />
                    <h3>Earrings</h3>
                  </Link>
                </div>
                <div className="card">
                  <Link to={"/"}>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213520/pc1xklafieiuis1n5rqq.png' alt="Silver Ornaments" />
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
