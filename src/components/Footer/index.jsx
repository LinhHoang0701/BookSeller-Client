import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <div className="footer-logo mb-3"></div>
              <p>
                Appland is completely creative, lightweight, clean app landing
                page.
              </p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  Made with <i className="lni-heart mr-1"></i>by
                  <Link className="ml-1" to="">
                    Designing World
                  </Link>
                </p>
              </div>
              <div className="footer_social_area">
                <a
                  to=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  to=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Pinterest"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
                <a
                  to=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Skype"
                >
                  <i className="fab fa-skype"></i>
                </a>
                <a
                  to=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">About</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a to="">About Us</a>
                  </li>
                  <li>
                    <a to="">Corporate Sale</a>
                  </li>
                  <li>
                    <a to="">Terms &amp; Policy</a>
                  </li>
                  <li>
                    <a to="">Community</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Support</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a to="">Help</a>
                  </li>
                  <li>
                    <a to="">Support</a>
                  </li>
                  <li>
                    <a to="">Privacy Policy</a>
                  </li>
                  <li>
                    <a to="">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a to="">Help &amp; Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Contact</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a to="">Call Centre</a>
                  </li>
                  <li>
                    <a to="">Email Us</a>
                  </li>
                  <li>
                    <a to="">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a to="">Help Center</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
