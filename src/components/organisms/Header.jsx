import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">정은유</Link>
      </h1>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.link} ${
              location.pathname === item.path ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
