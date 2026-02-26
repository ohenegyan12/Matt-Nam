import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
    const expertiseItems = [
        {
            title: "Programmatic Infrastructure",
            description: "Expertise in Header Bidding (Client/Server), OpenRTB setups and Waterfall Yield Models. Proven ability to integrate DSPs and SSPs within complex healthcare environments like EHR and Point-of-Care (POC).",
            icon: "/icons/core-expectise.svg"
        },
        {
            title: "Ai & Media Innovation",
            description: "Deploying Ai-driven engagement strategies to boost provider/patient engagement and campaign ROI for top pharma brands.",
            icon: "/icons/core-expectise.svg"
        },
        {
            title: "Revenue Operations",
            description: "Full P&L ownership and commercial operating cadence. From CRM optimization to high-performing sales team development.",
            icon: "/icons/core-expectise.svg"
        },
        {
            title: "Global Market Expansion",
            description: "Successfully entered and scaled operations in US, UK and EMEA markets, securing multimillion-dollar contracts with life sciences operations.",
            icon: "/icons/core-expectise.svg"
        }
    ];

    return (
        <section className="section bg-white" id="expertise">
            <div className="container">
                <div className="text-center mb-24">
                    <span className="about-label">WHAT I DO</span>
                    <h2 className="about-title" style={{ fontSize: '3rem' }}>Core Expertise</h2>
                </div>

                <div className="expertise-grid">
                    {/* Left Column */}
                    <div className="expertise-side-col">
                        {expertiseItems.slice(0, 2).map((item, index) => (
                            <motion.div
                                key={index}
                                className="expertise-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="expertise-icon-box">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Middle Image Column */}
                    <motion.div
                        className="expertise-image-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/what-i-do.webp" alt="What I Do" />
                    </motion.div>

                    {/* Right Column */}
                    <div className="expertise-side-col">
                        {expertiseItems.slice(2, 4).map((item, index) => (
                            <motion.div
                                key={index}
                                className="expertise-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                            >
                                <div className="expertise-icon-box">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
