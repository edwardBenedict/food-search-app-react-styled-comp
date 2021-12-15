import React, { useState } from "react";
import { Nav, Hamburger, MenuLink, Menu, Logo } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>{"<ed8en/>"}</i> <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink
          href="https://github.com/edwardBenedict"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </MenuLink>
        <MenuLink
          href="/login"
          onClick={() => {
            localStorage.removeItem("isAuth");
          }}
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
