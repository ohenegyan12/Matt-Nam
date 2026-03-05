import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const images = [
        "/images/about-1.jpg",
        "/images/about-2.jpg",
        "/images/about-3.JPG"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="section bg-white" id="about">
            <div className="container">
                <div className="grid grid-2 grid-about items-center">
                    {/* Left Side: Image Carousel */}
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-image-card" style={{ position: 'relative', overflow: 'hidden' }}>
                            <img
                                src={images[currentIndex]}
                                alt={`About Matt ${currentIndex + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div className="pagination-dots">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    style={{ cursor: 'pointer' }}
                                ></span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="about-label">About Me</span>
                        <h2 className="about-title">The Journey.</h2>
                        <h3 className="about-subtitle">From Science to Commercial Leadership</h3>

                        <div className="about-description">
                            <p className="about-text">
                                My journey hasn’t followed a straight line, and I’m glad it didn’t.
                                I began in spaces rooted in science, health, and human outcomes,
                                where precision mattered and impact was tangible.
                            </p>
                            <p className="about-text">
                                Over time, I found myself drawn to larger systems: platforms, products,
                                and commercial models that shape how value moves. What ties everything
                                together is a fascination with connection, people to platforms, strategy
                                to execution, vision to reality.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

