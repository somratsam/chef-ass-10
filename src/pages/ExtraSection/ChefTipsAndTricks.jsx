import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ChefTipsAndTricks = () => {
  const [chefTipsData, setChefTipsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/chefTipsAndTricks')
      .then(response => response.json())
      .then(data => setChefTipsData(data.chefTipsAndTricks))
      .catch(error => console.log('Error fetching chef tips and tricks:', error));
  }, []);

  return (
    <div>
      <h2 className='text-center fw-bold my-5 text'>Chef's Tips & Tricks</h2>
      <Row>
        {chefTipsData.map(tip => (
          <Col key={tip.id}>
            <Card className='h-100' style={{ width: '18rem' }}>
              <Card.Img className='h-100'  variant="top" src={tip.image} alt={tip.title} />
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text> <small>{tip.description}</small> </Card.Text>
                <Card.Text>Source: <small className='fw-bold'>{tip.source}</small> </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChefTipsAndTricks;
