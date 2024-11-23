import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'




function Properties() {
  return (
    <div className='product'>

           <div className="p-heading">
                  
                   <h3>Properties </h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, recusandae.</p>

           </div>

           <div className="product-container">

<Bproperty image={pimage1} name='In Lucknow' price='1.5 CR' />
<Bproperty image={pimage2} name='IN Munbai' price='2.3 CR' />
<Bproperty image={pimage3} name='In Bangluru' price=' 1.9 CR ' />

           </div>

    </div>
  )
}

export default Properties