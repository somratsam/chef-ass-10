import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const FeaturedRecipes = () => {
  const [featuredRecipesData, setFeaturedRecipesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/featuredRecipes')
      .then(response => response.json())
      .then(data => setFeaturedRecipesData(data.featuredRecipes))
      .catch(error => console.log('Error fetching featured recipes:', error));
  }, []);

  return (
    <Container>
      <h2 className='text-center fw-bold my-5'>Featured Recipes</h2>
      <Row>
        {featuredRecipesData.map(recipe => (
          <Col key={recipe.id}>
            <Card className='h-100 border-0 shadow bg-dark text-white mx-auto' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text> <small>{recipe.description}</small> </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedRecipes;
