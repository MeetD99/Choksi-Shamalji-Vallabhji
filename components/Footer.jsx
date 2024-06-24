import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="container">
            <footer className="footer-main">
                <div className="footer-main-content">
                    
                    <div className="footer-info">
                        <h4>Useful Links</h4>
                        <ul className="list-unstyled-links">
                            <li className="d-flex">
                                <Link to={'/aboutus'}><p>About us</p></Link>
                            </li>
                            <li className="d-flex">
                                <Link to={'/collection'}><p>Browse our Collection</p></Link>
                            </li>
                            <li className="d-flex">
                                <Link to={'/'}><p>Provide feedback</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex">
                                <i className="fa-solid fa-phone"></i><a href="tel:02852650286">0285-2650286</a>
                            </li>
                            <li className="d-flex">
                                <i className="fa-solid fa-mobile-screen-button"></i><a href="tel:+919426514182">+91-9426514182</a>
                            </li>
                            <li className="d-flex">
                                <i className="fa-solid fa-envelope"></i><a href="mailto:csv.jnd@gmail.com">csv.jnd@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <h4>Locate Us</h4>
                        <ul className="list-unstyled list-unstyled-map">
                            <li className="d-flex">
                                <i className="fa-solid fa-location-dot"></i><p>103/104, Fortune Plaza <br /> MG Road, Junagadh</p>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/oqyxhJhsxwYdJ1dTA" className="d-flex" target="_blank"><i className="fa-solid fa-map-location-dot"></i><p>Get Directions</p></a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className="footer-copyright">
                    <p><Link to={'/admin'}>&#169;</Link> Choksi Shamalji Vallabhji 2023. All Rights Reserved.</p>
                    <ul className="list-unstyled-social-media">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://instagram.com/choksi_shamalji_vallabhji?igshid=MzRlODBiNWFlZA==" target="_blank">
                                <i class="fa-brands fa-instagram" style={{fontSize: '25px', textDecoration: 'none', color: 'black'}}></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://www.facebook.com/profile.php?id=100063988777446&mibextid=LQQJ4d" target="_blank">
                                <i class="fa-brands fa-facebook" style={{fontSize: '25px', textDecoration: 'none', color: 'black'}}></i>
                            </a>
                        </li>
                    </ul>
            </div>
            </footer>
        </div>
    </>
  )
}

export default Footer