import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" className="logo">
                    <img src="/logo-main.svg" alt="Matt Nam" style={{ maxHeight: '40px' }} />
                </a>

                <div className="nav-group" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#expertise" className="nav-link">Expertise</a>
                        <a href="#recognition" className="nav-link">Recognition</a>
                        <a href="#updates" className="nav-link">Updates</a>
                    </div>
                    <a href="#contact" className="nav-btn">Get in Touch</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
