import React from "react";
import {
  LoginContainer,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledImg,
} from "./LoginStyle";
import mealSvg from "../../assets/meal2.svg";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isAuth", true);
    window.location.href = "/";
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} alt="meal" />
        <Header>{"<ed8en/>"} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
