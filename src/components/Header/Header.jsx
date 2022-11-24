import React, { useEffect, useState } from "react";

import {
  Navbar,
  Left,
  Logo,
  Center,
  Title,
  SearchContainer,
  Input,
  Rigth,
} from "./Header_sc";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { FaRegEnvelope, FaArrowsAltH } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const setTitle = () => {
    if (location.pathname === "/dashboard") {
      return "Dashboard"
    } else if (location.pathname === "/bookings") {
      return "Bookings"
    } else if (location.pathname === "/rooms") {
      return "Rooms"
    } else if (location.pathname === "/contact") {
      return "Contact";
    } else if (location.pathname === "/users") {
      return "Users";
    }
  };

  return (
    location.pathname !== "/login" && (
      <Navbar>
        <Left>
          <Link to="/">
            <Logo src="/icons/hotelMiranda.svg" />
          </Link>
        </Left>

        <Center>
          <FaArrowsAltH style={{ width: "22px", height: "30px" }} />
          <Title> {setTitle()} </Title>
          <SearchContainer>
            <Input />
            <AiOutlineSearch style={{ width: "22px", height: "30px" }} />
          </SearchContainer>
        </Center>

        <Rigth>
          <FaRegEnvelope style={{ width: "22px", height: "30px" }} />
          <AiOutlineBell style={{ width: "22px", height: "30px" }} />
          <MdLogout style={{ width: "22px", height: "30px" }} />
        </Rigth>
      </Navbar>
    )
  );
};

export default Header;
