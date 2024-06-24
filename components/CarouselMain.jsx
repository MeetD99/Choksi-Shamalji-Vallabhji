import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


export default function CarouselMain() {
  return (
    <div className="heroCarousel">
      <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
      <div>
        <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213405/mcuswutirrqbtqvuryxh.png' alt="banner1" />
      </div>
      <div>
        <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213406/m7tgaeerr5zcnl0xvtbt.png' alt="banner2" />
      </div>
      <div>
        <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213411/gbr8may266du6khyq2ao.png' alt="banner3" />
        
      </div>
    </Carousel> 
    </div>
    
    
  )
}
