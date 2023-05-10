import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AllChefs from '../../Chefs/AllChefs';

const Home = () => {
    return (
        <Container>


            <Row>
                <Col xs={12} md={6}>
                    <div style={{paddingTop: "3rem"}}>
                        <p className='text-warning fw-bold'>Chef's Special</p>
                        <h1>Freshness in every bite</h1>
                        <p><small>Indulge in the delightful flavors of our signature dish, the Spicy Thai Basil Chicken. This vibrant and aromatic Thai recipe combines tender chicken pieces, fresh basil leaves, and an exquisite blend of spices. The dish is a perfect harmony of sweet, savory, and spicy notes that will tantalize your taste buds.</small></p>
                        <Button className='bg-warning border-0 fw-bold'>Order Now</Button>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <img className='w-100' src="https://i.ibb.co/PMcNwnj/istockphoto-1190330112-170667a.jpg" alt="Banner" />
                    </div>
                </Col>
            </Row>
            <AllChefs></AllChefs>
            
        </Container>
    );
};

export default Home;