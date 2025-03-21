import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Task Management. All rights reserved.</p>
        <ul className="footer__links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="/about">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
