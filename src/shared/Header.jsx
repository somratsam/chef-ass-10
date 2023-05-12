import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Navbar  bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold' href="#home">The Endless Meal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-bold' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='fw-bold' as={Link} to="/blog">Blog</Nav.Link>
                      { user && <Nav className='fw-bold'><FaUserCircle></FaUserCircle></Nav>}
                         
                      <Link to= "/login"> { user ? <Button>Logout</Button> :
                        <Button>Login</Button> }</Link>
                        
                       




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;