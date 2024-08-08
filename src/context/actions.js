import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_NAME } from "./actionTypes";

export const login = ({ isAuth, user }) => ({
  type: LOGIN,
  payload: {
    isAuth: isAuth,
    user: user,
  },
});

export const logout = ( isAuth ) => ({
  type: LOGOUT,
  payload: isAuth,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

// export const updateName = (name) => ({
//   type: UPDATE_NAME,
//   payload: name,
// });
