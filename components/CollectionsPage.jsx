import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CollectionsPage = () => {
  return (
    <>
        <div className="heroCarousel">
            <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213423/h35mb6cimcp3wndfixzx.png' alt="banner1" />
                </div>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213428/v0jylwtyttjh0xacj6fv.png' alt="banner2" />
                </div>
                <div>
                    <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213431/ivefrayeox3wpg8f0h3t.png' alt="banner3" />
                    
                </div>
            </Carousel> 
        </div>
    </>
  )
}

export default CollectionsPage