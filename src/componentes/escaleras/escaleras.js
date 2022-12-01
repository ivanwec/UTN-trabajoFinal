import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../decks/decks.css';
import escalera1 from '../escaleras/escalera1.jpg'
import escalera2 from '../escaleras/escalera2.jpg'
import escalera3 from '../escaleras/escalera3.png'


function Escaleras () {
    return (   <div> 
        <div>
         <Carousel fade>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100 deck"
               src={escalera1}
               alt="First slide"
             />
             <Carousel.Caption>
               <div className='t'>
               <h2 className='tituloImg'>ESCALERAS DE MADERA</h2>
               <p className='textoImg'>CONTA CON EXPERTOS EN DISEÑO Y FABRICACIÓN</p></div>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100 deck"
               src={escalera2}
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
               className="d-block w-100 deck"
               src={escalera3}
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
                     <h1> Lumetri <span>Líderes en fabricación e instalación</span> de escaleras de madera</h1>
                 </div>
         </div>
         
         )

        
}
export default Escaleras