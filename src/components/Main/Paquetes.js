import React, {Fragment} from 'react';

import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';



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
        height: "160px",
    },
}

const Paquetes =({infoPaquetes}) => {

     return (
 <Fragment>
    <Container fluid className="sm md">
        <Row>
            <Col sm className="ms-4 border" style={styles.paquete}> 
            <img style={styles.img} className="img" alt="Bariloche" src={infoPaquetes[0].src}></img>
            <h3>{infoPaquetes[0].nombre}</h3>
             <p>{infoPaquetes[0].duracion}</p>
             <h4>$ {infoPaquetes[0].precio}</h4>

             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
        
        <Col sm className="ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Cataratas" src={infoPaquetes[1].src}></img>
            <h3>{infoPaquetes[1].nombre}</h3>
             <p>{infoPaquetes[1].duracion}</p>
             <h4>$ {infoPaquetes[1].precio}</h4>
             <Button
             variant="primary" 
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>        

        <Col sm className="ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Salta" src={infoPaquetes[2].src}></img>
            <h3>{infoPaquetes[2].nombre}</h3>
             <p>{infoPaquetes[2].duracion}</p>
             <h4>$ {infoPaquetes[2].precio}</h4>
             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
       
        <Col sm className=" ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Madryn" src={infoPaquetes[3].src}></img>
            <h3>{infoPaquetes[3].nombre}</h3>
             <p>{infoPaquetes[3].duracion}</p>
             <h4>$ {infoPaquetes[3].precio}</h4>
             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
    </Row>
            
    </Container>
</Fragment>
)
    }




export default Paquetes
