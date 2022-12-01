import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../carousel/carrusel1.jpg';
import carrusel2 from '../carousel/carrusel2.jpg';
import carrusel3 from '../carousel/carrusel3.jpg';
import './carousel.css';


function Carrousel() {
  
  return (
    
    <div className='carrudiv'>
      <Carousel fade>
       
        <Carousel.Item interval={3000}>
          <img
          className="d-block w-100 deck"
          src={carrusel1}
          alt="First slide"/>
          <Carousel.Caption>
            <div className='t'> 
            <h2 className='tituloImg'>MUEBLES DE COCINA</h2>
              <p className='textoImg'>EXPERTOS EN DISEÑO, FABRICACIÓN E INSTALACIÓN</p></div>
          </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item interval={3000}>
          <img
          className="d-block w-100 deck"
          src={carrusel2}
          alt="Second slide"/>
          <Carousel.Caption>
            <div className='t'> 
            <h2 className='tituloImg'>ESCALERAS EN MADERA</h2>
              <p className='textoImg'>ESTRUCTURALES - CARACOL - FLOTANTES - ESCALONES</p></div>
           </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item interval={3000}>
          <img
          className="d-block w-100 deck"
          src={carrusel3}
          alt="Third slide"/>
          <Carousel.Caption>
          <div className='t'> 
            <h2 className='tituloImg'>PISOS DE MADERA</h2>
              <p className='textoImg'>MACIZOS - INGENIERIL - PREFINISHED - MULTIESTRATO</p></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;