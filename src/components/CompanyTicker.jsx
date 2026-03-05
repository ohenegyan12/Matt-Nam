import React from 'react';
import '../index.css';

const CompanyTicker = () => {
    const companies = [
        { name: 'Company 1', logo: '/companies/company-1.webp' },
        { name: 'Company 2', logo: '/companies/company-2.webp' },
        { name: 'Company 3', logo: '/companies/company-3.webp' },
        { name: 'Company 4', logo: '/companies/company-4.webp' },
        { name: 'Company 5', logo: '/companies/company-5.png' },
        { name: 'Company 6', logo: '/companies/company-6.png' },
    ];

    // Duplicate the list to create a seamless infinite scroll effect
    // CSS animation moves the track by -50%, so duplicating the items twice
    // ensures that when it loops, the visible sequence continues without gaps.
    const tickerItems = [...companies, ...companies];

    return (
        <section className="ticker-container">
            <div className="ticker-mask"></div>
            <div className="ticker-track">
                {tickerItems.map((company, index) => (
                    <div key={index} className="ticker-item">
                        <img src={company.logo} alt={company.name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyTicker;
