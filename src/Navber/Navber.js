import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navber = () => {
    return (
        <div>
            <Navbar bg='success' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="/home">
                        <img src="" alt="" />
                        Hero Hotel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="#features">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#pricing">Booking</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' href="#deets">Login</Nav.Link>
                            <Nav.Link className='text-white' eventKey={2} href="#memes">
                               Dark Mode
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;