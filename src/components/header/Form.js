import React from "react";
import { FormContainer, FoodInput, Button, Select } from "./style";

const Form = ({ setQuery, query, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
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
      <Select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
    </FormContainer>
  );
};

export default Form;
