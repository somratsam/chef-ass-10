import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar  bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold' href="#home">The Endless Meal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-bold' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='fw-bold' as={Link} to="/blog">Blog</Nav.Link>
                       




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;