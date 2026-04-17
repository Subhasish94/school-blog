import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = { id: 1, title: 'Importance of Extracurricular Activities', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'Dr. Smith', date: '2026-03-14', image: 'https://via.placeholder.com/800x400', tags: ['Education', 'Activities'] };

    return (
        <>
            <Navbar />
            <div className="bg-success py-4"><Container><h1 className="text-white text-center mb-0">{blog.title}</h1></Container></div>
            <Container className="py-5">
                <Row><Col lg={8} className="mx-auto"><Card className="border-0 shadow-sm"><Card.Img variant="top" src={blog.image} /><Card.Body><div className="d-flex gap-3 text-muted small mb-3"><span><FaUser className="me-1" /> {blog.author}</span><span><FaCalendar className="me-1" /> {blog.date}</span></div><div className="mb-3">{blog.tags.map(tag => <Badge key={tag} bg="secondary" className="me-1"><FaTag className="me-1" />{tag}</Badge>)}</div><Card.Text>{blog.content.repeat(3)}</Card.Text></Card.Body></Card></Col></Row>
            </Container>
            <Footer />
        </>
    );
};

export default BlogDetail;