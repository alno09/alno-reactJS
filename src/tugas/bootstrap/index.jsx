import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/style.css'
import { Nav, Navbar, Container, Card, Button, Row } from "react-bootstrap";

export default class Bootstrap extends React.Component {
    render() {
        return(
            <>
            {/*navbar*/}
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#features">Project</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>

            {/*Background*/}
            <Card className="text-white">
            <Card.Img src={require('./asset/bg.png')} alt="Card image" className="dark-overlay" height={300} width={100} />
                <Card.ImgOverlay>
                    <Card.Title className="display-2">Alno Sabetha</Card.Title>
                    <Card.Text>
                    I am a Junior in Javascript
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>

            {/* project */}
            <Row>
                <Card style={{ width: '18rem' }} className="col">
                <Card.Img variant="top" src={require('./asset/loan.jpg')} />
                    <Card.Body>
                        <Card.Title>Room Loan System</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="col">
                <Card.Img variant="top" src={require('./asset/message.jpg')} className="" />
                    <Card.Body>
                        <Card.Title>Messaging System</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="col">
                <Card.Img variant="top" src={require('./asset/anleave.jpg')} />
                    <Card.Body>
                        <Card.Title>Annual Leave System</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Row>
            
            
            {/*About Me*/}
            {/* <h1 className="text-white">I am Alno Sabetha</h1>
            <div className="wrapper">
                <ul className="dynamic-text text-white">
                    <li><span>Developer</span></li>
                    <li><span>Designer</span></li>
                    <li><span>Programmer</span></li>
                    <li><span>Brewer</span></li>
                    <li><span>Coffee Addict</span></li>
                </ul>
            </div> */}

            </>
        )
    }
}