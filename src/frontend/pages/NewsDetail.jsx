import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaCalendar, FaEye, FaShare } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsDetail = () => {
    const { id } = useParams();
    const news = { id: 1, title: 'Annual Sports Day Celebration', content: 'The annual sports day was a great success...', date: '2026-03-15', category: 'Event', views: 234, image: 'https://via.placeholder.com/800x400' };

    return (
        <>
            <Navbar />
            <div className="bg-primary py-4"><Container><h1 className="text-white text-center mb-0">{news.title}</h1></Container></div>
            <Container className="py-5">
                <Row><Col lg={8} className="mx-auto"><Card className="border-0 shadow-sm"><Card.Img variant="top" src={news.image} /><Card.Body><div className="d-flex justify-content-between text-muted small mb-3"><span><FaCalendar className="me-1" /> {news.date}</span><span><Badge bg="primary">{news.category}</Badge></span><span><FaEye className="me-1" /> {news.views} views</span></div><Card.Text>{news.content.repeat(5)}</Card.Text><hr /><div className="text-center"><Button variant="outline-primary"><FaShare className="me-1" /> Share This News</Button></div></Card.Body></Card></Col></Row>
            </Container>
            <Footer />
        </>
    );
};

export default NewsDetail;