import React from 'react'
import './Hamburger.css'
const Hamburger = () => {



  return (
    <div  className='menu'>
       <div className="nav"> 
            <ul>
                <li > <a href="/">Home</a></li>
                <li> <a href="/">All Collections</a> </li>
                <li> <a href="/">ABOUT US</a> </li>
                <li> <a href="/">CONTACTS US</a> </li>
            </ul>
        </div>
        
        <div className="line"></div>
    </div>
  )
}

export default Hamburger