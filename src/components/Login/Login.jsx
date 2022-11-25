import React, { useContext, useState } from "react";
import { updateEmail, updateName, login } from "../../context/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginContext } from "../../context/LoginContext";

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

const Login = ({ setAuth }) => {
  const LOCAL_AUTH = "authenticated";
  const navigate = useNavigate();
  const [state, dispatch] = useContext(LoginContext);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.user.email === "fran@test.com" && state.user.name === "Fran") {
      // localStorage.setItem("authenticated", JSON.stringify(user));
      // navigate("/");
      // console.log("Successful Authentication");
      dispatch(
        login({
          isAuth: true,
          user: {
            name: state.user.name,
            email: state.user.email,
          },
        })
      );
      toLocalStorage({
        ...state,
        isAuth: true,
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed authentication",
        text: "Wrong username or password",
      });
    }
  };

  const toLocalStorage = (user) => {
    if (!localStorage.getItem(LOCAL_AUTH)) {
      return localStorage.getItem(LOCAL_AUTH, JSON.stringify(user));
    } else {
      const currentUser = JON.parse(localStorage.getItem(LOCAL_AUTH));
      currentUser.isAuth = true;
      localStorage.setItem(LOCAL_AUTH, JSON.stringify(currentUser));
    }
  };

  return (
    <Container>
      <LoginLeft>
        <LoginHeader>
          <Title>Hotel Miranda Dashboard</Title>
          <Description> Please login to use the platform</Description>
        </LoginHeader>
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <FormItem>
              <label for="name" style={{ width: "110px" }}>
                Enter user:
              </label>
              <input
                type="text"
                placeholder="User name"
                name="name"
                value={state.user?.name}
                onChange={(e) => dispatch(updateName(e.target.value))}
              />
            </FormItem>
            <FormItem>
              <label for="email">Enter password: </label>
              <input
                type="password"
                placeholder="Email"
                name="email"
                value={state.user?.email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
              />
            </FormItem>
          </FormContent>
          <Button type="submit"> Sign In</Button>
        </Form>
      </LoginLeft>
      <LoginRigth>
        <Image src="icons\hotelMiranda.svg" />
        <Desc>Welcome to the Hotel Miranda Dashboard</Desc>
      </LoginRigth>
    </Container>
  );
};

export default Login;
