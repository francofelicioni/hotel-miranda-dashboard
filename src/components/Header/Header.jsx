import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import {
  Navbar,
  Container,
  Title,
  SearchContainer,
  Input,
  Rigth,
} from "./Header_sc";

import { Badge } from "@mui/material";
import { FaArrowsAltH } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { MdLogout } from "react-icons/md";

import { logout } from "../../context/actions";
import { LoginContext } from "../../context/LoginContext";

const Header = () => {
  const location = useLocation();
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

  const saveLocalStorage = (user) => {
    if (!localStorage.getItem("authenticated")) {
      return localStorage.setItem("authenticated", JSON.stringify(user));
    } else {
      const currentUser = JSON.parse(localStorage.getItem("authenticated"));
      currentUser.isAuth = false;
      localStorage.setItem("authenticated", JSON.stringify(currentUser));
    }
  };

  const handleClick = () => {
    dispatch(logout({ isAuth: false }));
    saveLocalStorage({ ...state, isAuth: false });
  };

  const styles = (theme) => ({
    margin: {
      margin: theme.spacing.unit * 2,
    },
    customBadge: {
      backgroundColor: "#00AFD7",
      color: "white",
    },
  });

  return (
    location.pathname !== "/login" && (
      <Navbar>
        <Container>
          <FaArrowsAltH style={{ width: "22px", height: "30px" }} />
          <Title> {setTitle()} </Title>
          <SearchContainer>
            <Input />
            <AiOutlineSearch style={{ width: "22px", height: "30px" }} />
          </SearchContainer>
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
            <EmailOutlinedIcon />
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
            <NotificationsActiveOutlinedIcon />
          </Badge>
          <Badge
            badgeContent={"!"}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            <MessageOutlinedIcon />
          </Badge>
          <MdLogout
            style={{ width: "22px", height: "30px" }}
            onClick={handleClick}
          />
        </Rigth>
      </Navbar>
    )
  );
};

export default Header;
