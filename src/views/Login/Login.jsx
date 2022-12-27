import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginButton } from "../../components/Blocks/Button";

import { login, updateEmail, updateName } from "../../context/actions";

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
  LoginRigth,
  Image,
  Desc,
  LoginInformation,
  LoginP,
} from "./Login_sc";

const LOCAL_AUTH = "authenticated";

const Login = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(LoginContext);
  let currentUser = {
    isAuth: "",
    user: {
      email: "",
      name: "",
    },
  };

  const saveLocalStorage = (user) => {
    if (!localStorage.getItem(LOCAL_AUTH)) {
      currentUser = localStorage.setItem(LOCAL_AUTH, JSON.stringify(user));
      return localStorage.setItem(LOCAL_AUTH, JSON.stringify(user));
    } else {
      currentUser = JSON.parse(localStorage.getItem(LOCAL_AUTH));
      currentUser.isAuth = true;
      localStorage.setItem(LOCAL_AUTH, JSON.stringify(currentUser));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.user.email === "fran@test.com" && state.user.name === "Fran") {
      dispatch(
        login({
          isAuth: true,
          user: { email: state.user.email, name: state.user.name },
        })
      );
      saveLocalStorage({ ...state, isAuth: true });
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
              <label style={{ width: "94px", height: "25px" }}>
                Enter email:
              </label>
              <input
                type="text"
                name="email"
                value={
                  state.user.email ? state.user.email : currentUser.user.email
                }
                onChange={(e) => dispatch(updateEmail(e.target.value))}
              />
            </FormItem>
            <FormItem>
              <label style={{ height: "25px" }}>Enter name: </label>
              <input
                type="text"
                name="name"
                value={state.user.name}
                onChange={(e) => dispatch(updateName(e.target.value))}
              />
            </FormItem>
            <LoginInformation>
              <LoginP>Email: fran@test.com</LoginP>
              <LoginP>Name: Fran</LoginP>
            </LoginInformation>
          </FormContent>
          <LoginButton type="submit">Login</LoginButton>
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
