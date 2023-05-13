import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AllChefs from '../../Chefs/AllChefs';
import FeaturedRecipes from '../ExtraSection/featuredRecipes';
import ChefTipsAndTricks from '../ExtraSection/chefTipsAndTricks';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div style={{paddingTop: "3rem"}}>
                        <p className='text-warning fw-bold'>Chef's Special</p>
                        <h1>Freshness in every bite</h1>
                        <p><small>Indulge in the delightful flavors of our signature dish, the Spicy Thai Basil Chicken. This vibrant and aromatic Thai recipe combines tender chicken pieces, fresh basil leaves, and an exquisite blend of spices. The dish is a perfect harmony of sweet, savory, and spicy notes that will tantalize your taste buds.</small></p>
                        <Button variant="light rounded-5 text-dark fw-bold">Order Now</Button>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <img className='w-100 ' src="https://i.ibb.co/C1djMhF/istockphoto-1190330112-170667a.png" alt="Banner" />
                    </div>
                </Col>
            </Row>
            <AllChefs></AllChefs>
            <FeaturedRecipes></FeaturedRecipes> <ChefTipsAndTricks></ChefTipsAndTricks>
            
        </Container>
    );
};

export default Home;