import { createContext } from "react";

const LOCAL_AUTH = "authenticated";
const userLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH));

export const initialState = {
  isAuth: userLocalStorage.isAuth ? userLocalStorage.isAuth : false,
	user: userLocalStorage ? { ...userLocalStorage.user } : { name: '', email:'' }
};

export const LoginContext = createContext([]);

