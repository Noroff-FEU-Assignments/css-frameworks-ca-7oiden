import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links-container">
          <i class="fab fa-vimeo-v"></i>
          <i class="fab fa-youtube"></i>
        </div>
        <div className="copyright-container">
          <div className="hello">hello@yay.com</div>
          <div>Copyright 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
