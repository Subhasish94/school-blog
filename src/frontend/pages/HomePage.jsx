import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaNewspaper, FaCalendarAlt, FaImages } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NewsCard from '../components/NewsCard';

const HomePage = () => {
    const latestNews = [
        { id: 1, title: 'Annual Sports Day Celebration', summary: 'Join us for the annual sports day on March 20th...', image: 'https://via.placeholder.com/300x200', date: '2026-03-15', category: 'Event' },
        { id: 2, title: 'Parent-Teacher Meeting', summary: 'Important meeting regarding student progress...', image: 'https://via.placeholder.com/300x200', date: '2026-03-12', category: 'Notice' },
        { id: 3, title: 'New Admission Open', summary: 'Admissions for session 2026-27 are now open...', image: 'https://via.placeholder.com/300x200', date: '2026-03-10', category: 'News' },
    ];

    return (
        <>
            <Navbar />
            <HeroSection title="Welcome to Our School" subtitle="Excellence in Education" buttonText="Learn More" />
            <Container className="py-5">
                <Row className="g-4 mb-5">
                    <Col md={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaNewspaper size={40} className="text-primary mb-3" />
                                <h5>Latest News</h5>
                                <p>Stay updated with school announcements</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaCalendarAlt size={40} className="text-primary mb-3" />
                                <h5>Upcoming Events</h5>
                                <p>Check important dates and events</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center h-100 shadow-sm">
                            <Card.Body>
                                <FaImages size={40} className="text-primary mb-3" />
                                <h5>Photo Gallery</h5>
                                <p>Memories from school activities</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3 className="mb-4">Latest News & Updates</h3>
                <Row className="g-4">
                    {latestNews.map(news => <NewsCard key={news.id} news={news} />)}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default HomePage;