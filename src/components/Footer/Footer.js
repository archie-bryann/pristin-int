import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row ">
          <div className="footer-col col-md-3">
            <div className="about-wrapper ">
              <img src={""} className="mb-3" />
              <p>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsumLorem ipsumvvv
              </p>
            </div>
          </div>
          <div className="footer-col col-md-3">
            <h4>Navigate</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>Services</h4>
            <ul className="">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Specialization</a>
              </li>
              <li>
                <a href="#">Affordable</a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-3">
            <h4>follow us</h4>
            {/* <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
            <h5>Subscribe To Our Newsletter</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
