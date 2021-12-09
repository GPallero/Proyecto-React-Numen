import React from "react"
import Section3 from "../components/section_3"
import Hotel from "../images_section3/hotel.png"
import Car from "../images_section3/car.png"
import Personalized from "../images_section3/personalized.png"
import Transfer from "../images_section3/transfer.png"
import Asistant from "../images_section3/travel-asistant.png"

 const cardsS3 = [
    {
        id: 1,
        image: {Hotel},
        title: "Alojamiento",
        description: "Contamos con más de 100 alojamientos alrededor de todo el territorio argentino para que puedas elegir tu mejor opción",
    },
    {
        id: 2,
        image: {Car},
        title: "Alquiler de Autos",
        description: "En diferentes  puntos del país contamos con servicio de alquiler de autos para que puedas movilizarte a tu propio ritmo",
    },
    {
        id: 3,
        image: {Personalized},
        title: "Paquetes Personalizados",
        description: "En caso de querer personalizar tu viaje tenés la posibilidad de reunirte con uno de nuestros asesores para coordinar un viaje totalmente a tu medida",
    },
    {
        id: 4,
        image: {Transfer},
        title: "Transfers",
        description: "El servicio de transfers esta a su disposición en todos nuestros destinos para que puedas transportarte desde la terminal de destino a tu alojamiento",
    },
    {
        id: 5,
        image: {Asistant},
        title: "Asistencia al Viajero",
        description: "Viví tu viaje con la mayor tranquilidad y sin preocupaciones. Una cobertura para que vos te enfoques en tener el mejor viaje de todos y nosotros enfocarnos en tu seguridad",
    },
]

function CardsSection3 () {
    return (
        <div className= "container d-flex justify-content-center">
            <div className= "row">
               {
                   cardsS3.map (Section3 => (
                       <div className= "col-md-2" key= {cardsS3.id}>
                       </div>
                    ))
            }
            </div>

        </div>
    )
    }
 
export default CardsSection3;