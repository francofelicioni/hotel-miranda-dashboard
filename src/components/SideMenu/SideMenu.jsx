import React from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import {
  Container,
  LogoContainer,
  Logo,
  SideIconContainer,
  User,
  IconContainer,
  IconDesc,
  Card,
  Image,
  CardTitle,
  CardEmail,
  Footer,
  FooterTitle,
  FooterCopyright,
  FooterDescription,
} from "./SideMenu_sc";
import { Link, useLocation } from "react-router-dom";
import { SideMenuButton } from "../Blocks/Button";


const SideMenu = () => {
  const location = useLocation();
  return (
    location.pathname !== "/login" && (
      <Container>
        <LogoContainer>
          <Link to="/">
            <Logo src="https://firebasestorage.googleapis.com/v0/b/phgrm-oxygen.appspot.com/o/HotelMiranda%2FhotelMiranda.svg?alt=media&token=d6e58e0f-17a9-4942-9506-d8be448f4121" />
          </Link>
        </LogoContainer>
        <SideIconContainer>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <MdOutlineDashboard />
              <IconDesc>Dashboard</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/bookings"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <AiOutlineCalendar />
              <IconDesc>Bookings</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/rooms"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <BiKey />
              <IconDesc>Rooms</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/contacts"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <BsPerson />
              <IconDesc>Contact</IconDesc>
            </IconContainer>
          </Link>
          <Link
            to="/users"
            style={{ textDecoration: "none", color: "var(--color-greenGrey)" }}
          >
            <IconContainer>
              <FaRegUserCircle />
              <IconDesc>Users</IconDesc>
            </IconContainer>
          </Link>
        </SideIconContainer>
        <User>
          <Card>
            <Image src="https://firebasestorage.googleapis.com/v0/b/hotel-miranda-1e6f1.appspot.com/o/profile_photo.jpg?alt=media&token=b84dd432-56e9-45d5-9beb-a980d09a1290" />
            <CardTitle> Franco Felicioni</CardTitle>
            <CardEmail> fran.felicioni@gmail.com</CardEmail>
            <Link to="https://www.linkedin.com/in/francofelicioni/">
              {" "}
              <CiLinkedin style={{ height: "25px", width: "25px" }} />
            </Link>
            <SideMenuButton>Edit</SideMenuButton>
          </Card>
          <Footer className="sideMenu__footer">
            <FooterTitle> HM Admin Dashboard</FooterTitle>
            <FooterCopyright> © 2022 All Rights Reserved</FooterCopyright>
            <FooterDescription> Made with ♥ by Fran</FooterDescription>
          </Footer>
        </User>
      </Container>
    )
  );
};

export default SideMenu;
