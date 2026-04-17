import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogArchive = () => {
    const [blogs] = useState([
        { id: 1, title: 'Importance of Extracurricular Activities', summary: 'Discover how extracurricular activities shape student development...', author: 'Dr. Smith', date: '2026-03-14', image: 'https://via.placeholder.com/400x250', tags: ['Education', 'Activities'] },
        { id: 2, title: 'Digital Learning in Modern Education', summary: 'How technology is transforming the classroom experience...', author: 'Prof. Johnson', date: '2026-03-10', image: 'https://via.placeholder.com/400x250', tags: ['Technology', 'Digital'] },
        { id: 3, title: 'Tips for Exam Preparation', summary: 'Effective strategies to help students prepare for exams...', author: 'Ms. Brown', date: '2026-03-05', image: 'https://via.placeholder.com/400x250', tags: ['Exams', 'Study Tips'] },
    ]);

    return (
        <>
            <Navbar />
            <div className="bg-success py-4"><Container><h1 className="text-white text-center mb-0">School Blog</h1></Container></div>
            <Container className="py-5">
                <Row className="g-4">
                    {blogs.map(blog => (
                        <Col lg={4} key={blog.id}>
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img variant="top" src={blog.image} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="mb-2">{blog.tags.map(tag => <Badge key={tag} bg="secondary" className="me-1">{tag}</Badge>)}</div>
                                    <Card.Title as={Link} to={`/blog/${blog.id}`} className="text-decoration-none text-dark">{blog.title}</Card.Title>
                                    <Card.Text className="text-muted small">By {blog.author} | {blog.date}</Card.Text>
                                    <Card.Text>{blog.summary}</Card.Text>
                                    <Link to={`/blog/${blog.id}`} className="btn btn-outline-success btn-sm">Read More →</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default BlogArchive;