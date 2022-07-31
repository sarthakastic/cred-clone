import React from 'react'
import Landing from '../components/Landing'
import Header from '../components/common/Header'
import Product from "../components/ProductShowcase/Product"
import FeelSpecial from '../components/FeelSpecial'
import Experience from '../components/Experience'
import Security from '../components/Security'
import Brands from '../components/Brands'
import Peek from '../components/Peek'
import MobileScroll from '../components/mobileScroll/MobileScroll'
import Story from '../components/Story'
import Rating from '../components/Rating'
const Home = () => {
  return (<>
    <Header/>
   <Landing/>
   <Product/>
   <FeelSpecial/>
   <Brands/>
   <Experience/>
   <MobileScroll/>
   <div className="non-mobile">

   <Peek/>
   </div>
   
   <Security/>
   <Story/>
   <Rating/>
   </>
  )
}

export default Home