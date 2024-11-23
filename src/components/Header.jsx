import React from 'react'
import NAVbar from './NAVbar'

function Header() {
  return (
    <div className='header ' >

<NAVbar/>



<div className='intro' >

     <p> Looking for a Properety ! </p>
     <h1><span>Buy</span>and <span>Sell </span> properties</h1>
     <p className='details'> Real estate is defined as the land and any permanent structures, 
     like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property. It differs from personal property. </p>

    <a href="#" className='header-btn'>Details </a>

</div>

    </div>
  )
}

export default Header