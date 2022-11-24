import { LOGIN, LOGOUT, UPDATE_EMAIL, UPDATE_PASSWORD } from "./actionTypes";

export const LoginReducer = (state, { type, payload }) => {

  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case LOGOUT:
      return { ...state, isAuth: payload };
    case UPDATE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: payload,
        },
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: payload,
        },
      };
    default:
      return state;
  }
};
