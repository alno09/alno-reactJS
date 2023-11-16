import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, InputGroup, Form, Button } from "react-bootstrap";
import axios from "axios";

class BeritaComponent extends React.Component {
    state = {
        person : []
    }

    render() {
        return(
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Metropolitan News</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Cari disini..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                 <Button as="input" type="submit" value="cari" />{' '}
                            </InputGroup>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default BeritaComponent