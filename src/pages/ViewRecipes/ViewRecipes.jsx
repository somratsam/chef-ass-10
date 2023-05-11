import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ViewRecipes = () => {
    const { chefId } = useParams();
    const [chefData, setChefData] = useState(null);

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

    if (!chefData) {
        return <div>Loading...</div>;
    }

    return (
        // <div>
        //   <h1>{chefData.chefName}</h1>
        //   <img src={chefData.chefPicture} alt={chefData.chefName} />
        //   <p>{chefData.description}</p>
        // </div>

        <Container>

            {/* <Row>

                <Col xs={12} md={4}>

                    <Card className="mb-4 h-100 border-0 shadow ">
                        <Card.Img className='h-100' variant="top" src={chefData.chefPicture} alt="" />

                        <Card.Body>
                            <Card.Title>{chefData.chefName}</Card.Title>
                            <Card.Text>
                                <small> Years of Experience: {chefData.yearsOfExperience}<br />
                                    Number of Recipes: {chefData.numberOfRecipes}<br />
                                    Likes: {chefData.likes} <br />
                                    Description: {chefData.description}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row> */}

            <Row style={{ paddingTop: "5rem" }}>
                <Col xs={12} md={6}>
                    <div style={{ paddingTop: "3rem" }}>

                        <h2 className='fw-bold'>{chefData.chefName}</h2>
                       <div className='pt-3'>
                       <small> Years of Experience: {chefData.yearsOfExperience}<br />
                            Number of Recipes: {chefData.numberOfRecipes}<br />
                            Likes: {chefData.likes} <br />
                            Description: {chefData.description}</small>

                       </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <img className='w-100' src={chefData.chefPicture} alt="" />
                    </div>
                </Col>
            </Row>


        </Container>
    );


};

export default ViewRecipes;
