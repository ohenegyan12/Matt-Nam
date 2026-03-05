import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Recognition', href: '#recognition' },
        { name: 'Updates', href: '#updates' },
        { name: 'Impact', href: '/impact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="/" className="logo">
                    <img src="/logo-main.svg" alt="Matt Nam" className="nav-logo-img" />
                </a>

                {/* Desktop Menu */}
                <div className="nav-group desktop-only">
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
                        ))}
                    </div>
                    <a href="#contact" className="nav-btn">Get in Touch</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle mobile-only" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-nav-overlay mobile-only"
                        >
                            <div className="mobile-nav-content">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="mobile-nav-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    className="nav-btn mobile-nav-btn"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
