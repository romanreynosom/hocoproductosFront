import React from 'react'
import back from "../logos/back.svg"
import "./volver.css"


function Volver() {
    return (
        <div className='pie'>
        <div>
         <a className='ancla' href='./'><img src={back} alt='' /> volver</a>
         </div> 
        </div>
    )
}

export default Volver
