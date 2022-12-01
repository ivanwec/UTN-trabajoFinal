
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
import {faSquareFacebook, faSquareInstagram, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
      
       <footer>
            
            <div className="foot1">
                
                <div className="footNombre">
                   <a className="aFootNombre" href="./"> <h2>LUMETRI </h2> </a>  
                </div>
               
                <div className="footSocial">
                SÍGUENOS
                    <ul className="ulSocial">
                        <li>
                        
                        <a className="aFoot" href="https://es-la.facebook.com"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                        </li>

                        <li>
                        <a className="aFoot" href="https://www.instagram.com/"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                          
                        </li>
                        <li>
                        <a className="aFoot" href="https://api.whatsapp.com/send/?phone=5491155734001&text&type=phone_number&app_absent=0"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
                          
                        </li>
                    </ul>
                </div>
            </div>    

            <div className="foot2">
            Copyright © 2022 Lumetri
            </div>
            
        </footer>
            
        )
}

export default Footer;
