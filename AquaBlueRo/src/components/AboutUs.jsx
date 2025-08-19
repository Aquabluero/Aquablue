import React from 'react';
import './AboutUs.css';
import ClientFeedback from './ClientFeedback';
import Footer from './Footer';

const aboutImage = 'https://nexusseries.in/img/product/product-5-sm.jpg'; 

export default function AboutUs() {
  return (
    <>
      <div className="about-us-page">
        {/* Top banner hero */}
        <div className="about-hero">
          <h1>About Us</h1>
        </div>

        {/* Breadcrumb row */}
        <div className="about-breadcrumb">
          <span>Home</span> / <span>About Us</span>
        </div>

        {/* Main content section */}
        <section className="about-content">
          <div className="about-content-left">
            {/* Left column image */}
            <img src={aboutImage} alt="Aquablue Series" />
          </div>
          <div className="about-content-right">
            <h2>AQUABLUE SERIES</h2>
            <h3>Trusted Manufacturer of Advanced Water Purifiers and RO Spares</h3>
            <p><strong>Introducing the Aquablue Series water purifier:</strong></p>
            <p>
              Aquablue is an ISO 9001:2008 certified company committed to delivering premium quality 
              water purification systems. Our name stands for purity, performance, and innovation, 
              making us a preferred choice for thousands of households and businesses across the country.
            </p>
            <p>
              Designed with cutting-edge technology and built with uncompromising components, 
              Aquablue purifiers ensure clean, safe, and great-tasting water with every use.
            </p>
            <p>
              Backed by a strong network of dealers and distributors, we provide reliable 
              and responsive after-sales service — a cornerstone of every trusted RO system.
              With a skilled team and modern infrastructure, we strive to meet international 
              standards while catering to local needs.
            </p>
          </div>
        </section>
      </div>

      {/* Client Feedback Section */}
      <ClientFeedback />
      <Footer />
    </>
  );
}
