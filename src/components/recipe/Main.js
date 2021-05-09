import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { MainContainer } from "./style";
import Header from "../header/Header";

const Main = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("alcohol-free");

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        console.log("No food with such name");
      }
      console.log(result.data.hits);
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      console.log("Please fill the form");
    }
  };

  return (
    <div>
      <Header setQuery={setQuery} query={query} getData={getData} />
      <MainContainer>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </MainContainer>
    </div>
  );
};

export default Main;
