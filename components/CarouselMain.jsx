import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'


export default function CarouselMain() {
  return (
    <div className="heroCarousel">
      <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
      <div>
        <Link to={'/collection'}><img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213405/mcuswutirrqbtqvuryxh.png' alt="banner1" /></Link>
      </div>
      <div>
        <Link to={'/collection'}><img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213406/m7tgaeerr5zcnl0xvtbt.png' alt="banner2" /></Link>
      </div>
      <div>
        <Link to={'contactus'}><img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213411/gbr8may266du6khyq2ao.png' alt="banner3" /></Link>
        
      </div>
    </Carousel> 
    </div>
    
    
  )
}
