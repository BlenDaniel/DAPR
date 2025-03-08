"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Styled from "./styles";

const mainNavItems = [
  { title: "About Me", slug: "/" },
  { title: "Resume", slug: "/resume" },
  { title: "Blog", slug: "/blog" },
  { title: "Contact Me", slug: "/contact" },
];

const MainNav: React.FC = () => {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* Toggle Button with Icon */}
      <Styled.ToggleButton
        data-is-nav-visible={isNavVisible}
        onClick={toggleNavVisibility}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isNavVisible ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </motion.svg>
      </Styled.ToggleButton>

      {/* Navigation Menu */}
      <Styled.MainNav
        className={`${isNavVisible ? "block" : "hidden"} sm:flex`}
      >
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            className={pathname === item.slug ? "active" : ""}
          >
            <Link href={item.slug} passHref legacyBehavior>
              <motion.a whileTap={{ scale: 0.9 }}>{item.title}</motion.a>
            </Link>
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
    </>
  );
};

export default MainNav;
