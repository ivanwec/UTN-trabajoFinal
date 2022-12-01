import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './decks.css';
import deck1 from '../decks/deck1.jpg';
import deck2 from '../decks/deck2.jpg';
import deck3 from '../decks/deck3.jpg';

function CarroDeck() {
  return (
   <div> 
   <div className='carruseles'>
    <Carousel fade className='carrusele'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src={deck1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='t'>
          <h2 className='tituloImg'>DECKS DE MADERA</h2>
          <p className='textoImg'>CONTA CON EXPERTOS EN DISEÑO Y FABRICACIÓN</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src={deck2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='t'>
          <h2 className="tituloImg" >LO QUE SOÑAS</h2>
          <p className='textoImg'>QUEREMOS HACERLO REALIDAD</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={deck3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='t'>
          <h2 className="tituloImg" >TU PERSONALIDAD</h2>
          <p className='textoImg'>
            ELEGÍ EL ESTILO QUE VA CON VOS
          </p> </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="divHome1">
                <h1> Lumetri <span>Líderes en fabricación e instalación</span> de decks de madera y WPC</h1>
            </div>
    </div>
  );
}

export default CarroDeck;