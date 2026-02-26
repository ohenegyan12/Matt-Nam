import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
    const awards = [
        {
            year: "2025",
            title: "Top 10 Startup to Watch",
            source: "PHILADELPHIA BUSINESS JOURNAL"
        },
        {
            year: "2024",
            title: "Product of the Year",
            source: "TECHNICAL.LY"
        },
        {
            year: "2018",
            title: "Trailblazer Award",
            source: "COMMERCIAL INNOVATION"
        }
    ];

    return (
        <section className="section bg-white" id="recognition">
            <div className="container">
                <div className="recognition-grid">
                    {/* Featured Award Card */}
                    <motion.div
                        className="recognition-featured-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/icons/badge.svg" alt="Award Badge" className="recognition-badge" />
                        <h3>Forbes Next 1000 Honoree</h3>
                        <p>
                            Recognized by Forbes for entrepreneurial leadership and the successful
                            commercialization of disruptive healthcare technology.
                        </p>
                    </motion.div>

                    {/* Recognition List */}
                    <div className="recognition-content-side">
                        <div className="recognition-header">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Recognition & Expertise
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Consistently recognized for product innovation and sales excellence
                                within the Philadelphia and National Tech ecosystems.
                            </motion.p>
                        </div>

                        <div className="recognition-list">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    className="recognition-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                >
                                    <div className="recog-year">{award.year}</div>
                                    <div className="recog-content">
                                        <h4>{award.title}</h4>
                                        <span>{award.source}</span>
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

export default Impact;
