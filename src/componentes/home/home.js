import React from "react";
import "./home.css";
import Carrousel from '../carousel/Carousel';
import Contenido from "../contenido/contenido";
import Pregunta from "../pregunta/pregunta";




const Home = () => {
    return(
      <div>

     <Carrousel/>
     <Contenido/>

    <div className="divHome1">
        <h1> Lumetri  <span>transformando tu sueño</span> en realidad</h1>
    </div>

    <Pregunta/>


</div>
);
}

export default Home;