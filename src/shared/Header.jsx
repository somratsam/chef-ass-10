import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    return (
        <Navbar className='bg-dark text-white' bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold text-white' href="#home">The Endless Meal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    
                        <Nav.Link
                            style={location.pathname === '/' ? { color: 'blue' } : {}}
                            className="fw-bold text-white"
                            as={Link}
                            to="/"
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            style={location.pathname === '/blog' ? { color: 'blue' } : {}}
                            className="fw-bold text-white"
                            as={Link}
                            to="/blog"
                        >
                            Blog
                        </Nav.Link>

                    </Nav>
                    {user && <Nav className='fw-bold'><FaUserCircle /></Nav>}
                    <Link to="/login">
                        {user ? (
                            <Button variant="light rounded-5 text-dark fw-bold">Logout</Button>
                        ) : (
                            <Button variant="light rounded-5 text-dark fw-bold">Login</Button>
                        )}
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
