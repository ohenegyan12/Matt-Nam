import React from 'react';
import { motion } from 'framer-motion';

const Interview = () => {
    const videoUrl = "https://www.youtube.com/watch?v=s9OfhKwmE2k&list=PLfK_SNdezvZTLoEf4Xr5K99Wdb8gq8kV0&index=1&t=2s";

    return (
        <section className="section bg-white" id="interview">
            <div className="container">
                <div className="grid grid-2 items-center" style={{ gap: '4rem' }}>
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="interview-title">
                            Watch <span className="underline">my interview</span> with Matt Holland
                        </h2>
                        <p className="interview-text">
                            I had the opportunity to interview Matt Holland, as he reflects on 25 years in medical publishing and the responsibility that comes with serving clinicians at scale. From the shift toward personalization and microlearning to the rise of AI-powered tools, Holland shares how physician expectations are changing and what it means to meet them responsibly.
                        </p>
                    </motion.div>

                    {/* Right: Video Thumbnail */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <a
                            href={videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-wrapper"
                            style={{ display: 'block' }}
                        >
                            <img
                                src="/images/thumbnail.webp"
                                alt="Interview Thumbnail"
                                className="video-thumbnail"
                            />
                            <div className="play-button">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Interview;
