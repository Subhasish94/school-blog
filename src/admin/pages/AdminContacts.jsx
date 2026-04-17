import React, { useState } from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';
import { FaTrash, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Admission Query', message: 'When does admission start?', status: 'Unread', date: '2026-03-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Fee Structure', message: 'Please share fee details', status: 'Read', date: '2026-03-14' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', subject: 'Sports Event', message: 'Registration details for sports day', status: 'Unread', date: '2026-03-13' },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Delete this message?')) setContacts(contacts.filter(c => c.id !== id));
    };

    const handleMarkRead = (id) => {
        setContacts(contacts.map(c => c.id === id ? { ...c, status: 'Read' } : c));
    };

    return (
        <AdminLayout title="Contact Submissions">
            <Card className="border-0 shadow-sm">
                <Card.Body>
                    <div className="table-responsive">
                        <Table hover>
                            <thead className="table-light"><tr><th>Name</th><th>Email</th><th>Subject</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
                            <tbody>
                                {contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td>{contact.name}</td><td>{contact.email}</td><td>{contact.subject}</td>
                                        <td><Badge bg={contact.status === 'Unread' ? 'danger' : 'success'}>{contact.status}</Badge></td><td>{contact.date}</td>
                                        <td><Button variant="outline-success" size="sm" className="me-2" onClick={() => handleMarkRead(contact.id)}><FaCheckCircle /></Button>
                                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(contact.id)}><FaTrash /></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};

export default AdminContacts;