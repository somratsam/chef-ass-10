import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {



    return (
        <footer className="footer mt-5 bg-dark text-white bg-opacity-75">
            <Container className=' text-center'>
                <Row className=' pt-4'>
                    <Col md={4} sm={6}>
                        <h3>About</h3>
                        <p>
                            <small> Welcome to The Endless Meal, your ultimate destination for delicious and inspiring food recipes. We are passionate about creating and sharing mouthwatering dishes that are not only satisfying but also easy to prepare.</small>
                        </p>

                    </Col>
                    <Col md={4} sm={6}>
                        <h3>Contact Us</h3>
                        <p> <strong>Email:</strong> <small>somratsam2@gmail.com</small> <br />
                            <strong> Phone:</strong> <small>+968 93876228</small> <br />
                            <strong> Address:</strong> <small>23 Main Street, California, USA</small> </p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3>Follow Us</h3>
                        <ul className="social-icons list-unstyled">
                            <li>
                                <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <p className="text-center pb-4">
                    &copy; 2023 The Endless Meal. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
