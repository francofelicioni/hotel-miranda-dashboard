import { createContext } from "react";

const LOCAL_AUTH = "authenticated";
// const userLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH) || '')

const userLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH))
  ? JSON.parse(localStorage.getItem(LOCAL_AUTH))
  : {
      isAuth: false,
      user: { name: "", email: "" },
    };

export const initialState = {
  isAuth: userLogged.isAuth ? userLogged.isAuth : false,
  user: userLogged ? { ...userLogged.user } : { email: "" },
};

export const LoginContext = createContext([]);
