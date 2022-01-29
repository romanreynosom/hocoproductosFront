import React from 'react'
import './pie.css'
import insta from "../logos/insta.svg"
import email from "../logos/email.svg"
import phone from "../logos/telephone.svg"



const Pie = () => {
    return (
        <div className='pie'>
      <div> <a className='ancla'> <img src={insta} alt=''/> Hoco Argentina</a> </div>  
       <div> <a className='ancla'><img src={email} alt='...'/>  hoco@hoco.com.ar </a>  </div>      
      <div> <a className='ancla'><img src={phone} alt='...' /> 11 354 487 213 </a>  </div>
        <h5>DIRECION: CONDARCO 567 - VILLA DEL PARQUE - CAPITAL FEDERAL</h5>
      
          </div> 
      
        
    )
}

export default Pie
