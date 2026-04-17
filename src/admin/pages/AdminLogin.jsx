import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FaSchool, FaEnvelope, FaLock } from 'react-icons/fa';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Demo login - in production, connect to your API
        if (email === 'admin@school.com' && password === 'admin123') {
            localStorage.setItem('adminAuth', 'true');
            localStorage.setItem('adminUser', JSON.stringify({ name: 'Admin User', email: 'admin@school.com' }));
            navigate('/admin/dashboard');
        } else {
            setError('Invalid email or password');
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <Card className="login-card shadow-lg border-0">
                <Card.Body>
                    <div className="text-center mb-4">
                        <FaSchool size={50} className="text-primary mb-3" />
                        <h2 className="fw-bold">School CMS Admin</h2>
                        <p className="text-muted">Sign in to access dashboard</p>
                    </div>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FaEnvelope /></span>
                                <Form.Control
                                    type="email"
                                    placeholder="admin@school.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text"><FaLock /></span>
                                <Form.Control
                                    type="password"
                                    placeholder="••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100 py-2 fw-bold" disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>

                        <div className="text-center mt-3">
                            <small className="text-muted">
                                Demo: admin@school.com / admin123
                            </small>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AdminLogin;