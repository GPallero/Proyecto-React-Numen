import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import logo from "../../images/logo.jpeg"
import "./pie.css";

const Pie = () => {
    return (
        <footer>
        <Container fluid>
            <Row className="atributosflex">
                <Col className="LogoCenter"><img className="FooterLogo" src={logo} alt= "logo"/></Col>
                <Col>
                <div className="contentFooter">
                <h4>Asistenia al Viajero</h4>
                <ul>
                    <li>Assist card</li>
                    <li>Universal</li>
                    <li>Go Travel</li>
                    <li>Coris</li>
                    <li>Cardinal Assistance</li>
                </ul>
                </div>
                </Col>
                <Col><div className="contentFooter">
                <h4>Excursiones</h4>
                <ul>
                    <li>Montaña</li>
                    <li>Lagos</li>
                    <li>Mares</li>
                    <li>Esqui</li>
                    <li>Compras</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Escapadas en el día</h4>
                <ul>
                    <li>Estancias</li>
                    <li>Tigre</li>
                    <li>Quintas</li>
                    <li>Mundo Marino</li>
                    <li>Noche de Tango</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Shows o Eventos</h4>
                <ul>
                    <li>Rock</li>
                    <li>Musicales</li>
                    <li>Deportivos</li>
                    <li>Religiosos</li>
                    <li>Variado</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Alquiler de Auto</h4>
                <ul>
                    <li>Avis</li>
                    <li>Alamo</li>
                    <li>Budget</li>
                    <li>Sixt</li>
                    <li>thrifty</li>
                </ul>
                </div></Col>
            </Row>
        </Container>
        </footer>
    );

}

export default Pie;