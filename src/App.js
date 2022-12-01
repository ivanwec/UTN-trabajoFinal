import './App.css';
import Footer from './componentes/footer/footer';
/* import Home from './componentes/home/home';  */
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './componentes/header/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './componentes/home/home';
/* import Carousel from './componentes/carousel/Carousel' */
import Pregunta from './componentes/pregunta/pregunta';
import ContactForm from './componentes/formu/formu';
import Carro from './componentes/decks/decks';
import Escaleras from './componentes/escaleras/escaleras';
import Muebles from './componentes/muebles/muebles';
/* import Contenido from './componentes/contenido/contenido'; */



function App() {
  return (
  
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route exact path="/Contacto">
      <ContactForm/>
      <Pregunta/>
      </Route>

      <Route exact path="/decks">
      <Carro/>
      <Pregunta/>
      </Route>

      <Route exact path="/escaleras">
      <Escaleras/>
      <Pregunta/>
      </Route>

      <Route exact path="/muebles">
      <Muebles/>
      <Pregunta/>
      </Route>

     
  </Switch>

  

  
<Footer />
  </BrowserRouter>
  )
  
}

export default App;
 