import React, { useState } from 'react';
import { Card, Button, Table, Modal, Form, Row, Col, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminBlog = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [blogList, setBlogList] = useState([
        { id: 1, title: 'Importance of Extracurricular Activities', author: 'Dr. Smith', status: 'Published', date: '2026-03-14' },
        { id: 2, title: 'Digital Learning in Modern Education', author: 'Prof. Johnson', status: 'Published', date: '2026-03-10' },
        { id: 3, title: 'Tips for Exam Preparation', author: 'Ms. Brown', status: 'Draft', date: '2026-03-05' },
    ]);

    const [formData, setFormData] = useState({ title: '', author: '', content: '', status: 'Draft' });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            setBlogList(blogList.filter(blog => blog.id !== id));
        }
    };

    const handleSubmit = () => {
        if (editingPost) {
            setBlogList(blogList.map(blog => blog.id === editingPost.id ? { ...formData, id: blog.id, date: new Date().toISOString().split('T')[0] } : blog));
        } else {
            setBlogList([...blogList, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
        }
        setShowModal(false);
        setEditingPost(null);
        setFormData({ title: '', author: '', content: '', status: 'Draft' });
    };

    return (
        <AdminLayout title="Manage Blog">
            <Card className="border-0 shadow-sm">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">All Blog Posts</h5>
                        <Button variant="success" onClick={() => { setEditingPost(null); setFormData({ title: '', author: '', content: '', status: 'Draft' }); setShowModal(true); }}>
                            <FaPlus className="me-2" /> Write Post
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <Table hover>
                            <thead className="table-light"><tr><th>Title</th><th>Author</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
                            <tbody>
                                {blogList.map(blog => (
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td><td>{blog.author}</td>
                                        <td><Badge bg={blog.status === 'Published' ? 'success' : 'warning'}>{blog.status}</Badge></td><td>{blog.date}</td>
                                        <td><Button variant="outline-primary" size="sm" className="me-2" onClick={() => { setEditingPost(blog); setFormData(blog); setShowModal(true); }}><FaEdit /></Button>
                                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(blog.id)}><FaTrash /></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton><Modal.Title>{editingPost ? 'Edit Post' : 'Write New Post'}</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form><Form.Group className="mb-3"><Form.Label>Title</Form.Label><Form.Control type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Author</Form.Label><Form.Control type="text" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Content</Form.Label><Form.Control as="textarea" rows={6} value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} /></Form.Group>
                    <Form.Group><Form.Label>Status</Form.Label><Form.Select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}><option>Draft</option><option>Published</option></Form.Select></Form.Group></Form>
                </Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button><Button variant="primary" onClick={handleSubmit}>Save Post</Button></Modal.Footer>
            </Modal>
        </AdminLayout>
    );
};

export default AdminBlog;