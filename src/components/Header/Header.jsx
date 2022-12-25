import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Navbar,
  Container,
  LogoContainer,
  Title,
  SearchContainer,
  Input,
  Rigth,
} from "./Header_sc";

import { Badge } from "@mui/material";
import { FaArrowsAltH } from "react-icons/fa";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { MdLogout } from "react-icons/md";

import { logout } from "../../context/actions";
import { LoginContext } from "../../context/LoginContext";
import { Logo } from "../SideMenu/SideMenu_sc";

const LOCAL_AUTH = "authenticated";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, dispatch] = useContext(LoginContext);

  const setTitle = () => {
    if (location.pathname === "/dashboard") {
      return "Dashboard";
    } else if (location.pathname === "/bookings") {
      return "Bookings";
    } else if (location.pathname === "/rooms") {
      return "Rooms";
    } else if (location.pathname === "/contact") {
      return "Contact";
    } else if (location.pathname === "/users") {
      return "Users";
    }
  };

  // const saveLocalStorage = (user) => {
  //   if (!localStorage.getItem(LOCAL_AUTH)) {
  //     return localStorage.setItem(LOCAL_AUTH, JSON.stringify(user));
  //   } else {
  //     const currentUser = JSON.parse(localStorage.getItem(LOCAL_AUTH));
  //     currentUser.isAuth = false;
  //     localStorage.setItem(LOCAL_AUTH, JSON.stringify(currentUser));
  //   }
  // };

  const handleWidth = () => {
    let mainContainer = document.querySelector("#mainContainer");
    let sideMenu__footer = document.querySelector(".sideMenu__footer");

    if (mainContainer.classList.contains("full")) {
      mainContainer.classList.remove("full");
      mainContainer.classList.add("normal");
      sideMenu__footer.classList.remove("hide");
    } else {
      mainContainer.classList.remove("normal");
      mainContainer.classList.add("full");
      sideMenu__footer.classList.add("hide");
    }
  };

  const handleClick = (state) => {
    dispatch(logout(!state.isAuth));
    const currentItem = JSON.parse(localStorage.getItem(LOCAL_AUTH));
    currentItem.isAuth = false;
    localStorage.setItem("authenticated", JSON.stringify(currentItem));
    // navigate("/login");
  };

  return (
    location.pathname !== "/login" && (
      <Navbar>
        <Container>
          <LogoContainer>
            <Link to="/">
              <Logo src="https://firebasestorage.googleapis.com/v0/b/phgrm-oxygen.appspot.com/o/HotelMiranda%2FhotelMiranda.svg?alt=media&token=d6e58e0f-17a9-4942-9506-d8be448f4121" />
            </Link>
          </LogoContainer>
          <FaArrowsAltH
            style={{ width: "24px", height: "40px" }}
            onClick={handleWidth}
          />
          <Title> {setTitle()} </Title>
        </Container>

        <Rigth>
          <Badge
            badgeContent={2}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <Link to="/contact">
              <EmailOutlinedIcon
                style={{ cursor: "pointer", textDecoration: "none" }}
              />
            </Link>
          </Badge>
          <Badge
            badgeContent={87}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <Link to="/bookings">
              <NotificationsActiveOutlinedIcon
                style={{ cursor: "pointer", textDecoration: "none" }}
              />
            </Link>
          </Badge>
          <MdLogout
            style={{
              width: "24px",
              height: "40px",
              paddingBottom: "7px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={handleClick}
          />
        </Rigth>
      </Navbar>
    )
  );
};

export default Header;
