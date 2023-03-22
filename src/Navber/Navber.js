import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg='success' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="/">
                        <img src="" alt="" />
                        Hero Hotel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="/">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#pricing">Booking</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <div className='d-flex'>
                                        <p className='text-white mt-3'>{user?.displayName}</p>
                                        <Button onClick={logOut} className='mx-2' variant='success'>LogOut</Button>
                                    </div>
                                    :
                                    <Link to='/login'><Button variant='success'>Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;