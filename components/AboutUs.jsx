import React, { useState } from 'react'
import 'react-fancy-circular-carousel/FancyCarousel.css'
import FancyCarousel from 'react-fancy-circular-carousel'

const AboutUs = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = ['https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214625/em2apsqlquce2shrljtm.png', 
      'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214626/qgslccllm3rcim5of6ys.png', 
      'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214634/eoaf8ulqk9kqk7xevhfw.png', 
      'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214637/szuh1pcknwygut96aize.png', 
      'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214640/glfh4unhmrvuhxeu4j10.png', 
      'https://res.cloudinary.com/di1qhxfqv/image/upload/v1719214646/rqgcetwufdeefabcpg0d.png'];
    const info = ["Quality Craftsmanship", "Cutomer Satisfaction", "Timeless Elegance", 
        "Authenticity & Trust", "Innovative Design", "Sustainable Luxury"];
    const desc = [
        "We take pride in our artisanal craftsmanship, ensuring every piece of jewelry is a work of art, meticulously crafted to perfection.",
        "Our customers are our greatest treasures. We are committed to providing personalized service and ensuring a memorable shopping experience.",
        " We believe in creating timeless pieces that transcend trends, offering our customers jewelry that remains beautiful and relevant for generations.",
        "We guarantee the authenticity of our products, fostering trust through transparency and ethical practices in every aspect of our business.",
        "We embrace innovation in design, continually pushing the boundaries to bring unique, cutting-edge jewelry that speaks to modern sensibilities.",
        "We are dedicated to sustainable luxury, sourcing materials responsibly and prioritizing eco-friendly practices to protect our planet for future generations."
    ]
    
  return (
    <>
    <div className="aboutus">
        <div className="aboutus-title">
          <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt=""  style={{transform: "scaleX(-1)" }} />
          <h2>About Us</h2>
          <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt="" />
        </div>
        <div className="aboutus-main">
          <div className="aboutus-image">
            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213515/ievufzavkvdskyhgu2bx.png' alt="" />
          </div>
          <div className='aboutus-text'>
            <p>
              Choksi Shamalji Vallabhji was established in 1947, Junagadh. Years of Legacy, Customer Satisfaction and the drive to deliver
              exquisite jewellery has helped us reach thousands of customers and set our mark in the Indian Jewellery market. We take great pride 
              in offering a jewellery shopping experience like no other, and we strive to win a million more hearts with our exquisite and unique
              designs paralleled with the highest quality of gold, silver and diamonds. We believe in "Atithi Devo Bhavah", the famous Indian belief
              that translates to 'Guests are God' and we strive on providing the best experience to our customers.
            </p>
          </div>
        </div>
    </div>
    <div className="aboutus">
        <div className="aboutus-main">
            <div className='aboutus-text-2'>
                <p>
                    At Choksi Shamalji Vallabhji, our customers are at the heart of everything we do. We believe in building lasting relationships through exceptional 
                    service and unparalleled quality. Each piece of jewelry we offer is meticulously crafted, reflecting our commitment to excellence and attention to detail. 
                    We take pride in using the finest materials, ensuring that every creation meets our high standards. Our dedicated team is always here to provide personalized 
                    service, helping you find the perfect piece that resonates with your unique style and story. 
                </p>
            </div>
            <div className="aboutus-image-2">
                <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213517/mphrz0ykecxymlkd9jpe.png' alt="" />
            </div>
        </div>
    </div>
    <div className="aboutus-title">
          <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt=""  style={{transform: "scaleX(-1)" }} />
          <h2>Our Values</h2>
          <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt="" />
    </div>
    <div className="cc-wrapper">
      <div className="carousel circular-carousel">
          <FancyCarousel 
              images={images}
              carouselRadius={screen.width < 580 ? 120 : 200}
              centralImageRadius={screen.width < 580 ? 65 : 100}
              peripheralImageRadius={screen.width < 580 ? 35 : 50}
              setFocusElement={setFocusElement}
              autoRotateTime={3}
              borderHexColor={'7f5104'}
          />
          <div className="info-box-wrapper">
              <h1>{info[focusElement]}</h1> 
              <p>{desc[focusElement]}</p>
          </div>
      </div>
    </div>
    

    </>
  )
}

export default AboutUs