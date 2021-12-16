import React from "react";
import Cards3 from "./cards_3";
import Hotel from "../../images/hotel.png";
import Car from "../../images/car.png";
import Personalized from "../../images/personalized.png";
import Transfer from "../../images/transfer.png";
import Asistant from "../../images/travel-asistant.png";


const cardsS3 = [
  {
      id: 1,
      image: Hotel,
      title: "Alojamiento",
      description: "Contamos con más de 100 alojamientos alrededor de todo el territorio argentino para que puedas elegir tu mejor opción",
  },
  {
      id: 2,
      image: Car,
      title: "Alquiler de Autos",
      description: "En diferentes  puntos del país contamos con servicio de alquiler de autos para que puedas movilizarte a tu propio ritmo",
  },
  {
      id: 3,
      image: Personalized,
      title: "Paquetes Personalizados",
      description: "En caso de querer personalizar tu viaje tenés la posibilidad de reunirte con uno de nuestros asesores para coordinar un viaje totalmente a tu medida",
  },
  {
      id: 4,
      image: Transfer,
      title: "Transfers",
      description: "El servicio de transfers esta a su disposición en todos nuestros destinos para que puedas transportarte desde la terminal de destino a tu alojamiento",
  },
  {
      id: 5,
      image: Asistant,
      title: "Asistencia al Viajero",
      description: "Viví tu viaje con la mayor tranquilidad y sin preocupaciones. Una cobertura para que vos te enfoques en tener el mejor viaje de todos y nosotros enfocarnos en tu seguridad",
  },
]

const Section3 = () => {
    return (
      <>
      <section>
        <div className="titleS3">
          <h3><span>¿Por qué elegirnos? </span>Porque estamos para acompañarte en todo momento</h3>
        </div>
        <div>
        <div className="row">
          {
            cardsS3.map(card => (
              <div className="col" key= {card.id}>
                <Cards3 
                titleS3={card.title} 
                descriptionS3={card.description} 
                imageS3={card.image}
                />
              </div>
              ))
            }
          </div>
          </div>
    </section>
  <style> {`
    .titleS3 {
    font-size: 20px;
    text-align: center;
  }
  span{
    color: #00ced1;
    }
    `}
  </style>
</>
 );
}
export default Section3;