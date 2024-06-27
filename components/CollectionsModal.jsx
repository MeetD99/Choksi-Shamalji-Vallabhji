import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import WhatsappLogo from './WhatsappLogo'

const CollectionsModal = ({category}) => {
  switch (category) {
    case "necklaces":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Necklaces</p></div>
                </div>
                <div className="heroCarousel">
                    <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493635/nd8tbln5vkf9x2nu0eaf.jpg' alt="banner1" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493634/vyy3ytjdxol9tkmbf2vc.jpg' alt="banner2" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493634/rwwoxz0bjvcjco7rxy02.jpg' alt="banner3" /> 
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493634/tcwfsudluq8nwbunungb.jpg' alt="banner4" />
                        </div>
                    </Carousel> 
                </div>
                <div className="modal-btn">
                    <Link to={'/contactus'}><button className="modal-btn-1">Contact Us</button></Link>
                    <Link to={'https://wa.me/919824226266'} target='_blank'><button className="modal-btn-2">Send us a text!</button></Link>
                </div>
            </>
        )
    case "pendantSets":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Pendant Sets</p></div>
                </div>
                <div className="heroCarousel">
                    <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493488/yc6n8ac3cfd75akeikbu.jpg' alt="banner1" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493488/ckegz6x4lviops4sbxq6.jpg' alt="banner2" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493488/bagdyq3ipgy92peppwvx.jpg' alt="banner3" /> 
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493488/skieg0mptbwsg4x1lbmz.jpg' alt="banner4" />
                        </div>
                    </Carousel> 
                </div>
                <div className="modal-btn">
                    <Link to={'/contactus'}><button className="modal-btn-1">Contact Us</button></Link>
                    <Link to={'https://wa.me/919824226266'} target='_blank'><button className="modal-btn-2">Send us a text!</button></Link>
                </div>
            </>
        )
    case "womensRings":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Women's Rings</p></div>
                </div>
                <div className="heroCarousel">
                    <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493330/qs5peiv16icamwyezzmm.jpg' alt="banner1" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493330/q8jnms7doify0sfj3plt.jpg' alt="banner2" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493330/loav4ixvaedlx2mmwp0j.jpg' alt="banner3" />
                            
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493330/lggmmd6foeard4p3onoy.jpg' alt="banner4" />
                            
                        </div>
                    </Carousel> 
                </div>
                <div className="modal-btn">
                    <Link to={'/contactus'}><button className="modal-btn-1">Contact Us</button></Link>
                    <Link to={'https://wa.me/919824226266'} target='_blank'><button className="modal-btn-2">Send us a text!</button></Link>
                </div>
            </>
        )
    case "womensBracelets":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}> 
                    <div className="collection"><p>Women's Bracelets</p></div>
                </div>
                <div className="heroCarousel">
                    <Carousel autoPlay={true} emulateTouch={true} showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493126/epsx0d7spseex1k6f7oc.jpg' alt="banner1" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493126/r05mrtgn22ycwxd1wbsw.jpg' alt="banner2" />
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493126/ubi5ixfz3sftu8qmpeqt.jpg' alt="banner3" />
                            
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719493126/f0hsqxw6epajwxfjmf1y.jpg' alt="banner4" />
                            
                        </div>
                    </Carousel> 
                </div>
                <div className="modal-btn">
                    <Link to={'/contactus'}><button className="modal-btn-1">Contact Us</button></Link>
                    <Link to={'https://wa.me/919824226266'} target='_blank'><button className="modal-btn-2">Send us a text!</button></Link>
                </div>
            </>
        )
    case "mensRings":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Men's Rings</p></div>
                </div>
            </>
        )
    case "mensBracelets":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Men's Bracelets</p></div>
                </div>
            </>
        )
    case "earrings":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Earrings</p></div>
                </div>
            </>
        )
    case "silverOrnaments":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Silver Ornaments</p></div>
                </div>
            </>
        )
    case "mensChains":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Men's Chains</p></div>
                </div>
            </>
        )
    case "goldWatches":
        return(
            <>
                <div className="explore-text" style={{marginTop: 0}}>
                    <div className="collection"><p>Gold Watches</p></div>
                </div>
            </>
        )
    default:
        return null;
  }
}

export default CollectionsModal