import React from 'react';
import './formu.css'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mkneapzy");
  if (state.succeeded) {
      return <p>¡Su mensaje ha sido enviado!</p>;
  }
  return (
    <div className='divEnviarConsulta'>
    <div className='divPagForm'> 
        <div className='divF'><form className='formul' onSubmit={handleSubmit}>
            <label htmlFor="nombre">
                Nombre
            </label>
            
            <input
            size={40}
           
                id="nombre"
                type="text" 
                name="text"
            />
            <label htmlFor="email">
                Correo Electrónico
            </label>
            
            <input
            size={40}
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label>
                Déjenos su consulta
            </label>
            <textarea className='textArea' maxLength={500}
            
            cols="42"
            
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <div className='divButton'>
                <button className='buttonForm' type="submit" disabled={state.submitting}>
                Enviar
            </button></div>
        </form></div>
    <div className='divU'> 
    <ul className='ulVentajas'>
        <li className='liVentajas'>
Obtené tu presupuesto a medida de acuerdo a tus gustos, necesidades y con la mejor relación precio-calidad.</li>
<li className='liVentajas'>Te ofrecemos una amplia variedad de maderas para tu escalera revestida o estructural.</li>
<li className='liVentajas'>Contarás con materia prima y recursos humanos de primera calidad.</li>
<li className='liVentajas'>Las maderas de nuestras escaleras: </li> 
<li className='liVentajas'>Viraró - Lapacho - Incienso - Zoita - Marmelero - Paraíso Finger </li> 
</ul>
    </div>
    </div>
    <div className="divHome1">
                <h1> Lumetri  <span>transformando tu sueño</span> en realidad</h1>
            </div>
    </div>
  );
 
}


export default ContactForm;