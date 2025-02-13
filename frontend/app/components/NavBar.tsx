// app/components/NavBar.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/mainScreen", label: "MainScreen" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "ContactPage" },
  ];
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsNavbarActive(!isNavbarActive);
    //document.body.style.overflow = isNavbarActive ? "auto" : "hidden";
  };

  return (
    <nav
      className={`${styles.navbar} ${show ? styles.active : styles.hidden} ${
        isNavbarActive ? styles.mobileActive : ""
      }`}
    >
      <div className={styles.navbarHeader}>
        <div
          className={`${styles.menuIcon} ${isNavbarActive ? styles.open : ""}`}
          onClick={toggleMobileMenu}
        >
          <RxHamburgerMenu size={30} />
        </div>
      </div>
      <div className={styles.navContent}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
