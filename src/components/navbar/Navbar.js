import React, { useState } from "react";
import { Nav, Hamburger, MenuLink, Menu, Logo } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>{"<ed8en/>"}</i> <span>food</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/edwardBenedict" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
