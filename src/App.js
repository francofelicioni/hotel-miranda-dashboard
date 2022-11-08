import "./App.css";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import Guest from "./pages/Guest";
import Guests from "./pages/Guests";
import User from "./pages/User";
import Users from "./pages/Users";
import PrivateRoutes from "./utils/privateRoutes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<privateRoutes />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/dashboard/reviews" element={<Dashboard />} exact/>
        <Route path="/dashboard/reviews/published" element={<Dashboard />} exact/>
        <Route path="/dashboard/reviews/archived" element={<Dashboard />} exact/>

        <Route path="/rooms" element={<Rooms />} exact/>
        <Route path="/rooms/active" element={<Rooms />} exact/>
        <Route path="/rooms/inactive" element={<Rooms />} exact/>
        <Route path="/rooms/new-room" element={<Rooms />} exact/>
        <Route path="/room/:id" element={<Room />} exact/>
        <Route path="/room/edit/:id" element={<Room />} exact/>

        <Route path="/bookings" element={<Bookings />} exact/>

        <Route path="/guests" element={<Guests />} />
        <Route path="/guest/:id" element={<Guest />} exact/>

        <Route path="/users" element={<Users />} exact/>
        <Route path="/users/active" element={<Users />} exact/>
        <Route path="/users/inactive" element={<Users />} exact/>
        <Route path="/users/new-user" element={<Users />} exact/>
        <Route path="/user/:id" element={<User />} exact/>
        <Route path="/user/edit/:id" element={<User />} exact/>

        <Route path='*' element={<NotFound/>}>404 Not found</Route>
      </Route>
    </Routes>
  );
}

export default App;
