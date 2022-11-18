import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Container,
  LoginLeft,
  LoginHeader,
  Title,
  Description,
  Form,
  FormContent,
  FormItem,
  CheckboxContainer,
  Button,
  LoginRigth,
  Image,
  Desc,
} from "./Login_sc";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.user === "fran.felicioni" && user.password === "1234") {
      localStorage.setItem("authenticated", JSON.stringify(user));
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed authentication",
        text: "Wrong username and/or password",
      });
    }
  };

  return (
    <Container>
      <LoginLeft className="login-left">
        <LoginHeader>
          <Title>Hotel Miranda Dashboard</Title>
          <Description> Please login to use the platform</Description>
        </LoginHeader>
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <FormItem>
              <label for="user" style={{ width: "124px", height: "25px" }}>
                Enter user:
              </label>
              <input className="user" type="text" name="user" onChange={handleChange} />
            </FormItem>
            <FormItem>
              <label for="password" style={{ height: "25px" }}>Enter password: </label>
              <input className="password" type="password" name="password" onChange={handleChange} />
            </FormItem>
            <FormItem>
              <CheckboxContainer>
                <input type="checkbox" id="rememberMeCheckbox" />
                <label for="rememberMeCheckbox" id="checkboxLabel">
                  {" "}
                  Remember me{" "}
                </label>
              </CheckboxContainer>
            </FormItem>
          </FormContent>
          <Button className="signIn__btn" type="submit" text="Sign In"> Sign In</Button>
        </Form>
      </LoginLeft>
      <LoginRigth className="login-rigth">
        <Image src="icons\hotelMiranda.svg" />
        <Desc>Welcome to the Hotel Miranda Dashboard</Desc>
      </LoginRigth>
    </Container>
  );
};

export default Login;
