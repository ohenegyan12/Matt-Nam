import React from 'react';
import { motion } from 'framer-motion';

const Recognition = () => {
    return (
        <section className="section bg-white" id="recognition">
            <div className="container">
                <div className="recognition-grid">
                    {/* Left: Featured Award */}
                    <motion.div
                        className="recognition-featured-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/icons/badge.svg" alt="Badge" className="recognition-badge" />
                        <h3>Excellence in Commercial Strategy</h3>
                        <p>
                            Awarded for driving transformative commercial outcomes and scaling complex
                            med-tech platforms across global markets.
                        </p>
                    </motion.div>

                    {/* Right: Recognition List */}
                    <div className="recognition-main-content">
                        <div className="recognition-header">
                            <span className="about-label">Recognition</span>
                            <h2>Awards & Honors</h2>
                            <p>Validation from industry bodies for strategic leadership and innovative impact.</p>
                        </div>

                        <div className="recognition-list">
                            {[
                                { year: "2023", title: "Strategic Growth Award", org: "Pharma Innovation Summit" },
                                { year: "2022", title: "MedTech Leadership Award", org: "Health Tech Forum" },
                                { year: "2021", title: "Global Expansion Excellence", org: "EMEA Business Leaders" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="recognition-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="recog-year">{item.year}</div>
                                    <div className="recog-content">
                                        <h4>{item.title}</h4>
                                        <span>{item.org}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recognition;
