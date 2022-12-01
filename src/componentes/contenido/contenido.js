import React from "react";
/* import { Link } from "react-router-dom"; */
import "./contenido.css";
import Nav from 'react-bootstrap/Nav';
import ten1 from '../contenido/ten1.jpeg';
import ten2 from '../contenido/ten2.jpg';
import ten3 from '../contenido/ten3.jpg';
import ten4 from '../contenido/ten4.jpg';
import ten5 from '../contenido/ten5.jpeg';
import ten6 from '../contenido/ten6.jpg';
import ten7 from '../contenido/ten7.jpg';
import ten8 from '../contenido/ten8.jpg';

const Contenido = () => {
    return (<div>
        <div className="divTexTen">
<h2>CONOCE LAS ÚLTIMAS TENDENCIAS PARA LA COCINA EN 2022</h2>

        </div>
    
        <div className="itemListContainer">
<div>
    <img className="imgTendi" src={ten1}/>
</div>
<div>
<img className="imgTendi" src={ten2}/>
</div>
<div>
<img className="imgTendi" src={ten3}/>
</div>
<div>
<img className="imgTendi" src={ten4}/>
</div>
<div>
<img className="imgTendi" src={ten5}/>
</div>
<div>
<img className="imgTendi" src={ten6}/>
</div>
<div>
<img className="imgTendi" src={ten7}/>
</div>
<div>
<img className="imgTendi" src={ten8}/>
</div>

        </div>
</div>

    )
}

export default Contenido