import React from 'react';
import './navbar.css';
import maquina from '../img/carrucel/maquina.jpg';
import telefono3 from '../img/carrucel/telefono3.jpg';
import telefono from '../img/carrucel/telefono.jpg'


 


const NavBar  = () => {
    
    return (
      <div className='NavBar'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src={maquina} className="d-block w-30" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Lo nuevo en Proteccion</h2>
            <p>Diseños Inovadores</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={telefono3} className="d-block w-30" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Recistentes</h2>
            <p>Facil instalacion</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={telefono} className="d-block w-30" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h2>Continua Actualizacion</h2>
            <p>Olvidate del Sobre Stock</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
     
    </div>

      </div>
      
  
      
    )

}



export default NavBar


