import { createContext } from "react";

const LOCAL_AUTH = "authenticated";
const userLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH));

export const initialState = {
  isAuth: userLogged ? true : false,
  user: userLogged ? {...userLogged.user} : {name: '', email: ''}
};

export const LoginContext = createContext([]);

