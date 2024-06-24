import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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
              designs paralleled with the highest quality of gold, silver and diamonds.
            </p>
            <Link to={'/aboutus'}><button className='aboutus-btn'>Know More</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About