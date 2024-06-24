import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CollectionBG1 from '../graphics/collection-banner.png'
import CollectionBG2 from '../graphics/collection-banner2.png'
import CollectionBG3 from '../graphics/collection-banner3.png'

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