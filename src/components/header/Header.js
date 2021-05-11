import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./style";

const Header = ({ setQuery, query, getData, mealTypes, meal, setMeal }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        query={query}
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
