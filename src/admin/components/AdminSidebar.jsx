import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    FaTachometerAlt, 
    FaNewspaper, 
    FaBlog, 
    FaFileAlt, 
    FaEnvelope, 
    FaCog, 
    FaSignOutAlt 
} from 'react-icons/fa';

const AdminSidebar = () => {
    const menuItems = [
        { path: '/admin/dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
        { path: '/admin/news', icon: <FaNewspaper />, label: 'News' },
        { path: '/admin/blog', icon: <FaBlog />, label: 'Blog' },
        { path: '/admin/pages', icon: <FaFileAlt />, label: 'Pages' },
        { path: '/admin/contacts', icon: <FaEnvelope />, label: 'Contacts' },
        { path: '/admin/settings', icon: <FaCog />, label: 'Settings' }, // 👈 New menu item
    ];

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminUser');
        window.location.href = '/admin/login';
    };

    return (
        <>
            <div className="sidebar-header">
                <h4 className="mb-0">School CMS</h4>
                <small>Admin Panel</small>
            </div>
            <div className="mt-3">
                {menuItems.map((item, idx) => (
                    <NavLink 
                        key={idx} 
                        to={item.path} 
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon} {item.label}
                    </NavLink>
                ))}
                <hr className="mx-3 my-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                <div className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <FaSignOutAlt /> Logout
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;