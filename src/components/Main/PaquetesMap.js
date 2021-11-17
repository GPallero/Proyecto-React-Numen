import React, {Fragment, useState} from 'react';
import {Container, Row, Col, Button, Modal} from'react-bootstrap';

const styles = {
    paquete: {
        backgroundColor: "#F7F5F0",
        borderRadius: "10px",
        borderColor: "black",
        gap: "2em",
        textAlign: "center",
        overflow: "hidden",
        marginRight: "20px",
        paddingLeft: "0",
        paddingRight: "0",
        paddingBottom: "30px",

    },

    img: {
        margin: "0",
        padding: "0", 
        width: "100%",
        height: "220px",
    },
};

const info = [
    {
          id: 1,
          src: 'https:barilocheturismo.gob.ar/images/news/upload/144_54480854-0594-4512-bbf1-a2a5597709d8.jpg', 
          nombre: "Bariloche",
          duracion: "4 días 3 noches",
          precio: 50000,
          descripcion: "Hotel 4 estrellas, desayuno incluido. Excursión al Cerro Llao Llao." ,
          
      },
    
          {
              id: 2,
              src: 'https:media.traveler.es/photos/613768f04c612f07ec398ef9/master/w_1600,c_limit/158844.jpg',
              nombre: "Cataratas del Iguazú",
              duracion: "4 días 3 noches",
              precio: 45000,
              descripcion: "Hotel 3 estrellas, desayuno incluido. Excursión al Parque Nacional Iguazú.",
              

          },
      
          {
              id: 3,
              src: 'https:volemos.nyc3.digitaloceanspaces.com/blog/wp-content/uploads/2020/08/Imperdibles-de-salta.jpg',
              nombre: "Salta y Jujuy",
              duracion: "8 días 7 noches",
              precio: 80000,
              descripcion: "Hotel 4 estrellas, media pensión. Transporte incluido al Centro cívico.",
              

          },
                      {
              id: 4,
              src: 'https:www.viajesylugares.com/images/showid2/4695105?w=1200&zc=4',
              nombre: "Puerto Madryn",
              duracion: "6 días 5 noches",
              precio: 60000,
              descripcion: "Hotel 3 estrellas, desayuno incluido. Avistaje de ballenas embarcado.",
              

          }
          ]

const PaquetesMap =() => {
    
    const [show, setShow] = useState(false);
    const [element, setElement] = useState({});
    
    const handleClose = () => setShow(false);
    const handleClick = (el) => {
        setElement(el)
        setShow(true)

    }

    return (
 <Fragment>
    <Container fluid className="sm">
        <Row className="justify-content-center">
        
            {info.map (el => 
                <Col key={el.id} sm={6} md={4} lg className="border" style={styles.paquete}> 
                    <img style={styles.img} className="img-responsive" alt="Bariloche" src={el.src}></img>
                    <h3>{el.nombre}</h3>
                    <p>{el.duracion}</p>
                    <h4>{el.precio}</h4>
                    <Button size="lg" className="nextButton mt-4" onClick={()=>handleClick(el)}>
                    Comprar</Button>                
                
                </Col>
            )}

            <Modal show={show} onHide={handleClose} centered className="text-center">
                <Modal.Header closeButton>
                <Modal.Title>{element.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{
                    margin: "0",
                    padding: "0", 
                    width:  "100%",
                    height: "220px"}}

                    className="img-responsive" alt="Bariloche" src={element.src}></img>
                    <p> {element.descripcion}</p>
                    <p>{element.duracion}</p>
                    <h4>$ {element.precio}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Comprar</Button>
                </Modal.Footer>
            </Modal>   
           
        </Row>
            
    </Container>
</Fragment>

)
    }




export default PaquetesMap
