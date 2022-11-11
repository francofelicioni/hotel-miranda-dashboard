import "./App.css";

import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";

import PrivateRoutes from "./utils/privateRoutes";

import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./views/Dashboard/Dashboard";
import Room from "./views/Room";
import Rooms from "./views/Rooms/Rooms";
import Bookings from "./views/Bookings/Bookings";
import Guest from "./views/Guest";
import Guests from "./views/Guests";
import User from "./views/User";
import Users from "./views/Users/Users";

import NotFound from "./views/NotFound/NotFound";

import styled from "styled-components";
import Contact from "./views/Contact/Contact";

const RenderContainer = styled.div`
  position: relative;
  /* right: 20%;
  top: 134px; */
  /* right: 0px;
  top: 0px; */
`;

function AppTest() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <SideMenu />
      <RenderContainer className="renderContainer">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route
              exact
              path="/dashboard/reviews"
              element={<Dashboard />}
            />
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
            <Route exact path="/room/:id" element={<Room />} />
            <Route exact path="/room/edit/:id" element={<Room />} />

            <Route path="/bookings" element={<Bookings />} exact />

            <Route exactpath="/guests" element={<Guests />} />
            <Route exact path="/guest/:id" element={<Guest />} />

            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/active" element={<Users />} />
            <Route exact path="/users/inactive" element={<Users />} />
            <Route exact path="/users/new-user" element={<Users />} />
            <Route exact path="/user/:id" element={<User />} />
            <Route exact path="/user/edit/:id" element={<User />} />

            <Route exact path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </RenderContainer>
      {/* </BrowserRouter> */}
    </>
  );
}

export default AppTest;
