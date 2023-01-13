import { LOGIN, LOGOUT, UPDATE_EMAIL} from "./actionTypes";

export const LoginReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case LOGOUT:
      return { ...state, ...payload };
    case UPDATE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: payload,
        }
      };
    // case UPDATE_NAME:
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       name: payload,
    //     },
    //   };
    default:
      return state;
  }
};
