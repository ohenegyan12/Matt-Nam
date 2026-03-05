import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImpactPage = () => {
    return (
        <div className="App w-full">

            {/* ── HERO ── */}
            <section className="hero-section impact-hero-section">
                <div className="hero-bg-wrapper">
                    <img
                        src="/images/impact-hero.webp"
                        alt="Humanitarian Impact"
                        className="hero-bg-img impact-hero-bg-img"
                    />
                    <div className="hero-overlay impact-hero-overlay"></div>
                </div>

                {/* Navbar */}
                <div className="hero-navbar-wrapper">
                    <Navbar />
                </div>

                {/* Hero text — bottom-left */}
                <div className="container impact-hero-content-container">
                    <motion.div
                        className="impact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="impact-hero-label">HUMANITARIAN IMPACT:</span>
                        <h1 className="impact-hero-title">
                            Growing Coffee.<br />
                            Empowering Communities.
                        </h1>
                    </motion.div>
                </div>

                {/* White curve — same as homepage */}
                <div className="hero-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* ── SECTION 1: Working Directly With Farmers ── */}
            <section className="section bg-white impact-section">
                <div className="container">
                    <div className="impact-content-grid">
                        {/* Image left */}
                        <motion.div
                            className="impact-image-wrap"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/farmers-meet.webp" alt="Working Directly With Farmers" className="impact-img" />
                        </motion.div>

                        {/* Text right */}
                        <motion.div
                            className="impact-text-block"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="impact-section-title">Working Directly With Farmers</h2>
                            <p className="impact-section-text">
                                I created Win Win Coffee, a coffee brand that doesn't only believe in spending time with producers, but in truly connecting with the people who grow the beans that make every cup possible.
                            </p>
                            <p className="impact-section-text">
                                When I visit farms in Colombia, I'm not just sourcing coffee. I'm learning from farmers, understanding their challenges, and building real relationships that go far beyond the supply chain.
                            </p>
                            <p className="impact-section-text">
                                These connections allow us to support sustainable practices and help strengthen the communities behind the coffee.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: Supporting Women in Coffee ── */}
            <section className="section bg-white impact-section">
                <div className="container">
                    <div className="impact-content-grid impact-content-grid--reverse">
                        {/* Text left */}
                        <motion.div
                            className="impact-text-block"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="impact-section-title">Supporting Women in Coffee</h2>
                            <p className="impact-section-text">
                                During my visits to coffee communities, I've met incredible women who are at the heart of coffee production, cultivating the farms, managing harvests, and supporting their families through coffee.
                            </p>
                            <p className="impact-section-text">
                                Working alongside them has shown me that empowering women in coffee strengthens entire communities. Through Win Win Coffee, my goal is to highlight their work and support opportunities that allow these producers to grow and thrive.
                            </p>
                        </motion.div>

                        {/* Image right */}
                        <motion.div
                            className="impact-image-wrap"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/supporting-women.webp" alt="Supporting Women in Coffee" className="impact-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: From Farm to Cup ── */}
            <section className="section bg-white impact-section impact-farmtocup-section">
                <div className="container">
                    <motion.h2
                        className="impact-farmtocup-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        From Farm to Cup
                    </motion.h2>
                    <motion.div
                        className="impact-farmtocup-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="impact-section-text">
                            For me, coffee is about more than flavor, it's about honoring the people behind it. Every time we evaluate beans through cupping and quality testing, I'm reminded of the dedication and care farmers put into every harvest.
                        </p>
                        <p className="impact-section-text">
                            From the farm to the final cup, my mission with Win Win Coffee is to ensure that the work of these communities is respected, recognized, and shared with the world.
                        </p>
                    </motion.div>
                </div>

                {/* Full-width image */}
                <motion.div
                    className="impact-farmtocup-img-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/images/fromfarm-mobile.webp" />
                        <img src="/images/fromfarm.webp" alt="From Farm to Cup" className="impact-farmtocup-img" />
                    </picture>
                </motion.div>
            </section>

            {/* ── SECTION 4: Scrolling Gallery ── */}
            <section className="impact-gallery-section">
                {[
                    {
                        images: [
                            '/images/Rectangle-52.webp',
                            '/images/Rectangle-53.webp',
                            '/images/Rectangle-55.webp',
                        ],
                        direction: 'left',
                    },
                    {
                        images: [
                            '/images/impact-hero.webp',
                            '/images/Rectangle-58.webp',
                            '/images/Rectangle-56.webp',
                        ],
                        direction: 'right',
                    },
                    {
                        images: [
                            '/images/Rectangle-59.webp',
                            '/images/Rectangle-60.webp',
                            '/images/matt-farm.webp',
                        ],
                        direction: 'left',
                    },
                ].map((row, rowIdx) => (
                    <div key={rowIdx} className="impact-gallery-row">
                        <div className={`impact-gallery-track impact-gallery-track--${row.direction}`}>
                            {/* Duplicate once for seamless -50% loop */}
                            {[...row.images, ...row.images].map((src, i) => (
                                <div key={i} className="impact-gallery-card">
                                    <img src={src} alt={`Gallery ${rowIdx}-${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Footer />


        </div>
    );
};

export default ImpactPage;
