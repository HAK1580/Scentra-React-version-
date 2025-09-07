import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = ({search,setSearch}) => {
  return (
    <>
 <div className="search-box-div">
  <div className="search-box">
 <input className='search-here' type="search" placeholder='Search'/>
 <div className="search-icons">

 <img width={35} src="/Scentra-React-version-/IMGS/icons/search.svg" alt="" />
 <img  onClick={()=>setSearch(!search)} width={45} src="/Scentra-React-version-/IMGS/icons/cross.svg" alt="" />
 </div>


  </div>
     

 </div>
    </>
  )
}

export default Search