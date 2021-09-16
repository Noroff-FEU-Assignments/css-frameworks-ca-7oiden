import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">
            <i class="fab fa-vimeo-v footer-icon"></i>
          </a>
          <a href="/">
            <i class="fab fa-youtube footer-icon"></i>
          </a>
        </div>
        <div className="footer-info">
          <div id="email-link">hello@yay.com</div>
          <div>Copyright 2020</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
