import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <div className="bg-primary py-4">
                <Container>
                    <h1 className="text-white text-center mb-0">Contact Us</h1>
                </Container>
            </div>
            <Container className="py-5">
                {submitted && <Alert variant="success">Thank you! Your message has been sent.</Alert>}
                <Row className="g-4">
                    <Col lg={5}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <h4 className="mb-4">Get in Touch</h4>
                                <div className="mb-3 d-flex align-items-center"><FaMapMarkerAlt className="text-primary me-3" size={24} /><div><strong>Address</strong><br />123 School Street, Kolkata, West Bengal - 700001</div></div>
                                <div className="mb-3 d-flex align-items-center"><FaPhone className="text-primary me-3" size={24} /><div><strong>Phone</strong><br />+91 12345 67890</div></div>
                                <div className="mb-3 d-flex align-items-center"><FaEnvelope className="text-primary me-3" size={24} /><div><strong>Email</strong><br />info@school.com</div></div>
                                <div className="mb-3 d-flex align-items-center"><FaClock className="text-primary me-3" size={24} /><div><strong>Office Hours</strong><br />Mon-Fri: 9:00 AM - 5:00 PM</div></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <h4 className="mb-4">Send us a Message</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Row><Col md={6}><Form.Group className="mb-3"><Form.Label>Name</Form.Label><Form.Control type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /></Form.Group></Col>
                                    <Col md={6}><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /></Form.Group></Col></Row>
                                    <Form.Group className="mb-3"><Form.Label>Subject</Form.Label><Form.Control type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} /></Form.Group>
                                    <Form.Group className="mb-3"><Form.Label>Message</Form.Label><Form.Control as="textarea" rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} /></Form.Group>
                                    <Button type="submit" variant="primary">Send Message</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ContactPage;