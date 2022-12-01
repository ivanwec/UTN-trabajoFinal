import React, {  useState } from "react";
import "./pregunta.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faCircleCheck, faHandHoldingDollar, faPaintBrush} from '@fortawesome/free-solid-svg-icons';

const Pregunta = () => {
    

    let texto =  <div className="divHome3">
            
    <div className="divCajaHome"> 
    <div className="divIconHome"> <FontAwesomeIcon icon={faUsers} /> </div>
        <h4> PROFESIONALES</h4>
        <p>Contarás con nuestro equipo de profesionales para diseñar, presupuestar, fabricar e instalar tu proyecto.</p>
    </div>
        
    
    <div className="divCajaHome"> 
    <div className="divIconHome"> <FontAwesomeIcon icon={faCircleCheck} /> </div>
        <h4> GARANTÍA</h4>
        <p>Tu proyecto contará con garantía, respaldada por LUMETRI®, empresa que cuenta con más de 30 años en el rubro.</p>
    </div>

    <div className="divCajaHome"> 
    <div className="divIconHome"> <FontAwesomeIcon icon={faHandHoldingDollar} /> </div>
        <h4> PRECIO</h4>
        <p>Al ser fabricantes, obtendrás el mejor precio del Mercado. Con distintos planes de financiamiento adaptados a tu medida.</p>
    </div>

    <div className="divCajaHome"> 
    <div className="divIconHome"> <FontAwesomeIcon icon={faPaintBrush} /> </div>
        <h4> DISEÑO</h4>
        <p>Contarás con mano de obra especializada en diseño y fabricación, junto a las mejores materias primas del Mercado para tu proyecto.</p>
    </div>

</div>

    
   

const [ info, setInfo ] = useState ('');

       

    return(
        
        <div className="divButonPreg">
        <button className="boton" onClick={() => setInfo (texto)}> <h2 className="hHome2">¿Por qué elegirnos?</h2> </button>
        <p> {info} </p>
      </div>
       
    )
    }


export default Pregunta;