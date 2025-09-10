import React from 'react'
import './SliderHero.css'
import { useState,useEffect } from 'react'
import MiddleHeadline from './MiddleHeadline'

const SliderHero = ({hero,setHero}) => {
  
 const imgs=[
    "/IMGS/Banners/1.jpg",
    "/IMGS/Banners/2.jpg",
    "/IMGS/Banners/4.jpg",
  ]
 
  const[current,setCurrent]=useState(0)
  function nextImg(){
    setCurrent((prev)=>prev===imgs.length-1?0:prev+1)
  }

  useEffect(() => {
  if (hero) return; // stop timer if hidden

  const timer = setTimeout(nextImg,7000);
  return () => clearTimeout(timer);
}, [current, imgs.length, hero]);

  
  return (
    <div >
    <div className={`hero ${hero?'hidden':""} ` }>
    <div className="slider">
        {imgs.map((image,i)=>  <img key={i} src={image} alt="" className={`${i===current?"active":""}`}/> )}
      
    <div className="herobtns">
      <button className='herobtn'  >Buy Scents</button>

    </div>
    </div>

    </div>
  
    <MiddleHeadline hero={hero} />
    

    
    </div>
  )
}

export default SliderHero
