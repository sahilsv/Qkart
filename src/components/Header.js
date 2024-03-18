import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const exploreRoute = () => {
    history.push("/");
  };

  const registerRoute = () => {
    history.push("/register");
  };

  const loginRoute = () => {
    history.push("/login");
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");

    history.push("/");

    window.location.reload();
  };

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Link>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={exploreRoute}
        >
          Back to explore
        </Button>
      </Box>
    );
  }

  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Link>
      </Box>
      {children}
      <Stack direction="row" spacing={2} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="../../public/avatar.png"
              alt={localStorage.getItem("username") || "User avatar"}
            />
            <p>{localStorage.getItem("username")}</p>
            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={loginRoute}>Login</Button>
            <Button variant="contained" onClick={registerRoute}>
              Register
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
