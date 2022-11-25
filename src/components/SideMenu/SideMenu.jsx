import React from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import {
  Container,
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
  FooterCopyrigth,
  FooterDescription,
} from "./SideMenu_sc";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Blocks/Button";

const SideMenu = () => {
  const location = useLocation();
  return (
    location.pathname !== "/login" && (
      <Container>
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
            to="/contact"
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
            <Image />
            <CardTitle> Franco Felicioni</CardTitle>
            <CardEmail> franco@hotelmiranda.com</CardEmail>
            <Button $type="sidemenu">Edit</Button>
          </Card>
          <Footer>
            <FooterTitle> HM Admin Dashboard</FooterTitle>
            <FooterCopyrigth> © 2022 All Rights Reserved</FooterCopyrigth>
            <FooterDescription> Made with ♥ by Fran</FooterDescription>
          </Footer>
        </User>
      </Container>
    )
  );
};

export default SideMenu;
