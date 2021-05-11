import React from "react";
import { FormContainer, FoodInput, Button, Select } from "./style";

const Form = ({ setQuery, query, getData, mealTypes, meal, setMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (event) => {
    setMeal(event.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <Button onClick={getData}>Search</Button>
      <Select name="mealTypes" id="mealTypes" onChange={handleChange}>
        {mealTypes?.map((item, index) => (
          <option value={item.toLowerCase()} key={index}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
