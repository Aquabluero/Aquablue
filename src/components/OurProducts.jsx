import React from 'react';
import './OurProducts.css';
import ClientFeedback from './ClientFeedback';
import Footer from './Footer';

// Dummy product data (image links, names, prices)
const dummyProducts = [
  {
    id: 1,
    name: 'Nexus inline Filter',
    price: 'INR 350',
    img: ("/src/assets/Page2.jpg")
  },
  {
    id: 2,
    name: 'TDS Meter',
    price: 'INR 799',
    img: ("/src/assets/Page3.jpg")
  },
  {
    id: 3,
    name: 'Membrane Housing',
    price: 'INR 499',
    img: ("/src/assets/Page4.jpg")
  },
  {
    id: 4,
    name: 'Another Product',
    price: 'INR 599',
    img: ("/src/assets/Page2.jpg")
  },
  {
    id: 1,
    name: 'Nexus inline Filter',
    price: 'INR 350',
    img: ("/src/assets/Page4.jpg")
  },
  {
    id: 2,
    name: 'TDS Meter',
    price: 'INR 799',
    img: ("/src/assets/Page2.jpg")
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
