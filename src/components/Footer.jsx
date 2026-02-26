import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Left Side: Logo and Description */}
                <div className="footer-left">
                    <img
                        src="/logo-main.svg"
                        alt="Matthew Nam Logo"
                        className="footer-logo"
                    />
                    <div className="footer-info">
                        <p>Currently based in Philadelphia, USA.</p>
                        <p>Available for strategic consultations and advisory roles.</p>
                    </div>
                </div>

                {/* Center: Copyright */}
                <div className="footer-center">
                    <p>©2026 Matthew Nam. All rights reserved.</p>
                </div>

                {/* Right Side: Contact Details */}
                <div className="footer-right">
                    <div className="contact-item">
                        <FiPhone className="contact-icon" />
                        <span>000 0000 0000</span>
                    </div>
                    <div className="contact-item">
                        <FiMail className="contact-icon" />
                        <span>mnam8906@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FiMapPin className="contact-icon" />
                        <span>Philadelphia, USA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
