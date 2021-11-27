import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav, Button, Form, FormControl } from "react-bootstrap";
import logo from '../images/logo.jpeg'

const Navegacion = () => {
    return (
      <>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
                <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="80"
                  height="auto"
                  className="d-inline-block align-center"
                />{' '}
              </Navbar.Brand>
            <Navbar.Brand href="#home">VueLorem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      );
}
 
export default Navegacion;




