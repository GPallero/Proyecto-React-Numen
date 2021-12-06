import React from "react";
import "./carousel.css"
import Iguazu from "../../images/iguazu.png";
import Jujuy from "../../images/jujuy.jpg";
import Glaciar from "../..//images/glaciar.jpg";
import BA from "../../images/buenos-aires.jpg";
import Caminito from "../..//images/caminito.jpg";
  


const MiCarousel = () => {
  return (
    <>
      <h3>Seguinos en Instagram</h3>
      <h2>@TurismoVueLorem</h2>
      <div className="slides-container">
        <div className="slides-items">
          <div className='slides-items-div'><img src={Caminito} alt="First slide"/></div>
          <div className='slides-items-div'><img src={Jujuy} alt="Second slide"/></div>
          <div className='slides-items-div'><img src={Glaciar} alt="Third slide"/></div>
          <div className='slides-items-div'><img src={BA} alt="Forth slide"/></div>
          <div className='slides-items-div'><img src={Iguazu} alt="Fifth slide"/></div>
          <div className='slides-items-div'><img src={Caminito} alt="First slide"/></div>
          <div className='slides-items-div'><img src={Jujuy} alt="Second slide"/></div>
        </div>
      </div>
    
    </>
  );
};

export default MiCarousel;


