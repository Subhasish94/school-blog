import React, { useState } from 'react';
import { Card, Button, Table, Modal, Form, Badge } from 'react-bootstrap';
import { FaEdit, FaEye } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminPages = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);
    const [pages, setPages] = useState([
        { id: 1, title: 'Home', slug: '/', content: 'Welcome to our school...', status: 'Published' },
        { id: 2, title: 'About Us', slug: '/about', content: 'School history and mission...', status: 'Published' },
        { id: 3, title: 'Contact', slug: '/contact', content: 'Contact information...', status: 'Published' },
    ]);
    const [content, setContent] = useState('');

    const handleEdit = (page) => {
        setCurrentPage(page);
        setContent(page.content);
        setShowModal(true);
    };

    const handleSave = () => {
        setPages(pages.map(p => p.id === currentPage.id ? { ...p, content: content } : p));
        setShowModal(false);
    };

    return (
        <AdminLayout title="Manage Pages">
            <Card className="border-0 shadow-sm">
                <Card.Body>
                    <h5 className="mb-3">Page Content Editor</h5>
                    <div className="table-responsive">
                        <Table hover>
                            <thead className="table-light"><tr><th>Page Title</th><th>Slug</th><th>Status</th><th>Last Modified</th><th>Actions</th></tr></thead>
                            <tbody>
                                {pages.map(page => (
                                    <tr key={page.id}>
                                        <td>{page.title}</td><td>{page.slug}</td>
                                        <td><Badge bg="success">{page.status}</Badge></td><td>{new Date().toLocaleDateString()}</td>
                                        <td><Button variant="outline-primary" size="sm" onClick={() => handleEdit(page)}><FaEdit className="me-1" /> Edit Content</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton><Modal.Title>Edit {currentPage?.title} Page</Modal.Title></Modal.Header>
                <Modal.Body><Form.Control as="textarea" rows={10} value={content} onChange={(e) => setContent(e.target.value)} /></Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button><Button variant="primary" onClick={handleSave}>Save Changes</Button></Modal.Footer>
            </Modal>
        </AdminLayout>
    );
};

export default AdminPages;