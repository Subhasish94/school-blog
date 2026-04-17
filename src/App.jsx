import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import './admin/admin.css';
import './frontend/frontend.css';

// Frontend Imports
import HomePage from './frontend/pages/HomePage';
import NewsArchive from './frontend/pages/NewsArchive';
import NewsDetail from './frontend/pages/NewsDetail';
import BlogArchive from './frontend/pages/BlogArchive';
import BlogDetail from './frontend/pages/BlogDetail';
import AboutPage from './frontend/pages/AboutPage';
import ContactPage from './frontend/pages/ContactPage';

// Admin Imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminNews from './admin/pages/AdminNews';
import AdminBlog from './admin/pages/AdminBlog';
import AdminPages from './admin/pages/AdminPages';
import AdminContacts from './admin/pages/AdminContacts';
import AdminError from './admin/pages/AdminError';
import AdminSettings from './admin/pages/AdminSettings';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem('adminAuth');
    return isAuth === 'true' ? children : <Navigate to="/admin/login" />;
};

function App() {
    return (
        <Router
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Routes>
                {/* Frontend Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsArchive />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/blog" element={<BlogArchive />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/admin/news" element={<ProtectedRoute><AdminNews /></ProtectedRoute>} />
                <Route path="/admin/blog" element={<ProtectedRoute><AdminBlog /></ProtectedRoute>} />
                <Route path="/admin/pages" element={<ProtectedRoute><AdminPages /></ProtectedRoute>} />
                <Route path="/admin/contacts" element={<ProtectedRoute><AdminContacts /></ProtectedRoute>} />
                <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
                {/* Error Route */}
                <Route path="/admin/404" element={<AdminError />} />
                <Route path="*" element={<AdminError />} />
            </Routes>
        </Router>
    );
}

export default App;