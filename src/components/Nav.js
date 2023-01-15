import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
      id="nav"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
            margin: "0 20px",
          }}
          className="nav-logo"
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
          onClick={() =>
            window.scrollTo({ top: 1800, left: 0, behavior: "smooth" })
          }
          className="nav-link"
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Nav;
