import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllChefs = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then((response) => response.json())
            .then((data) => {
                setChefData(data);
            })
            .catch((error) => {
                console.log("Error fetching chef data:", error);
            });
    }, []);

    return (
        <Container>
            <h1>Chef's List</h1>
            <Row>
                {chefData.map((chef) => (
                    <Col key={chef.id} xs={12} md={4}>
                        <Card className="mb-4 h-100 border-0 shadow ">
                            <Card.Img className='h-100' variant="top" src={chef.chefPicture} alt="" />

                            <Card.Body>
                                <Card.Title>{chef.chefName}</Card.Title>
                                <Card.Text>
                                    <small> Years of Experience: {chef.yearsOfExperience}<br />
                                        Number of Recipes: {chef.numberOfRecipes}<br />
                                        Likes: {chef.likes}</small>
                                </Card.Text>
                               
                                <Link to="/viewRecipes">
                                <Button variant="warning text-light fw-bold">View Recipes</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AllChefs;
