import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Temple Info */}
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <img src="/images/temple-logo.png" alt="Mrugavadhe Temple" className={styles.footerLogoImg} />
              <div>
                <h3>श्री मल्लिकार्जुन स्वामी</h3>
                <p>Mrugavadhe Temple</p>
              </div>
            </div>
            <p className={styles.footerDescription}>
              A sacred place of worship on the banks of river Tunga, where Lord Rama installed 
              the Shivalinga after slaying demon Maricha. Experience divine blessings at this 
              ancient temple with its magnificent 4.5 feet Shivalinga.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/about/history">Temple History</Link></li>
              <li><Link to="/deities">Deities</Link></li>
              <li><Link to="/festivals">Festivals</Link></li>
              <li><Link to="/pooja">Pooja & Seva</Link></li>
              <li><Link to="/visitor-info">Visitor Information</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/pooja">Online Booking</Link></li>
              <li><Link to="/donate">Donations</Link></li>
              <li><Link to="/visitor-info">Accommodation</Link></li>
              <li><Link to="/news">Latest Updates</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Volunteer Program</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4>Contact Information</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <div>
                  <strong>Address:</strong><br />
                  Mrugavadhe Village,<br />
                  Thirthahalli Taluk,<br />
                  Shivamogga District - 577432<br />
                  Karnataka, India
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <div>
                  <strong>Phone:</strong><br />
                  +91 8181 234567<br />
                  +91 8181 234568
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <div>
                  <strong>Email:</strong><br />
                  info@mrugavadhetemple.org<br />
                  booking@mrugavadhetemple.org
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} श्री मल्लिकार्जुन स्वामी मंदिर, Mrugavadhe. All rights reserved.</p>
            </div>
            <div className={styles.footerBottomLinks}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
          <div className={styles.templeHours}>
            <strong>Darshan Hours:</strong> 
            <span>Morning: 6:00 AM - 12:00 PM | Evening: 4:00 PM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;