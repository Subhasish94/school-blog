import React from 'react';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
    return (
        <BsNavbar bg="white" expand="lg" className="shadow-sm sticky-top">
            <Container>
                <BsNavbar.Brand as={Link} to="/" className="fw-bold">
                    <FaGraduationCap className="text-primary me-2" size={28} /> Smart School
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-2">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Button as={Link} to="/admin/login" variant="outline-primary" size="sm" className="ms-2">
                            <FaUserShield className="me-1" /> Admin
                        </Button>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;