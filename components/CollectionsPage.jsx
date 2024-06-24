import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CollectionBG1 from 'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213423/h35mb6cimcp3wndfixzx.png'
import CollectionBG2 from 'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213428/v0jylwtyttjh0xacj6fv.png'
import CollectionBG3 from 'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213431/ivefrayeox3wpg8f0h3t.png'

const CollectionsPage = () => {
  return (
    <>
        <div className="heroCarousel">
            <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                <div>
                    <img src={CollectionBG1} alt="banner1" />
                </div>
                <div>
                    <img src={CollectionBG2} alt="banner2" />
                </div>
                <div>
                    <img src={CollectionBG3} alt="banner3" />
                    
                </div>
            </Carousel> 
        </div>
    </>
  )
}

export default CollectionsPage