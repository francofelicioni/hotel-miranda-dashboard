import "./App.css";

import React, { useState, useContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Rooms from "./views/Rooms/Rooms";
import Bookings from "./views/Bookings/Bookings";
import Users from "./views/Users/Users";
import NotFound from "./views/NotFound/NotFound";
import Contact from "./views/Contact/Contact";

import { LoginContext, initialState } from "./context/LoginContext";

import { LoginReducer } from './context/LoginReducer';


function App() {
  const LOCAL_AUTH = "authenticated";

  const contextValue = useReducer(LoginReducer, initialState)

  const userLogged = () => {
    const isLogged = JSON.parse(localStorage.getItem(LOCAL_AUTH))
    // console.log('isLogged', isLogged);
    return isLogged ? isLogged.isAuth : false 
  }
  
  const PrivateRoutes = ({auth}) => {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <LoginContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoutes auth={userLogged()} />}>
              <Route
                path="/" element={<Dashboard/>}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/reviews" element={<Dashboard />} />
              <Route
              
                path="/dashboard/reviews/published"
                element={<Dashboard />}
              />
              <Route
              
                path="/dashboard/reviews/archived"
                element={<Dashboard />}
              />

              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/active" element={<Rooms />} />
              <Route path="/rooms/inactive" element={<Rooms />} />
              <Route path="/rooms/new-room" element={<Rooms />} />

              <Route path="/bookings" element={<Bookings />} />

              <Route path="/users" element={<Users />} />
              <Route path="/users/active" element={<Users />} />
              <Route path="/users/inactive" element={<Users />} />
              <Route path="/users/new-user" element={<Users />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}
export default App;
