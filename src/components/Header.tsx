import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();eact, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      children: [
        { name: "History", href: "/about/history" },
        { name: "Architecture", href: "/about/architecture" },
        { name: "Trust", href: "/about/trust" },
      ],
    },
    { name: "Deities", href: "/deities" },
    {
      name: "Festivals",
      href: "/festivals",
      children: [{ name: "Calendar", href: "/festivals/calendar" }],
    },
    { name: "Pooja & Seva", href: "/pooja" },
    { name: "Visitor Info", href: "/visitor-info" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donate", href: "/donate" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
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
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img
              src="/images/temple-logo.png"
              alt="Mrugavadhe Temple"
              className="logo-img"
            />
            <div className="logo-text">
              <h1>श्री मल्लिकार्जुन स्वामी</h1>
              <p>Mrugavadhe Temple</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navigation.map((item) => (
              <div key={item.name} className="nav-item">
                {item.children ? (
                  <div className="dropdown">
                    <button
                      className={`nav-link dropdown-trigger ${
                        item.children.some((child) => isActive(child.href))
                          ? "active"
                          : ""
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown size={16} className="dropdown-icon" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="dropdown-menu">
                        <Link to={item.href} className="dropdown-item">
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`dropdown-item ${
                              isActive(child.href) ? "active" : ""
                            }`}
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
                    className={`nav-link ${
                      isActive(item.href) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <div key={item.name} className="mobile-nav-item">
                <Link
                  to={item.href}
                  className={`mobile-nav-link ${
                    isActive(item.href) ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="mobile-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`mobile-dropdown-link ${
                          isActive(child.href) ? "active" : ""
                        }`}
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

      <style jsx>{`
        .header {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
        }

        .logo-img {
          width: 50px;
          height: 50px;
          margin-right: 1rem;
          border-radius: 50%;
        }

        .logo-text h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: white;
        }

        .logo-text p {
          font-size: 0.875rem;
          opacity: 0.9;
          color: white;
        }

        .desktop-nav {
          display: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffeb3b;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-trigger {
          background: none;
          border: none;
          color: white;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 200px;
          padding: 0.5rem 0;
          z-index: 1000;
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .dropdown-item:hover,
        .dropdown-item.active {
          background-color: #f8f9fa;
          color: #ff6b35;
        }

        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-nav {
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-nav-item {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0;
          color: white;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #ffeb3b;
        }

        .mobile-dropdown {
          padding-left: 1rem;
          margin-top: 0.5rem;
        }

        .mobile-dropdown-link {
          display: block;
          padding: 0.5rem 0;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
        }

        .mobile-dropdown-link:hover,
        .mobile-dropdown-link.active {
          color: #ffeb3b;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }

          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
