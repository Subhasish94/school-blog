import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children, title }) => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    return (
        <div className="admin-wrapper">
            <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <AdminSidebar />
            </div>
            <div className="admin-content">
                <div className="admin-topbar">
                    <Button variant="light" className="d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}><FaBars /></Button>
                    <h5 className="mb-0 d-none d-md-block">{title}</h5>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-user" className="d-flex align-items-center gap-2">
                            <FaUserCircle size={24} /> {adminUser.name || 'Admin'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu><Dropdown.Item onClick={handleLogout}><FaSignOutAlt className="me-2" /> Logout</Dropdown.Item></Dropdown.Menu>
                    </Dropdown>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;