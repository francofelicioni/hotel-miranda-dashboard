import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginButton } from "../../components/Blocks/Button";

import { login } from "../../context/actions";

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
  LoginRight as LoginRight,
  Image,
  Desc,
  LoginInformation,
  LoginP,
} from "./Login_sc";

const LOCAL_AUTH = "authenticated";

const Login = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let currentUser = {
    isAuth: '',
    email: ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const { token } = await response.json();

    if (token) {
      localStorage.setItem("token", token);
      dispatch(
        login({
          isAuth: true,
          user: {
            email: email,
          },
        })
      );
      saveLocalStorage({
        ...state,
        isAuth: true,
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed authentication",
        text: "Wrong username and/or password",
      });
    }
  };

  const saveLocalStorage = (user) => {
    if (!localStorage.getItem(LOCAL_AUTH)) {
      currentUser = localStorage.setItem(LOCAL_AUTH, JSON.stringify(user));
      return localStorage.setItem(LOCAL_AUTH, JSON.stringify(user));
    } else {
      currentUser = JSON.parse(localStorage.getItem(LOCAL_AUTH) || "");
      currentUser.isAuth = true;
      localStorage.setItem(LOCAL_AUTH, JSON.stringify(currentUser));
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <label style={{ height: "25px" }}>Enter password: </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormItem>
            <LoginInformation>
              <LoginP>Email: fran@test.com</LoginP>
              <LoginP>Password: 1234</LoginP>
            </LoginInformation>
          </FormContent>
          <LoginButton type="submit">Login</LoginButton>
        </Form>
      </LoginLeft>
      <LoginRight className="login-right">
        <Image src="icons\hotelMiranda.svg" />
        <Desc>Welcome to the Hotel Miranda Dashboard</Desc>
      </LoginRight>
    </Container>
  );
};

export default Login;
