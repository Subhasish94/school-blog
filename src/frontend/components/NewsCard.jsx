import React from 'react';
import { Card, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return (
        <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={news.image || 'https://via.placeholder.com/300x200'} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Badge bg="primary" className="mb-2">{news.category}</Badge>
                    <Card.Title as={Link} to={`/news/${news.id}`} className="text-decoration-none text-dark">{news.title}</Card.Title>
                    <Card.Text className="text-muted small">{news.date}</Card.Text>
                    <Card.Text>{news.summary?.substring(0, 100)}...</Card.Text>
                    <Link to={`/news/${news.id}`} className="btn btn-outline-primary btn-sm">Read More →</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NewsCard;