import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ViewRecipes = () => {
  const { chefId } = useParams();
  const [chefData, setChefData] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/allData/${chefId}`)
      .then((response) => response.json())
      .then((data) => {
        setChefData(data);
      })
      .catch((error) => {
        console.log('Error fetching chef data:', error);
      });
  }, [chefId]);

  const handleFavoriteClick = () => {
    setShowToast(true);
  };

  if (!chefData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row style={{ paddingTop: '5rem' }}>
        <Col xs={12} md={6}>
          <div>
            <h2 className='fw-bold'>{chefData.chefName}</h2>
            <div className='my-3'>
              <small>
                <strong>Years of Experience:</strong> {chefData.yearsOfExperience}<br />
                <strong>Number of Recipes:</strong> {chefData.numberOfRecipes}<br />
                <strong>Likes:</strong> {chefData.likes} <br />
                <strong>Description:</strong> {chefData.description} <br />
                <strong>Recipe name:</strong>
                <ul>
                  {chefData.recipeName.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                  ))}
                </ul>
                <br />
                <strong>Ingredients:</strong>
                <ul>
                  {chefData.ingredients.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                  ))}
                </ul>
                <br />
                <strong>Cooking method:</strong> {chefData.cookingMethod} <br />
                <strong>Rating:</strong> {chefData.rating}
              </small>
            </div>
            <Button className='fw-bold bg-warning border-0' disabled={showToast} onClick={handleFavoriteClick}>
              Favorite
            </Button>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
              <Toast.Body className='bg-success rounded text-white'>This recipe is your favorite.</Toast.Body>
            </Toast>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ height: '50rem' }}>
            <img className='w-100' src={chefData.chefPicture} alt='' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewRecipes;
