import { createContext, useReducer, useState } from "react";

const LOCAL_AUTH = "authenticated";
const userLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH));

export const initialState = {
  isAuth: userLogged ? true : false,
  user: userLogged ? {...userLogged} : {email: '', password: ''}
};

export const LoginContext = createContext();

