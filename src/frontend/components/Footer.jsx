import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white-50 pt-5 pb-3 mt-5">
            <Container>
                <Row className="g-4">
                    <Col md={4}>
                        <h5 className="text-white mb-3">About School</h5>
                        <p>Providing quality education since 1995. Our mission is to nurture young minds for a better future.</p>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/news" className="text-white-50 text-decoration-none">News & Updates</a></li>
                            <li><a href="/blog" className="text-white-50 text-decoration-none">Blog</a></li>
                            <li><a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="text-white mb-3">Contact Info</h5>
                        <p><FaMapMarkerAlt className="me-2" /> 123 School Street, City, PIN 700001</p>
                        <p><FaPhone className="me-2" /> +91 12345 67890</p>
                        <p><FaEnvelope className="me-2" /> info@school.com</p>
                    </Col>
                </Row>
                <hr className="mt-4" />
                <div className="text-center pt-3">
                    <small>&copy; 2026 Smart School. All rights reserved.</small>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;