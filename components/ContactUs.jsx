import React from 'react'
import Peacock from '../graphics/peacock.png'
import SendMessage from './SendMessage'

const ContactUs = () => {
  return (
    <>
        <div className="aboutus-title">
          <img src={Peacock} alt=""  style={{transform: "scaleX(-1)" }} />
          <h2>Contact Us</h2>
          <img src={Peacock} alt="" />
        </div>
        <div className="contact-details-wrapper">
            <div className="c-row">
                <div className="c-info">
                    <i class="fa-solid fa-location-dot"></i>
                    <h2>Address</h2>
                    <p>103/104, Fortune Plaza, <br />M.G Road, Ranavav Chowk,<br /> Junagadh - 362001</p>
                </div>
                <div className="c-info">
                    <i class="fa-solid fa-phone-volume"></i>
                    <h2>Contact Details</h2>
                    <ul>
                        <li>Email: <a href="mailto:csv.jnd@gmail.com">csv.jnd@gmail.com</a></li>
                        <li>Telephone: <a href="tel:02852650286">0285-2650286</a></li>
                        <li>Phone Number: <a href="tel:+919426514182">+91-9426514182</a></li>
                    </ul>
                </div>
                <div className="c-info">
                    <i class="fa-solid fa-user-plus"></i>
                    <h2>Follow Us on</h2>
                    <ul>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://instagram.com/choksi_shamalji_vallabhji?igshid=MzRlODBiNWFlZA==" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://www.facebook.com/profile.php?id=100063988777446&mibextid=LQQJ4d" target="_blank">
                                <i class="fa-brands fa-facebook" ></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="map-wrapper">
            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.8089993140024!2d70.46015797498828!3d21.515200070894107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580192de77ee57%3A0x4a89c7c70f003d98!2sCHOKSI%20SHAMALJI%20VALLABHJI!5e0!3m2!1sen!2sin!4v1719073887574!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>

        <SendMessage />
    </>
    
  )
}

export default ContactUs