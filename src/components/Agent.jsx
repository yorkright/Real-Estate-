import React from 'react'
import Agentbox from './Agentbox'
import agentimage1 from '../images/s1.png'
import agentimage2 from '../images/s2.png'
import agentimage3 from '../images/s3.png'


function Agent() {
  return (
    <div className='agent'>

<div  className='a-heading'>

<h1>Agents</h1>
 <p>To deal for looking property anytime anywher anyhow.</p>
  
</div>
<div className="b-container ">

<Agentbox image={agentimage1} name="Rahul"/>
<Agentbox image={agentimage2} name="Devlops"/>
<Agentbox image={agentimage3} name="Website"/>



</div>



    </div>
  )
}

export default Agent
