import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    // Perform logout actions
    logout();
  };

  return (
    <Navbar className="bg-dark text-white" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold text-white" href="#home">
          The Endless Meal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="fw-bold text-white"
              activeclassname="active"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              className="fw-bold text-white"
              activeclassname="active"
            >
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Item className="fw-bold text-white">
                <FaUserCircle /> {user.name} {/* Display the user's name */}
              </Nav.Item>
            )}
            {user ? (
              <Button variant="light rounded-5 text-dark fw-bold" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="light rounded-5 text-dark fw-bold">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
