import React, {Fragment} from 'react';
import Comida from './images/Comida.jpg';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const styles = {

    img:{
        width: "75%",
        height: "auto",
    },

    h4: {
        color: "#0B5ED7",
    },

    texto: {
        textAlign: "justify"
    }

}
const Gastronomia = () => {

return ( 

<Fragment>
    <Container className="sm">
        <Row className="m-2 mt-4">
            <Col sm className="text-center">
            <img className="img-responsive" style= {styles.img} src={Comida} alt="comida"></img>
           </Col>;

            <Col sm>
              <h4 style={styles.h4}>Disfruta de nuestra gastronomía</h4>
              <h1> Sabores argentinos</h1>

              <p className="texto" style = {styles.texto}>Argentina se caracteriza por tener una identidad propia en cuanto a la gastronomía. </p>
             <p className="texto" style = {styles.texto}> Desde comidas tradicionales, tales como empanadas, asado y locro, hasta platos más innovadores y elaborados, si visitas cualquiera de nuestras provincias, no podés dejar de degustar su comida y disfrutar de los placeres gastronómicos.</p>
             <p className="texto" style = {styles.texto}>Reserva uno de los circuitos que te permitirá conocer experiencias y sabores únicos.</p>
             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Reservar
             </Button>
             </Col>
        </Row>
    </Container>
</Fragment>
    )
}

export default Gastronomia