import React from 'react';
import './logo.css'
import hoco from './hoco.png'
import  { Link } from 'react-router-dom';

function Logo() {
  return <div className='logo'>
  <Link to="/">  <img src={hoco} /> </Link>

  </div>
}

export default Logo;
