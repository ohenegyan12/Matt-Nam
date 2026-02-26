import React from 'react';

const Contact = () => {
    return (
        <footer className="footer bg-dark" id="contact" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'end' }}>
                    <div>
                        <img
                            src="/logo-main.svg"
                            alt="Matt Nam"
                            style={{ height: '50px', marginBottom: '2.5rem', filter: 'brightness(0) invert(1)' }}
                        />
                        <h2 className="about-title" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2.5rem' }}>
                            Let's build something <span style={{ color: 'var(--color-accent)' }}>tangible.</span>
                        </h2>
                        <a href="mailto:hello@mattnam.com" className="btn btn-primary" style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            Get in Touch
                        </a>
                    </div>

                    <div style={{ textAlign: 'right', paddingBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'flex-end', marginBottom: '4rem' }}>
                            <a href="#" className="footer-link">LinkedIn</a>
                            <a href="#" className="footer-link">Twitter</a>
                            <a href="#" className="footer-link">Resume</a>
                        </div>
                        <p style={{ color: '#444', fontSize: '0.9rem' }}>
                            © {new Date().getFullYear()} Matthew Nam. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
