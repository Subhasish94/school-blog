import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Pagination } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';

const NewsArchive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const allNews = [
        { id: 1, title: 'Annual Sports Day Celebration', summary: 'Join us for the annual sports day...', image: 'https://via.placeholder.com/300x200', date: '2026-03-15', category: 'Event' },
        { id: 2, title: 'Parent-Teacher Meeting Schedule', summary: 'Important meeting regarding student progress...', image: 'https://via.placeholder.com/300x200', date: '2026-03-12', category: 'Notice' },
        { id: 3, title: 'New Academic Session Starts', summary: 'The new academic session begins from April 1st...', image: 'https://via.placeholder.com/300x200', date: '2026-03-10', category: 'News' },
        { id: 4, title: 'Science Exhibition 2026', summary: 'Students showcase innovative projects...', image: 'https://via.placeholder.com/300x200', date: '2026-03-05', category: 'Event' },
        { id: 5, title: 'Holiday Notice - Holi', summary: 'School will remain closed on March 25th...', image: 'https://via.placeholder.com/300x200', date: '2026-03-01', category: 'Notice' },
    ];

    const filteredNews = allNews.filter(news => {
        const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === '' || news.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navbar />
            <div className="bg-primary py-4">
                <Container>
                    <h1 className="text-white text-center mb-0">News & Announcements</h1>
                </Container>
            </div>
            <Container className="py-5">
                <Row className="mb-4">
                    <Col md={6} className="mx-auto">
                        <div className="d-flex gap-2">
                            <Form.Control 
                                type="text" 
                                placeholder="Search news..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button variant="primary"><FaSearch /></Button>
                        </div>
                    </Col>
                    <Col md={4} className="mx-auto mt-3 mt-md-0">
                        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="News">News</option>
                            <option value="Event">Event</option>
                            <option value="Notice">Notice</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="g-4">
                    {filteredNews.map(news => <NewsCard key={news.id} news={news} />)}
                </Row>
                {filteredNews.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">No news found.</p>
                    </div>
                )}
                <div className="d-flex justify-content-center mt-5">
                    <Pagination>
                        <Pagination.Prev disabled />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default NewsArchive;