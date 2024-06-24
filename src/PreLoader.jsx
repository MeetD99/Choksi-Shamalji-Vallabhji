import React from 'react'
import './PreLoader.css'

const PreLoader = () => {
  const LogoURL = 'https://res.cloudinary.com/di1qhxfqv/image/upload/v1718630691/ejsuarmodhmnpzr5viyr.png'
  return (
    <div className='preloader'>
        <div className="loader_img">
          <div className="spinner"></div>
          <img src={LogoURL} alt="" width={10} />
        </div>
    </div>
  )
}

export default PreLoader