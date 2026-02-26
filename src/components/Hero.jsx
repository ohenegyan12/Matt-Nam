import { motion } from 'framer-motion';
import Navbar from './Navbar';
import '../index.css';

const Hero = () => {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                backgroundColor: '#000',
                overflow: 'hidden',
                color: '#fff',
                borderRadius: '0 0 100% 100% / 0 0 80px 80px',
                zIndex: 2
            }}
        >
            {/* Background Image - Drives section height */}
            <img
                src="/images/matt-hero.webp"
                alt="Background"
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    objectPosition: 'top right'
                }}
            />

            {/* Overlay Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                zIndex: 1
            }}></div>

            {/* Navbar Layer */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                <Navbar />
            </div>

            {/* Content Container */}
            <div className="container" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                zIndex: 5
            }}>
                <div style={{ maxWidth: '600px', paddingTop: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/logo-main.svg"
                            alt="Hero Logo"
                            style={{
                                height: '120px',
                                marginBottom: '2rem'
                            }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            marginBottom: '3rem',
                            maxWidth: '500px'
                        }}
                    >
                        I work at the intersection of strategy, technology, and growth, helping platforms, teams, and ideas evolve into systems that actually work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ display: 'flex', gap: '1.5rem' }}
                    >
                        <a href="#portfolio" className="btn btn-primary" style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #fff' }}>View Portfolio</a>
                        <a href="#resume" className="btn btn-outline">Download Resume</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
