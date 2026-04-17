import React, { useState } from 'react';
import { Card, Button, Table, Modal, Form, Row, Col, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminNews = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [newsList, setNewsList] = useState([
        { id: 1, title: 'Annual Sports Day Celebration', category: 'Event', status: 'Published', date: '2026-03-15', views: 234 },
        { id: 2, title: 'Parent-Teacher Meeting Schedule', category: 'Notice', status: 'Published', date: '2026-03-12', views: 189 },
        { id: 3, title: 'New Academic Session Starts', category: 'News', status: 'Draft', date: '2026-03-10', views: 45 },
    ]);

    const [formData, setFormData] = useState({
        title: '', category: 'News', content: '', status: 'Draft'
    });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this news?')) {
            setNewsList(newsList.filter(news => news.id !== id));
        }
    };

    const handleSubmit = () => {
        if (editingNews) {
            setNewsList(newsList.map(news => news.id === editingNews.id ? { ...formData, id: news.id, date: new Date().toISOString().split('T')[0], views: news.views } : news));
        } else {
            setNewsList([...newsList, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0], views: 0 }]);
        }
        setShowModal(false);
        setEditingNews(null);
        setFormData({ title: '', category: 'News', content: '', status: 'Draft' });
    };

    const handleEdit = (news) => {
        setEditingNews(news);
        setFormData({ title: news.title, category: news.category, content: news.content || 'Sample content', status: news.status });
        setShowModal(true);
    };

    return (
        <AdminLayout title="Manage News">
            <Card className="border-0 shadow-sm">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">All News Articles</h5>
                        <Button variant="primary" onClick={() => { setEditingNews(null); setFormData({ title: '', category: 'News', content: '', status: 'Draft' }); setShowModal(true); }}>
                            <FaPlus className="me-2" /> Add News
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <Table hover>
                            <thead className="table-light">
                                <tr><th>Title</th><th>Category</th><th>Status</th><th>Date</th><th>Views</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                {newsList.map(news => (
                                    <tr key={news.id}>
                                        <td>{news.title}</td>
                                        <td><Badge bg="secondary">{news.category}</Badge></td>
                                        <td><Badge bg={news.status === 'Published' ? 'success' : 'warning'}>{news.status}</Badge></td>
                                        <td>{news.date}</td>
                                        <td>{news.views}</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(news)}><FaEdit /></Button>
                                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(news.id)}><FaTrash /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton><Modal.Title>{editingNews ? 'Edit News' : 'Add New News'}</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3"><Form.Label>Title</Form.Label><Form.Control type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required /></Form.Group>
                        <Row>
                            <Col md={6}><Form.Group className="mb-3"><Form.Label>Category</Form.Label><Form.Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}><option>News</option><option>Event</option><option>Notice</option><option>Announcement</option></Form.Select></Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-3"><Form.Label>Status</Form.Label><Form.Select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}><option>Draft</option><option>Published</option></Form.Select></Form.Group></Col>
                        </Row>
                        <Form.Group className="mb-3"><Form.Label>Content</Form.Label><Form.Control as="textarea" rows={5} value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} /></Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button><Button variant="primary" onClick={handleSubmit}>{editingNews ? 'Update' : 'Save'}</Button></Modal.Footer>
            </Modal>
        </AdminLayout>
    );
};

export default AdminNews;