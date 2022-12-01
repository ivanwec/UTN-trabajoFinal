import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../decks/decks.css';
import muebles1 from '../muebles/muebles1.jpg'
import muebles2 from '../muebles/muebles2.jpg'
import muebles3 from '../muebles/muebles3.jpg'


function Muebles () {
    return (   <div> 
        <div>
         <Carousel fade>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100 imagenescarru"
               src={muebles1}
               alt="First slide"
             />
             <Carousel.Caption>
               <div className='t'>
               <h2 className='tituloImg'>MUEBLES DE COCINA</h2>
               <p className='textoImg'>CONTA CON EXPERTOS EN DISEÑO Y FABRICACIÓN</p></div>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100 imagenescarru"
               src={muebles2}
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
               className="d-block w-100 imagenescarru"
               src={muebles3}
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
                     <h1> Lumetri <span>Líderes en fabricación e instalación</span> de muebles de cocina</h1>
                 </div>
         </div>
         )

        
}
export default Muebles