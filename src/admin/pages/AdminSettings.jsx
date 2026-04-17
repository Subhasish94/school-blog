import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert, Image, Tabs, Tab } from 'react-bootstrap';
import { FaSave, FaUndo, FaImage, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import AdminLayout from '../components/AdminLayout';

const AdminSettings = () => {
    // General Settings State
    const [generalSettings, setGeneralSettings] = useState({
        siteName: 'Smart School',
        siteTagline: 'Excellence in Education',
        siteLogo: '',
        siteFavicon: '',
        siteEmail: 'info@school.com',
        sitePhone: '+91 12345 67890',
        siteAddress: '123 School Street, Kolkata, West Bengal - 700001',
        copyrightText: '© 2026 Smart School. All rights reserved.',
    });

    // Social Media Settings State
    const [socialSettings, setSocialSettings] = useState({
        facebook: 'https://facebook.com/smartschool',
        twitter: 'https://twitter.com/smartschool',
        instagram: 'https://instagram.com/smartschool',
        youtube: 'https://youtube.com/smartschool',
        linkedin: '',
    });

    // Email Settings State
    const [emailSettings, setEmailSettings] = useState({
        smtpHost: 'smtp.gmail.com',
        smtpPort: '587',
        smtpUser: '',
        smtpPass: '',
        fromEmail: 'noreply@school.com',
        fromName: 'Smart School',
    });

    // SEO Settings State
    const [seoSettings, setSeoSettings] = useState({
        metaTitle: 'Smart School - Excellence in Education',
        metaDescription: 'Smart School provides quality education with modern facilities. Admission open for 2026-27 session.',
        metaKeywords: 'school, education, best school, smart school, kolkata school',
        googleAnalytics: '',
    });

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    // Load saved settings from localStorage (in production, fetch from API)
    useEffect(() => {
        const savedGeneral = localStorage.getItem('siteGeneralSettings');
        const savedSocial = localStorage.getItem('siteSocialSettings');
        const savedEmail = localStorage.getItem('siteEmailSettings');
        const savedSeo = localStorage.getItem('siteSeoSettings');

        if (savedGeneral) setGeneralSettings(JSON.parse(savedGeneral));
        if (savedSocial) setSocialSettings(JSON.parse(savedSocial));
        if (savedEmail) setEmailSettings(JSON.parse(savedEmail));
        if (savedSeo) setSeoSettings(JSON.parse(savedSeo));
    }, []);

    const handleSaveAll = () => {
        // Save to localStorage (in production, save to API)
        localStorage.setItem('siteGeneralSettings', JSON.stringify(generalSettings));
        localStorage.setItem('siteSocialSettings', JSON.stringify(socialSettings));
        localStorage.setItem('siteEmailSettings', JSON.stringify(emailSettings));
        localStorage.setItem('siteSeoSettings', JSON.stringify(seoSettings));

        setAlertMessage('All settings saved successfully!');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleReset = () => {
        setGeneralSettings({
            siteName: 'Smart School',
            siteTagline: 'Excellence in Education',
            siteLogo: '',
            siteFavicon: '',
            siteEmail: 'info@school.com',
            sitePhone: '+91 12345 67890',
            siteAddress: '123 School Street, Kolkata, West Bengal - 700001',
            copyrightText: '© 2026 Smart School. All rights reserved.',
        });
        setSocialSettings({
            facebook: 'https://facebook.com/smartschool',
            twitter: 'https://twitter.com/smartschool',
            instagram: 'https://instagram.com/smartschool',
            youtube: 'https://youtube.com/smartschool',
            linkedin: '',
        });
        setAlertMessage('Settings reset to default!');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleImageUpload = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setGeneralSettings({ ...generalSettings, [field]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AdminLayout title="Website Settings">
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="mb-4">
                    {alertMessage}
                </Alert>
            )}

            <Tabs defaultActiveKey="general" className="mb-4" fill>
                {/* General Settings Tab */}
                <Tab eventKey="general" title="General">
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">General Settings</h5>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Site Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={generalSettings.siteName}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Site Tagline</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={generalSettings.siteTagline}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, siteTagline: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Site Logo</Form.Label>
                                            <div className="d-flex align-items-center gap-3">
                                                {generalSettings.siteLogo && (
                                                    <Image src={generalSettings.siteLogo} height="50" alt="Logo" />
                                                )}
                                                <Form.Control
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e, 'siteLogo')}
                                                />
                                            </div>
                                            <small className="text-muted">Recommended size: 200x60px</small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Favicon</Form.Label>
                                            <div className="d-flex align-items-center gap-3">
                                                {generalSettings.siteFavicon && (
                                                    <Image src={generalSettings.siteFavicon} height="32" alt="Favicon" />
                                                )}
                                                <Form.Control
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e, 'siteFavicon')}
                                                />
                                            </div>
                                            <small className="text-muted">Recommended size: 32x32px</small>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label><FaEnvelope className="me-2" />Site Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={generalSettings.siteEmail}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, siteEmail: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label><FaPhone className="me-2" />Site Phone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={generalSettings.sitePhone}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, sitePhone: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaMapMarkerAlt className="me-2" />Site Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        value={generalSettings.siteAddress}
                                        onChange={(e) => setGeneralSettings({ ...generalSettings, siteAddress: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Copyright Text</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={generalSettings.copyrightText}
                                        onChange={(e) => setGeneralSettings({ ...generalSettings, copyrightText: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                {/* Social Media Tab */}
                <Tab eventKey="social" title="Social Media">
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Social Media Links</h5>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaFacebook className="text-primary me-2" />Facebook</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="https://facebook.com/yourpage"
                                        value={socialSettings.facebook}
                                        onChange={(e) => setSocialSettings({ ...socialSettings, facebook: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaTwitter className="text-info me-2" />Twitter / X</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="https://twitter.com/yourprofile"
                                        value={socialSettings.twitter}
                                        onChange={(e) => setSocialSettings({ ...socialSettings, twitter: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaInstagram className="text-danger me-2" />Instagram</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="https://instagram.com/yourprofile"
                                        value={socialSettings.instagram}
                                        onChange={(e) => setSocialSettings({ ...socialSettings, instagram: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaYoutube className="text-danger me-2" />YouTube</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="https://youtube.com/yourchannel"
                                        value={socialSettings.youtube}
                                        onChange={(e) => setSocialSettings({ ...socialSettings, youtube: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                {/* Email Settings Tab */}
                <Tab eventKey="email" title="Email (SMTP)">
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">SMTP Email Configuration</h5>
                            <Alert variant="info">
                                <small>Configure SMTP settings to enable email notifications (contact forms, password reset, etc.)</small>
                            </Alert>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>SMTP Host</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={emailSettings.smtpHost}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>SMTP Port</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={emailSettings.smtpPort}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>SMTP Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="your-email@gmail.com"
                                                value={emailSettings.smtpUser}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, smtpUser: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>SMTP Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="••••••••"
                                                value={emailSettings.smtpPass}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, smtpPass: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>From Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={emailSettings.fromEmail}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, fromEmail: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>From Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={emailSettings.fromName}
                                                onChange={(e) => setEmailSettings({ ...emailSettings, fromName: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                {/* SEO Settings Tab */}
                <Tab eventKey="seo" title="SEO">
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">SEO & Analytics Settings</h5>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Meta Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={seoSettings.metaTitle}
                                        onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
                                    />
                                    <small className="text-muted">Recommended length: 50-60 characters</small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Meta Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={seoSettings.metaDescription}
                                        onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
                                    />
                                    <small className="text-muted">Recommended length: 150-160 characters</small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Meta Keywords</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="school, education, best school"
                                        value={seoSettings.metaKeywords}
                                        onChange={(e) => setSeoSettings({ ...seoSettings, metaKeywords: e.target.value })}
                                    />
                                    <small className="text-muted">Separate keywords with commas</small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Google Analytics ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="G-XXXXXXXXXX"
                                        value={seoSettings.googleAnalytics}
                                        onChange={(e) => setSeoSettings({ ...seoSettings, googleAnalytics: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            {/* Action Buttons */}
            <div className="d-flex gap-3 justify-content-end mt-4">
                <Button variant="secondary" onClick={handleReset}>
                    <FaUndo className="me-2" /> Reset to Default
                </Button>
                <Button variant="primary" onClick={handleSaveAll}>
                    <FaSave className="me-2" /> Save All Settings
                </Button>
            </div>
        </AdminLayout>
    );
};

export default AdminSettings;