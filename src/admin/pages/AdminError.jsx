import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

const AdminError = () => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <Container>
                <div className="text-center text-white">
                    <FaExclamationTriangle size={120} className="mb-4 text-warning" />
                    <h1 className="display-1 fw-bold">404</h1>
                    <h2 className="mb-3">Page Not Found</h2>
                    <p className="lead mb-4">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <Button variant="light" size="lg" onClick={() => navigate('/admin/dashboard')}>
                            <FaHome className="me-2" /> Go to Dashboard
                        </Button>
                        <Button variant="outline-light" size="lg" onClick={() => navigate(-1)}>
                            <FaArrowLeft className="me-2" /> Go Back
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminError;