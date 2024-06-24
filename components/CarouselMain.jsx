import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Banner1 from '../graphics/banner1.png'
import Banner2 from '../graphics/banner2.png'
import Banner3 from '../graphics/banner3.png'


export default function CarouselMain() {
  return (
    <div className="heroCarousel">
      <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
      <div>
        <img src={Banner1} alt="banner1" />
      </div>
      <div>
        <img src={Banner2} alt="banner2" />
      </div>
      <div>
        <img src={Banner3} alt="banner3" />
        
      </div>
    </Carousel> 
    </div>
    
    
  )
}
