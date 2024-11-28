import './Footer.css'; 
import React, { useState } from 'react';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="footer-container">
      <ul className="footer-links">
        <li>
          <a 
            href="#contact" 
            onClick={() => toggleSection('contact')} 
            className={openSection === 'contact' ? 'active' : ''}
          >
            Contact Us
          </a>
          {openSection === 'contact' && (
            <div className="footer-detail">
              <p><i className="fas fa-phone-alt"></i> Phone: (123) 456-7890</p>
              <p><i className="fas fa-envelope"></i> Email: support@bookbliss.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Address: 123 Book Bliss Ave, Library City, BK 10234</p>
            </div>
          )}
        </li>
        
        <li>
          <a 
            href="#about" 
            onClick={() => toggleSection('about')} 
            className={openSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          {openSection === 'about' && (
            <div className="footer-detail">
              <p>At Book Bliss, we believe in the transformative power of reading. 
                Our mission is to provide a welcoming space for book lovers of all ages, 
                where they can discover a diverse selection of titles spanning various genres—from
                timeless classics to contemporary bestsellers. We are dedicated to fostering a love 
                for literature in our community by offering personalized recommendations, hosting events,
                and curating unique collections that reflect the interests of our readers. 
                Whether you’re searching for your next great read or a thoughtful gift,
                Book Bliss is here to inspire and support your literary journey.</p>
            </div>
          )}
        </li>
        
        <li>
          <a 
            href="#shipping" 
            onClick={() => toggleSection('shipping')} 
            className={openSection === 'shipping' ? 'active' : ''}
          >
            Shipping
          </a>
          {openSection === 'shipping' && (
            <div className="footer-detail">
              <p>At Book Bliss, we strive to make your shopping experience seamless and convenient.
                Enjoy free shipping on orders over PKR 2500, with standard delivery times of 5-7 
                business days. We take pride in ensuring your books arrive safely and promptly, 
                so you can dive into your next read without delay!</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
