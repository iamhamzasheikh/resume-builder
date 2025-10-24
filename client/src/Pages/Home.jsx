import React from 'react'
import Hero from '../components/Home/Hero'
import Banner from '../components/Home/Banner'
import Features from '../components/Home/Features'
import Footer from '../components/Home/Footer'
import Testimonial from '../components/Home/Testimonial'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer/>
    </>
  )
}

export default Home
