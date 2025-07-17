import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

function NavLinks() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <ul className={styles.navList}>
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
