import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaChalkboardTeacher, FaTrophy, FaBookOpen } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    const stats = [
        { icon: <FaUsers />, value: '500+', label: 'Students' },
        { icon: <FaChalkboardTeacher />, value: '35+', label: 'Teachers' },
        { icon: <FaTrophy />, value: '25+', label: 'Awards' },
        { icon: <FaBookOpen />, value: '15+', label: 'Courses' },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-primary py-4"><Container><h1 className="text-white text-center mb-0">About Our School</h1></Container></div>
            <Container className="py-5">
                <Row className="mb-5"><Col lg={8} className="mx-auto text-center"><h2 className="mb-3">Our Mission & Vision</h2><p className="lead">To provide quality education that nurtures young minds and prepares them for the challenges of tomorrow.</p></Col></Row>
                <Row className="g-4 mb-5">{stats.map((stat, idx) => (<Col md={3} key={idx}><Card className="text-center border-0 shadow-sm"><Card.Body><div className="text-primary mb-3" style={{ fontSize: '2.5rem' }}>{stat.icon}</div><h3 className="fw-bold">{stat.value}</h3><p className="text-muted">{stat.label}</p></Card.Body></Card></Col>))}</Row>
                <Row><Col><Card className="border-0 shadow-sm"><Card.Body><h4>Our History</h4><p>Founded in 1995, our school has been a beacon of quality education in the community. Over the past three decades, we have grown from a small institution to a premier educational establishment...</p></Card.Body></Card></Col></Row>
            </Container>
            <Footer />
        </>
    );
};

export default AboutPage;