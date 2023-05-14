import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ChefTipsAndTricks = () => {
  const [chefTipsData, setChefTipsData] = useState([]);

  useEffect(() => {
    fetch('https://chef-server-side-ass-10-somratsam.vercel.app/chefTipsAndTricks')
      .then(response => response.json())
      .then(data => setChefTipsData(data.chefTipsAndTricks))
      .catch(error => console.log('Error fetching chef tips and tricks:', error));
  }, []);

  return (
    <Container>
      <h2 className='text-center fw-bold my-5 text'>Chef's Tips & Tricks</h2>
      <Row>
        {chefTipsData.map(tip => (
          <Col key={tip.id}>
            <Card className='h-100 border-0 shadow bg-dark text-white mx-auto' style={{ width: '18rem' }}>
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
    </Container>
  );
};

export default ChefTipsAndTricks;
