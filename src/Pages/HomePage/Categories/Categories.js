import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5'>
            <div>
                <h3 className='text-center'>Categories</h3>
                <h1 className='text-center'>Get <span className='font-weight-bold text-success'>20% discount</span> In first Order</h1>
                <p className='text-center'>Show All Categories</p>
            </div>
            <div className='mt-5 container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        categories.map((category, idx) => <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={category.categoryImage} />
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                    <Link to={`/category/${category.name}`}><Button variant='outline-success' className='w-100'>View Category</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Categories;