import React from "react";
import { useHistory } from "react-router-dom";
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

const Login = ({ setIsAuth, isAuth }) => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    history.push("/");
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
