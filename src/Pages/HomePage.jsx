import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import Headline from '../Components/Headline'
import SliderHero from '../Components/SliderHero'
import ProductCollections from '../Components/ProductCollections'
import '../App.css'

const HomePage = () => {

   const[hero,setHero]=useState(false)

  return (
    <div>

     <Headline />  
     <Navbar hero={hero} setHero={setHero} />
    <SliderHero  hero={hero} setHero={setHero}   /> 
     <ProductCollections />
    
           

    </div>
  )
}

export default HomePage