import "./App.css";

import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Bookings from "./views/Bookings/Bookings";
import Rooms from "./views/Rooms/Rooms";
import Users from "./views/Users/Users";
import Contact from "./views/Contact/Contact";
import NotFound from "./views/NotFound/NotFound";

import { LoginContext, initialState } from "./context/LoginContext";

import { LoginReducer } from "./context/LoginReducer";
import PrivateRoutes from "./utils/privateRoutes";
import NewRoom from "./views/Rooms/NewRoom";
import NewUser from "./views/Users/NewUser";
import Booking from "./views/Bookings/Booking";

function App() {
  const contextValue = useReducer(LoginReducer, initialState);

  return (
    <>
      <LoginContext.Provider value={contextValue}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/login" element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/:id" element={<Booking />} />

              <Route path="/rooms" element={<Rooms />} />
              <Route path="/new-room" element={<NewRoom />} />

              <Route path="/users" element={<Users />} />
              <Route path="/new-user" element={<NewUser />} />

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
