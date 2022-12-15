import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRoutes = () => {
  const [state] = useContext(LoginContext);

  return state.isAuth ? <Outlet /> : <Navigate to="hotel-miranda-dashboard/login" replace/>;
};

export default PrivateRoutes;