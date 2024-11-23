import React from 'react'
import logo from '../images/logo1.png'

function NAVbar() {
  return (
    
    <nav>
                    <a href="#" className='logo'>

                           <img src={logo} alt="logo" />
                    </a>
                    <input className='menu-btn' type='checkbox' id='menu-btn'/>
                    <label className='menu-icon' for='menu-btn'>
                      <span className='nav-icon'> </span>
                    </label>
                    <ul className='menu' >
                      <li> <a href="single-page aplication.jsx" className='active'> Home  </a> </li>
                      <li> <a href=""> Abourt </a> </li>
                      <li> <a href="#"> Agents  </a> </li>
                      <li> <a href="#"> Property  </a> </li>
                      <li> <a href="#"> Contact  </a> </li>

                    </ul>
                    <a href="#" className='property'> Properties And Buy Home </a>

    </nav>

  )
}

export default NAVbar