"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import Container from "../ui/Container";

import * as Styled from "./styles";

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Content>
        <Styled.Logo>John Smith</Styled.Logo>
        <Styled.Description>
          Architecture Engineer & Entrepreneur based in San Francisco, CA.
          Specializing in innovative and sustainable design solutions.
        </Styled.Description>
        <Styled.SocialLinks>
          <Styled.SocialLink
            href="https://linkedin.com/"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Styled.SocialLink>
          <Styled.SocialLink
            href="https://facebook.com/"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Styled.SocialLink>
        </Styled.SocialLinks>
      </Styled.Content>
      <Styled.Bottom>
        <Styled.Copyright>
          © {new Date().getFullYear()} John Smith. All rights reserved.
        </Styled.Copyright>
        <Styled.NavLinks>
          <Link href="/" passHref>
            <Styled.NavLink>Home</Styled.NavLink>
          </Link>
          <Link href="/projects" passHref>
            <Styled.NavLink>Projects</Styled.NavLink>
          </Link>
          <Link href="/blog" passHref>
            <Styled.NavLink>Blog</Styled.NavLink>
          </Link>
          <Link href="/contact" passHref>
            <Styled.NavLink>Contact</Styled.NavLink>
          </Link>
        </Styled.NavLinks>
      </Styled.Bottom>
    </Container>
  </Styled.Footer>
);

export default Footer;
