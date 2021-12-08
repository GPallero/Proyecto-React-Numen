import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import logo from "../../images/logo.jpeg"
import Footer from "../Footer";
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
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                </div>
                </Col>
                <Col><div className="contentFooter">
                <h4>Asistenia al Viajero</h4>
                <ul>
                    <li>Assist card</li>
                    <li>Universal</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Asistenia al Viajero</h4>
                <ul>
                    <li>Assist card</li>
                    <li>Universal</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Asistenia al Viajero</h4>
                <ul>
                    <li>Assist card</li>
                    <li>Universal</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                </div></Col>
                <Col><div className="contentFooter">
                <h4>Asistenia al Viajero</h4>
                <ul>
                    <li>Assist card</li>
                    <li>Universal</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                </div></Col>
            </Row>
        </Container>
        </footer>
    );

}

export default Pie;