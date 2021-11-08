import React from "react";
//import Carousel from "react-bootstrap/Carousel";
import "../componentes/carousel.css"
import Iguazu from "../images/iguazu.png";
import Jujuy from "../images/jujuy.jpg";
import Glaciar from "../images/glaciar.jpg";
import BA from "../images/buenos-aires.jpg";
import Llamas from "../images/llamas.jpg";
import Mendoza from "../images/mendoza.jpg";
import PeritoMoreno from "../images/perito-moreno.jpeg";
import SalinasGrandes from "../images/salinas-grandes.png";
import SanJuan from "../images/san-juan.jpg";
import TierraDelFuego from "../images/tierra-fuego.jpg";
import Caminito from "../images/caminito.jpg";


const MiCarousel = () => {
  return (
    <>
    <div className="slides-container">
      <div className="slides-items">
        <div><img src={Iguazu} alt="First slide"/></div>
        <div><img src={Jujuy} alt="Second slide"/></div>
        <div><img src={Glaciar} alt="Third slide"/></div>
        <div><img src={BA} alt="Forth slide"/></div>
        <div><img src={Llamas} alt="Fifth slide"/></div>
        <div><img src={Iguazu} alt="First slide"/></div>
        <div><img src={Jujuy} alt="Second slide"/></div>
     </div>
    </div>
    </>
  );
};

export default MiCarousel;


