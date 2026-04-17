import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
    return (
        <div className="hero-section text-center text-white">
            <Container>
                <h1 className="display-4 fw-bold mb-3">{title}</h1>
                <p className="lead mb-4">{subtitle}</p>
                {buttonText && <Button variant="light" size="lg" href={buttonLink}>{buttonText}</Button>}
            </Container>
        </div>
    );
};

export default HeroSection;