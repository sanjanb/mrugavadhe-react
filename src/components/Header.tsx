import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      children: [
        { name: 'History', href: '/about/history' },
        { name: 'Architecture', href: '/about/architecture' },
        { name: 'Trust', href: '/about/trust' },
      ],
    },
    { name: 'Deities', href: '/deities' },
    {
      name: 'Festivals',
      href: '/festivals',
      children: [
        { name: 'Calendar', href: '/festivals/calendar' },
      ],
    },
    { name: 'Pooja & Seva', href: '/pooja' },
    { name: 'Visitor Info', href: '/visitor-info' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Donate', href: '/donate' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <img src="/images/temple-logo.png" alt="Mrugavadhe Temple" className={styles.logoImg} />
            <div className={styles.logoText}>
              <h1>श्री मल्लिकार्जुन स्वामी</h1>
              <p>Mrugavadhe Temple</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`${styles.navLinks} ${styles.desktopNav}`}>
            {navigation.map((item) => (
              <div key={item.name} className={styles.navItem}>
                {item.children ? (
                  <div className={styles.dropdown}>
                    <button
                      className={`${styles.navLink} ${styles.dropdownTrigger} ${
                        item.children.some(child => isActive(child.href)) ? styles.active : ''
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                    {openDropdown === item.name && (
                      <div className={styles.dropdownMenu}>
                        <Link to={item.href} className={styles.dropdownItem}>
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`${styles.dropdownItem} ${isActive(child.href) ? styles.active : ''}`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {navigation.map((item) => (
              <div key={item.name} className={styles.mobileNavItem}>
                <Link
                  to={item.href}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className={styles.mobileDropdown}>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`${styles.mobileDropdownLink} ${isActive(child.href) ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
