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

            {/* ── SECTION: Why Farmers? ── */}
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
                            <h2 className="impact-section-title">Why Farmers?</h2>
                            <p className="impact-section-text">
                                The people who produce coffee are often the furthest from the systems that control how it moves through the world.
                            </p>
                            <p className="impact-section-text">
                                Spending time with farmers revealed how complex and fragmented the supply chain behind coffee really is. That realization shaped my focus on building more connected systems that make sourcing, production, and distribution easier for everyone involved.
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
                            <img src="/images/why-farmers.webp" alt="Why Farmers?" className="impact-img" />
                        </motion.div>
                    </div>
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
                                I founded Win Win Coffee to stay closely connected to the people who grow the beans behind every cup. Spending time on farms has given me a firsthand understanding of the work, risk, and knowledge involved in producing great coffee.
                            </p>
                            <p className="impact-section-text">
                                When I visit farms, the goal isn’t simply to source coffee. It’s to listen, learn, and build relationships with the producers whose work defines the quality of what we drink.
                            </p>
                            <p className="impact-section-text">

                                Those relationships continue to shape how I think about sourcing, transparency, and the broader systems that connect producers to the global coffee market.
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
                            <h2 className="impact-section-title">Supporting Women Farmers</h2>
                            <p className="impact-section-text">
                                In farming communities around the world, women often carry much of the responsibility for agricultural work while remaining the least visible in the broader system.
                            </p>
                            <p className="impact-section-text">
                                Meeting and working alongside these producers changed how I think about opportunity in agriculture. When women have access to resources, markets, and recognition, the effects reach far beyond the farm.
                            </p>
                            <p className="impact-section-text">
                                Supporting and highlighting their work continues to shape how I approach the projects and partnerships I build.
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
            <section className="section bg-white impact-section">
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
                            Coffee offers a clear window into how supply chains work. A single cup depends on farmers, processors, exporters, roasters, and distributors working in coordination.
                        </p>
                        <p className="impact-section-text">
                            Evaluating coffee through cupping is one small step in that journey. It’s a reminder that every finished product reflects a network of people and decisions long before it reaches the consumer.
                        </p>
                        <p className="impact-section-text">
                            That perspective continues to shape how I approach supply chains and the systems that connect them.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── SECTION: Celebrating Farmer Excellence ── */}
            <section className="impact-flush-section bg-dark">
                {/* Image left - flush to left/top/bottom */}
                <motion.div
                    className="flush-image-wrap"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/images/farmer-exellence.webp" alt="Celebrating Farmer Excellence" className="flush-img" />
                </motion.div>

                {/* Content right */}
                <motion.div
                    className="flush-content-block"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="impact-section-title">Celebrating Farmer Excellence</h2>
                    <p className="impact-section-text">
                        Judging Colombia’s National Coffee Competition was one of the most meaningful moments of my time working in coffee. Watching producers receive national recognition for the quality of their beans was a powerful reminder that behind every great coffee is a family, years of experience, and a deep commitment to craft.
                    </p>
                    <p className="impact-section-text">
                        Experiences like this continue to shape my mission with Win Win Coffee: to ensure the people behind exceptional coffee are recognized and valued globally.
                    </p>
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
