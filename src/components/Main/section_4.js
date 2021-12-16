import React from "react";
import Cards4 from "./cards_4";
import ourTeam from "../../images/ourteam.jpg";
import itemPlane from "../../images/plane-item.png";
import {Button} from "react-bootstrap";

const infoS4 =[
    {
        id: 1,
        title: "Misión",
        description: "Ofrecer un servicio personalizado de calidad y confiabilidad, a través de la buena atención de nuestro personal debidamente capacitado, diseñando viajes únicos, a precios accesibles, logrando superar las expectativas de nuestros clientes"
    },
    {
        id: 2,
        title: "Visión",
        description : "Llegar ser una Agencia de Viajes reconocida en nuestra región, por la confianza y seguridad que le ofrecemos a nuestros clientes,  presentando innovadores servicios y asegurando una actividad turística estable, promoviendo un ambiente de buenas relaciones y obteniendo la mayor satisfacción de nuestros clientes."
    },
    {
        id: 3,
        title: "Valores",
        description: [
        <ul>
            <li>Amabilidad</li>
            <li>Honestidad</li>
            <li>Confiabilidad</li>
            <li>Pasión y Compromiso</li>
        </ul>
        ],
    },
    ]

const Section4 = () => {
    return ( 
        <> 
            <section className="culture">
                <div className= "mvv">
                    <h3 className= "titleS4"> ¿QUIÉNES SOMOS Y QUIÉNES QUEREMOS SER? </h3>
                        {
                        infoS4.map(card => (
                        <div className="text-mvv" key= {card.id}>
                        <Cards4
                        image={itemPlane}
                        titleS4={card.title}
                        descriptionS4={card.description}
                        />
                        </div>
                    ))
                        }
                        <div className="mb-2">
                            <Button variant="primary" size="sm">
                            Ver nuestros productos
                            </Button>{' '}
                        </div>
                </div>
                <div className= "section4image">
                        <img className= "image4 center-block" src={ourTeam} alt="Nuestro equipo"/>
                </div>
            </section>

            <style> {`
            .culture {
                display: grid;
                grid-template-columns: 2, 1fr;
                grid-column-gap: 150px;
                height: 600px;
                margin: 20px;
                align-items:center;
            }
            .mvv{
                grid-column: 1;
               
            }
            .section4image{
                grid-column: 2;
            }
            .image4{
                width: 700px;
                height: 400px;
                objet-fit: cover;
                border-radius: 15px 50px 30px 5px;
               
            }
            .mb-2 {
                display: flex;
                justify-content: center;
            }
            `}
            </style>
        </>
    );
}
 
export default Section4;