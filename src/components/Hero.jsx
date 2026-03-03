import { motion } from 'framer-motion';
import Navbar from './Navbar';
import '../index.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-wrapper">
                {/* Background Image - Drives section height */}
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/hero-mobile.png" />
                    <img
                        src="/images/matt-hero.webp"
                        alt="Background"
                        className="hero-bg-img"
                    />
                </picture>
                {/* Overlay Layer */}
                <div className="hero-overlay"></div>
            </div>

            {/* Navbar Layer */}
            <div className="hero-navbar-wrapper">
                <Navbar />
            </div>

            {/* Content Container */}
            <div className="container hero-content-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-logo-wrapper desktop-only"
                    >
                        <img
                            src="/logo-main.svg"
                            alt="Hero Logo"
                            className="hero-logo-main"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-description"
                    >
                        I work at the intersection of strategy, technology, and growth, helping platforms, teams, and ideas evolve into systems that actually work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-buttons"
                    >
                        <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
                        <a href="#resume" className="btn btn-outline">Download Resume</a>
                    </motion.div>
                </div>
            </div>

            {/* Curve at bottom */}
            <div className="hero-curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
