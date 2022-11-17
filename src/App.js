import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import Login from "./views/Login/Login";

// import PrivateRoutes from "./utils/privateRoutes";

import MainContainer from "./components/MainContainer/MainContainer";

import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./views/Dashboard/Dashboard";
import Rooms from "./views/Rooms/Rooms";
import Bookings from "./views/Bookings/Bookings";
import Users from "./views/Users/Users";

import NotFound from "./views/NotFound/NotFound";

import Contact from "./views/Contact/Contact";

function App() {



  const PrivateRoutes = () => {

    const LOCAL_AUTH = "authenticated";
    // const [auth, setAuth] = useState(
      
    return JSON.parse(localStorage.getItem(LOCAL_AUTH)) !== null ? <Outlet /> : <Navigate to="/login" />;

    // return auth ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <SideMenu />
        <MainContainer className="renderContainer">
          <Routes>
            <Route exact path="/login" element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Navigate to='/dashboard' replace />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/dashboard/reviews" element={<Dashboard />} />
              <Route
                exact
                path="/dashboard/reviews/published"
                element={<Dashboard />}
              />
              <Route
                exact
                path="/dashboard/reviews/archived"
                element={<Dashboard />}
              />

              <Route exact path="/rooms" element={<Rooms />} />
              <Route exact path="/rooms/active" element={<Rooms />} />
              <Route exact path="/rooms/inactive" element={<Rooms />} />
              <Route exact path="/rooms/new-room" element={<Rooms />} />

              <Route path="/bookings" element={<Bookings />} exact />

              <Route exact path="/users" element={<Users />} />
              <Route exact path="/users/active" element={<Users />} />
              <Route exact path="/users/inactive" element={<Users />} />
              <Route exact path="/users/new-user" element={<Users />} />

              <Route exact path="/contact" element={<Contact />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}
export default App;
