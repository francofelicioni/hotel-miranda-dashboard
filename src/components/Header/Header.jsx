import React, { useState } from "react";

import {
  Navbar,
  Left,
  Logo,
  Center,
  Container,
  Title,
  SearchContainer,
  Input,
  Rigth,
  IconContainer,
} from "./Header_sc";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { FaRegEnvelope, FaArrowsAltH } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Header = () => {

  const [title, setTitle] = useState ('Dashboard');

  const location = useLocation();

  console.log(location.pathname);

  // if (location.pathname === '/bookings' ) {
  //   setTitle('Bookings')
  // } else if(location.pathname  === '/rooms') {
  //   setTitle('Rooms')
  // } else if(location.pathname  === '/contact') {
  //   setTitle('Contact') 
  // } else if (location.pathname  === '/users') {
  //   setTitle('Rooms')
  // };

  console.log('title', title)


  return (
    location.pathname != "/login" && (
      <Navbar>
        <Left>
          <Logo src="/icons/hotelMiranda.svg" />
          {/* <FaArrowsAltH /> */}
          <FaArrowsAltH style={{ width: "22px", height: "30px" }} />
        </Left>

        <Center>
          {/* <Container> */}
          <Title> Dashboard </Title>
          {/* </Container> */}
          <SearchContainer>
            <Input />
            {/* <Icon> */}
            <AiOutlineSearch style={{ width: "22px", height: "30px" }} />
            {/* </Icon> */}
          </SearchContainer>
        </Center>

        <Rigth>
          {/* <IconContainer> */}
          {/* <Icon> */}
          <FaRegEnvelope style={{ width: "22px", height: "30px" }} />
          {/* </Icon> */}
          {/* <Icon> */}
          <AiOutlineBell style={{ width: "22px", height: "30px" }} />
          {/* </Icon> */}
          {/* <Icon> */}
          <MdLogout style={{ width: "22px", height: "30px" }} />
          {/* </Icon> */}
          {/* </IconContainer> */}
        </Rigth>
      </Navbar>
    )
  );
};

export default Header;
