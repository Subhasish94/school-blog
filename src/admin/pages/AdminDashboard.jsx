import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaNewspaper, FaBlog, FaEnvelope, FaUsers, FaEye, FaCalendarAlt } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminDashboard = () => {
    const stats = [
        { title: 'Total News', value: '24', icon: <FaNewspaper />, color: 'primary', bg: 'bg-primary-subtle' },
        { title: 'Blog Posts', value: '18', icon: <FaBlog />, color: 'success', bg: 'bg-success-subtle' },
        { title: 'Contact Forms', value: '42', icon: <FaEnvelope />, color: 'info', bg: 'bg-info-subtle' },
        { title: 'Total Views', value: '2,847', icon: <FaEye />, color: 'warning', bg: 'bg-warning-subtle' },
    ];

    const recentNews = [
        { id: 1, title: 'Annual Sports Day Celebration', date: '2026-03-15', views: 234 },
        { id: 2, title: 'Parent-Teacher Meeting Schedule', date: '2026-03-12', views: 189 },
        { id: 3, title: 'Summer Vacation Notice', date: '2026-03-10', views: 567 },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Row className="g-4 mb-4">
                {stats.map((stat, idx) => (
                    <Col md={6} lg={3} key={idx}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-muted mb-1">{stat.title}</h6>
                                        <h2 className="mb-0 fw-bold">{stat.value}</h2>
                                    </div>
                                    <div className={`${stat.bg} p-3 rounded-circle`} style={{ fontSize: '1.5rem', color: `var(--bs-${stat.color})` }}>
                                        {stat.icon}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col lg={8}>
                    <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white fw-bold">Recent News & Updates</Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr><th>Title</th><th>Date</th><th>Views</th><th>Status</th></tr>
                                    </thead>
                                    <tbody>
                                        {recentNews.map(news => (
                                            <tr key={news.id}>
                                                <td>{news.title}</td>
                                                <td>{news.date}</td>
                                                <td>{news.views}</td>
                                                <td><span className="badge bg-success">Published</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white fw-bold">Quick Actions</Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary">➕ Add New News</button>
                                <button className="btn btn-success">📝 Write Blog Post</button>
                                <button className="btn btn-info">📄 Manage Pages</button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow-sm mt-4">
                        <Card.Body className="text-center">
                            <FaCalendarAlt size={40} className="text-primary mb-2" />
                            <h6>Today's Date</h6>
                            <p className="mb-0">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </AdminLayout>
    );
};

export default AdminDashboard;