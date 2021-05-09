import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./style";

const Header = ({ setQuery, query, getData }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form query={query} setQuery={setQuery} getData={getData} />
    </HeaderContainer>
  );
};

export default Header;
