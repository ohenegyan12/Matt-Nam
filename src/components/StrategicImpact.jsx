import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StrategicImpact = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const projects = [
        {
            logo: "/images/vianexta.png",
            role: "Founder",
            title: "ViaNexta",
            description: "Building the AI infrastructure that turns complex private label supply chains into a few simple clicks.",
            tags: ["Supply Chain", "AI", "Startup Scale"],
            buttonText: "Visit Project",
            link: "https://vianexta.com/",
            dotColor: "#3b82f6"
        },
        {
            logo: "/images/doceree.png",
            role: "Global Head of Sales",
            title: "Doceree Scale-Up",
            description: "Pioneered the development of a comprehensive healthcare media ecosystem and scaled global operations.",
            tags: ["Global Strategy", "AI", "Startup Scale"],
            buttonText: "Visit Site",
            link: "https://doceree.com",
            dotColor: "#3b82f6"
        },
        {
            logo: "/images/publisher.png",
            role: "VR Commercial Strategy",
            title: "Publisher Health",
            description: "Implemented EHR header bidding technology and onboarded major POC platforms to drive revenue growth.",
            tags: ["ADTECH", "EHR", "Header Bidding"],
            buttonText: "Visit Site",
            link: "https://publisherhealth.com",
            dotColor: "#3b82f6"
        }
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, offsetWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / offsetWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section className="section bg-light-gray" id="strategic-impact">
            <div className="container">
                <div className="impact-header mb-24">
                    <h2 className="impact-title">Strategic Impact</h2>
                    <p className="impact-subtitle">
                        Deep-dive into the platforms and revenue systems I’ve built and optimized.
                    </p>
                </div>

                <div
                    className="impact-grid"
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="impact-project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="impact-project-logo-container">
                                <img src={project.logo} alt={project.title} className="impact-project-logo" />
                            </div>

                            <div className="impact-project-content">
                                <div className="impact-project-role">
                                    <span className="dot" style={{ backgroundColor: project.dotColor }}></span>
                                    {project.role}
                                </div>
                                <h3 className="impact-project-title">{project.title}</h3>
                                <p className="impact-project-description">{project.description}</p>

                                <div className="impact-project-tags">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="impact-tag">{tag}</span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="impact-btn"
                                >
                                    {project.buttonText}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="impact-pagination-dots mobile-only">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`impact-dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left: index * scrollRef.current.offsetWidth,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicImpact;

