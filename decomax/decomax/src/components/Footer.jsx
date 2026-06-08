import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">

            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="footer-logo">DECOMAX</h3>
              <p>
                Leading CCTV surveillance, biometric attendance,
                access control and security solutions provider.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Our Services</h5>
              <ul className="footer-links">
                <li>CCTV Installation</li>
                <li>Biometric Systems</li>
                <li>Access Control</li>
                <li>Video Door Phones</li>
                <li>Networking Solutions</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact Us</h5>

              <p>📍 Kochi, Kerala, India</p>
              <p>📞 +91 9061016991</p>
              <p>✉ info@decomax.in</p>
            </div>

          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        © 2026 Decomax Security Solutions. All Rights Reserved.
      </div>
    </>
  );
}