import React from 'react'
import aboutimage from '../images/hero.png'

function About() {
  return (
    <div className='about' >

<div className='about-model'>
  <img src={aboutimage} alt="about image"/>
</div>

<div  className='about-text'>
<h2>We Are The Best <br/> Real Estate Company </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil ea beatae nisi delectus, harum architecto ipsa molestias quis quidem inventore, sed ducimus similique velit repellat excepturi, numquam temporibus est accusamus iure! Sint soluta enim quis. Corporis cum architecto veniam?</p>

<button > View more Details</button>
</div>
        
    </div>
  )
}

export default About