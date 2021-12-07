import React from "react";
import "../components/rectangle13.css";
import Logo from "../images/VueLorem.jpg";

const Rectangle13 = () =>{
  return (
  <>
  <div className="contenedor">
    <header>
     <div className='titular'>
          <img src={Logo} alt="logo"/>
          <h1>Turismo VueLorem</h1>
          <a href="https://www.google.com"
          target="_blank"          
          >Leer màs 
          </a>
     </div>
    </header>
</div>
</>  
);
}
export default Rectangle13;