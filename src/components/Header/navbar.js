import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo3 from "../../images/Logo3.png"

const Navegacion = () => {
    return (  
        <Navbar bg="light" expand="lg">
            <Container fluid className="d-flex">
                <div className="d-flex flex-md-grow-1 flex-sm-grow-1 align-items-center">
                {/* flex-md-grow-1  flex-sm-grow-1 align-items-center*/}
                    <img className={"m-2"}  style={{ maxWidth: '100px' }} src={Logo3} alt="imagen de prueba"/>
                    <h3 className={"m-2"}> Viaja con nosotros </h3>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <NavDropdown title="Nosotros" id="Nosotros-navbarScrollingDropdown" >
                            <NavDropdown.Item href="#">Visión</NavDropdown.Item>
                            <NavDropdown.Item href="#">Valores</NavDropdown.Item>
                            <NavDropdown.Item href="#">Misión</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Regiones" id="Regiones-navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Norte Argentino</NavDropdown.Item>
                            <NavDropdown.Item href="#">Mesopotamia</NavDropdown.Item>
                            <NavDropdown.Item href="#">Sierras Pampeanas</NavDropdown.Item>
                            <NavDropdown.Item href="#">Patagonia</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Servicios" id="Servicios-navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Paquetes Turísticos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Alquiler de Cabañas</NavDropdown.Item>
                            <NavDropdown.Item href="#">Alquiler de Vehículos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Vuelos</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#">Nosotros</Nav.Link>
                        <Nav.Link href="#">Trabaja con Nosotros</Nav.Link>
                    </Nav>

                    {/* Iconos exportados de boxicon */}
                    <div className={"m-2"}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbVJREFUSEvlloExBEEQRd9FQAaIABEgAkSACBABGSACREAGiAARIAJkoJ6aoW3tzuyeuzpVukopbrZfd0//vzdiRjGaEZc+4HlgGVhPRT4Dj8DDb4ougReBI2C3A2ABx8DlOAV0gbeAc8Bua3EN7AFvtYPx8zaw0KtwyI5M7o/hJDxzACyk/zn21d+ATXqfOn1PY87AZl6ncQFspg/OUjG9+M2OTbSTntwOXZaS2a3LZywB3n01ItgOXtMTjrdrqZpJndLT0K4jWLncDOw2F5G7vguyK3YdwUpD+Rh99B0TD372T4C9U7U7aEnS+byUY416JUnJXIfAaXU1vw9oHnNAb0k171IpaAr+1hD6uJFGcjJ0KZvgOG6NQy2XIk6p95i7tldgdiNlIrzNFGKng/eiTTYayW1wI5NaQNOrmy8QF0zj8dlqlPTqcu1XMryEF0a2WsEuZ/F9XTMK7dCRepdrqQhheQJ2aUTX82+XcqMEr4GrIwsH7DQXV4VPEuxUhKvnHJ2dTxIsrDd80uAS3Hf1lyFNA9wG9ztZXsTPa5gWOMJVxQ/otMHm12Ra/X6aHRel+P/AH1WqWx/59LQVAAAAAElFTkSuQmCC" alt="icono"/>
                    </div>
                    <div className={"m-2"}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcxJREFUSEvlle0xBEEQhp+LgAwQASJABmRABIgAESACIZABIkAEhEAE1KNmrub2ZmZ7+eGHrrrarduefvt9pz9m/JHN/giXnwLvApsp6WfgcSqBqcD7wA2wOgB6B46Au2gCU4CvgOORwKeAfqMWBVba+xRNWQ3+AMhUFU6AnfR9L33rgkeBvUfv9AXYakR8A9YAfbfHKEeBP1OgnpTnwFnyG4076gCUMvdkjPp95xYBXgdeE5ODTuUeporXdQNQ+qZFgD1sEa0A16mQagFz1X9U2m3JPwpctlJN7lLmXnLzBKLADgzbJ08r363e3E650ntVv8A6Cuwh79rJlMGH8tnf3nP3bvOhKcD5jMPCoZFZytyEQhPrN8BjsyH0PcpYdkrsszW5ZO7Pe/b5q5FpUbmNlHaKKb3byuKrWo9xbQXaoy02KmGvZ+uuyhawQZ6KIPamxTNWsVa+xVeuTxfGUrIt4LyNZChz+3aKeeY2HahuqxpwuWXCi72Slcwv0/8XgHHnVgOWnUs9PIU6UmTlHC6O1S5w3r1LWU7ROvk2d/SQcVlUvRUYzaG864UiGwJPWuYB9Ga8IbADo5zBzQEQANWlGS86MoM4cbf/B/wF5GpcH3yxaxIAAAAASUVORK5CYII="alt="icono"/>
                    </div>
                </Navbar.Collapse>
                <div className={"m-2"}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbRJREFUSEvNlrkyREEUhr+R254AoQiR0PIEPAESSkRIhIiQSJHgCXgCSygjEuIJbDnqn+q5dWqq+3b3rVbjVE3VLOee72x/97TokbV6xOVfgEeBEdOBu7/shq14F9gxsHdgDnj4iwTqwOLdOnhxtgWr1XrJFoAN915VK4GiFlquIeDNkS6A5aJUqN3qc2DJAWcLgD/svtTJSbCbAkAbYhG40hcxHWujJwrCVwB1MgrWbM8ceK/hkkmmMy7GMCCZRsFashdgsKG0gksaa7WSOzTSGnOJpHbfdqyab0rF8pG2nx3pCNhMpbot1o68mjOi/XhKxZ0TTHPSfFR1e04Rq004FayT7NKBqs2MgGtHlAoWQ0um20sSm4qVa/wfgclu/xywvb20NEokZAKpYpm3QzlgK42EgiuXSrv2oRxwt7RS4EEV5IIFy7kwgtdpE/AqoLYfA1+esvuBdSe501BbcsH7wJYLpptr3hP42vxrOQC2ffBcsA36A/R5gn6bgymUXPLJ1YmvNp+4D2rjmges3+Un0+/edudWrGDjwABwX7PW08An8FRqxikSSvJpUnFS4JhTz8C/k1JKHx+tqHMAAAAASUVORK5CYII=" alt="icono"/>
                </div>
            </Container>
        </Navbar>
    );
}
 
export default Navegacion