import React from 'react'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    
    const gotoTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

    return (
    <div className='top-btn' onClick={gotoTop} style={{display: isVisible ? 'block' : 'none'}}>
      <i class="fa-solid fa-circle-chevron-up" onClick={gotoTop}></i>
    </div>
  )
}

export default ScrollToTop