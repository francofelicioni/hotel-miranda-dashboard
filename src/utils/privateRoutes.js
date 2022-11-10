import React, { useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

  const LOCAL_AUTH = "authenticated";
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem(LOCAL_AUTH)) !== null);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
