import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Detect Safari browser
const isSafari = () => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
};

// Extract the LinkedIn post URL from the embed URL
const getLinkedInPostUrl = (embedSrc) => {
    // Extract the URN from the embed URL
    const match = embedSrc.match(/urn:li:(?:ugcPost|share):(\d+)/);
    if (match) {
        return `https://www.linkedin.com/feed/update/urn:li:activity:${match[1]}`;
    }
    return 'https://www.linkedin.com';
};

const LinkedInFallbackCard = ({ post, index }) => {
    return (
        <motion.a
            href={getLinkedInPostUrl(post.src)}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-card linkedin-fallback-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'transparent',
                borderRadius: '12px',
                boxShadow: 'none',
                border: 'none',
                outline: 'none',
                transition: 'transform 0.3s ease',
            }}
                className="linkedin-fallback-inner"
            >
                {/* LinkedIn header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                    gap: '12px'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '18px'
                    }}>
                        MN
                    </div>
                    <div>
                        <div style={{
                            fontWeight: 600,
                            fontSize: '15px',
                            color: '#191919',
                            lineHeight: 1.3
                        }}>
                            Matt Nam
                        </div>
                        <div style={{
                            fontSize: '13px',
                            color: '#666',
                            lineHeight: 1.3,
                            marginTop: '2px'
                        }}>
                            Growth and Innovation Focused
                        </div>
                    </div>
                    <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5" />
                    </svg>
                </div>

                {/* Post preview text */}
                <div style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#333',
                    flex: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    marginBottom: '20px'
                }}>
                    {post.preview}
                </div>

                {/* View on LinkedIn CTA */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    justifyContent: 'center',
                    transition: 'opacity 0.2s ease'
                }}>
                    <span>View on LinkedIn</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>
            </div>
        </motion.a>
    );
};

const LinkedInPost = ({ post, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [iframeFailed, setIframeFailed] = useState(false);
    const iframeRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Set a timeout — if the iframe hasn't loaded content within 8 seconds,
        // assume it's blocked (e.g. Safari ITP) and show fallback
        timeoutRef.current = setTimeout(() => {
            if (!isLoaded) {
                setIframeFailed(true);
            }
        }, 8000);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isLoaded]);

    const handleLoad = () => {
        setIsLoaded(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // If on Safari, show the fallback card directly (Safari blocks LinkedIn embeds via ITP)
    if (isSafari()) {
        return <LinkedInFallbackCard post={post} index={index} />;
    }

    // If the iframe timed out, show fallback
    if (iframeFailed) {
        return <LinkedInFallbackCard post={post} index={index} />;
    }

    return (
        <motion.div
            key={index}
            className="linkedin-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {!isLoaded && (
                <div className="skeleton-loader" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    zIndex: 1,
                    borderRadius: '12px'
                }}></div>
            )}
            <iframe
                ref={iframeRef}
                src={post.src}
                height="100%"
                width="100%"
                frameBorder="0"
                allowFullScreen={true}
                title={`LinkedIn post ${index + 1}`}
                onLoad={handleLoad}
                loading="lazy"
                style={{
                    border: 'none',
                    borderRadius: '12px',
                    background: 'transparent',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    display: 'block'
                }}
            ></iframe>
        </motion.div>
    );
};

const LinkedInFeeds = () => {
    const scrollRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const posts = [
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7429902014857359360",
            height: "849",
            preview: "Thanks a16z speedrun and Google for an incredible week in San Francisco. A few key takeaways from the week: Expert context will define the next winners. The differentiator in this wave of AI adoption is domain context..."
        },
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7429272191264935937",
            height: "828",
            preview: "It's a wrap! Last week I spoke at Google NY on how intelligent, virtualized supply chains are reshaping global commerce. We discussed how this shift is already underway, and two themes stood out..."
        },
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7429190512546521088",
            height: "670",
            preview: "Energized after speaking at PayPal Dev Day! It was incredible to share the stage with sharp leaders from Google, Mesh, exploring how technology is reshaping commerce, connectivity, and ownership."
        },
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386048351978553344",
            height: "628",
            preview: "Appreciate PayPal for the invitation and the opportunity to contribute to the dialogue. Exploring the intersection of health media, adtech and supply chain innovation."
        },
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7379505327773474816",
            height: "628",
            preview: "HealthLink Dimensions — diving into what clinicians expect today and what it takes to deliver meaningful value at scale. Watch the full episode now, and stay tuned! Episode 2 is already in production!"
        },
        {
            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325519620382023680",
            height: "628",
            preview: "Exploring how innovations like PYUSD, Web3, and emerging agentic systems are rapidly reshaping the way brands engage, transact, and scale. Not in the future, but now."
        }
    ];

    const updateItemsPerPage = () => {
        if (window.innerWidth <= 768) setItemsPerPage(1);
        else if (window.innerWidth <= 1100) setItemsPerPage(2);
        else setItemsPerPage(3);
    };

    const scrollToPage = (pageIndex) => {
        if (scrollRef.current) {
            const clientWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: pageIndex * clientWidth,
                behavior: 'smooth'
            });
            setCurrentPage(pageIndex);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const newPage = Math.round(scrollLeft / clientWidth);
            if (newPage !== currentPage) {
                setCurrentPage(newPage);
            }
        }
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentPage]);

    const numPages = Math.ceil(posts.length / itemsPerPage);

    return (
        <section className="section bg-light-gray" id="updates" style={{ overflow: 'hidden' }}>
            <style>
                {`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .linkedin-fallback-inner:hover {
                    transform: translateY(-2px) !important;
                }
                .updates-carousel-wrapper {
                    position: relative;
                    width: 100%;
                }
                `}
            </style>

            <div className="container">
                <div className="updates-header mb-4 text-center">
                    <motion.h2
                        className="about-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What's Happening?
                    </motion.h2>
                    <motion.p
                        className="about-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Keep up to date with what's going on with Matt.
                    </motion.p>
                </div>

                <div className="updates-carousel-wrapper">
                    <div className="updates-grid" ref={scrollRef}>
                        {posts.map((post, index) => (
                            <LinkedInPost key={index} post={post} index={index} />
                        ))}
                    </div>

                    <div className="updates-dots">
                        {[...Array(numPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`update-dot ${currentPage === i ? 'active' : ''}`}
                                onClick={() => scrollToPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkedInFeeds;
