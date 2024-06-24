import React from 'react'
import Navbar from './Navbar'
import CarouselMain from './CarouselMain'
import Collection from './Collection'
import About from './About'
import Border from './Border'
import SendMessage from './SendMessage'

const Home = () => {
  return (
    <>
      <CarouselMain />
      <Collection />
      <About />
      <SendMessage />
    </>
  )
}

export default Home