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

  const [title, setTitle] = useState ('');

  const location = useLocation();

  console.log(location.pathname);

  useEffect (()=> {
    if (location.pathname === '/' ) {
      setTitle('Dashboard')
    } else if (location.pathname === '/bookings' ) {
      setTitle('Bookings')
    } else if(location.pathname  === '/rooms') {
      setTitle('Rooms')
    } else if(location.pathname  === '/contact') {
      setTitle('Contact') 
    } else if (location.pathname  === '/users') {
      setTitle('Users')
    };
  },[location])

  return (
    location.pathname !== "/login" && (
      <Navbar>
        <Left>
          <Link to='/'><Logo src="/icons/hotelMiranda.svg" /></Link>
          <FaArrowsAltH style={{ width: "22px", height: "30px" }} />
        </Left>

        <Center>
          <Title> {title} </Title>
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
