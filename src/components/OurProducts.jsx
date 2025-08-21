import React from 'react';
import './OurProducts.css';
import ClientFeedback from './ClientFeedback';
import Footer from './Footer';

// Import images
import Page2Image from '../assets/Page2.jpg';
import Page3Image from '../assets/Page3.jpg';
import Page4Image from '../assets/Page4.jpg';
// Add other image imports as needed

// Dummy product data (image links, names, prices)
const dummyProducts = [
  {
    id: 1,
    name: 'Nexus inline Filter',
    price: 'INR 350',
    img: Page2Image
  },
  {
    id: 2,
    name: 'TDS Meter',
    price: 'INR 799',
    img: Page3Image
  },
  {
    id: 3,
    name: 'Membrane Housing',
    price: 'INR 499',
    img: Page4Image
  },
  {
    id: 4,
    name: 'Another Product',
    price: 'INR 599',
    img: Page2Image
  },
  {
    id: 5,
    name: 'Nexus inline Filter',
    price: 'INR 350',
    img: Page4Image
  },
  {
    id: 6,
    name: 'TDS Meter',
    price: 'INR 799',
    img: Page2Image
  },
  {
    id: 3,
    name: 'Membrane Housing',
    price: 'INR 499',
    img: ("/src/assets/Page3.jpg")
  },
  {
    id: 4,
    name: 'Another Product',
    price: 'INR 599',
    img: ("/src/assets/Page2.jpg")
  }
];

export default function OurProducts() {
  return (
    <>
    <div className="our-products-page">
      {/* 
        Top banner section 
        Use a background image or a solid color to mimic the screenshot.
      */}
      <div className="products-hero" >
        {/* 
          If you have a real image link for the top section, place it as background in CSS
          or use an <img />. For now, let's do a solid blue background in CSS.
        */}
        <h1>Our Product</h1>
      </div>

      {/* Breadcrumb-like nav (Home / Our Products) */}
      <div className="products-breadcrumb">
        <span>Home</span> &nbsp;/&nbsp; <span>Our Products</span>
      </div>

      {/* Main content: title, subtitle, product cards */}
      <section className="products-content">
        <h2>LATEST WATER PURIFICATION TECHNOLOGIES</h2>
        <p className="products-subtitle">
          Nexus series water purifier has different range of products with best features 
          required in today’s daily life.
        </p>

        <div className="products-grid">
          {dummyProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.name} className="product-image" />
              <p className="product-name">{item.name} {item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
     <ClientFeedback />
     <Footer/>
    </>

  );
}
