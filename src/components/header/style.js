import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00adb5;
  height: fit-content;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 2rem;
  width: 10rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
`;

export const Button = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 2rem;
  border: none;
`;
