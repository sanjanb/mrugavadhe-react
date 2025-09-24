import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdown &&
        !(event.target as Element).closest(`.${styles.dropdown}`)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={styles.logo}
            aria-label="Mrugavadhe Temple Home"
          >
            <img
              src="/images/temple-logo.png"
              alt="Mrugavadhe Temple Logo"
              className={styles.logoImg}
            />
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
                        item.children.some((child) => isActive(child.href))
                          ? styles.active
                          : ""
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }
                      }}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        style={{
                          transform:
                            openDropdown === item.name
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition:
                            "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className={styles.dropdownMenu} role="menu">
                        <Link
                          to={item.href}
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`${styles.dropdownItem} ${
                              isActive(child.href) ? styles.active : ""
                            }`}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
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
                    className={`${styles.navLink} ${
                      isActive(item.href) ? styles.active : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav} id="mobile-menu" role="menu">
            {navigation.map((item) => (
              <div key={item.name} className={styles.mobileNavItem}>
                <Link
                  to={item.href}
                  className={`${styles.mobileNavLink} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className={styles.mobileDropdown}>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`${styles.mobileDropdownLink} ${
                          isActive(child.href) ? styles.active : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        role="menuitem"
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
