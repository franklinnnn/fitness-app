import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box mt="80px" background="#fff3f4">
      <Stack
        alignItems="center"
        justifyContent="center"
        px="10px"
        pt="24px"
        mb="40px"
      >
        <img
          src={logo}
          alt="logo"
          width="100px"
          height="100px"
          style={{
            filter:
              "invert(89%) sepia(23%) saturate(955%) hue-rotate(42deg) brightness(93%) contrast(89%)",
          }}
        />
        <Typography variant="h3" fontFamily="Nunito">
          stronk
        </Typography>
      </Stack>

      <Stack
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="row"
        px="40px"
        pt="12px"
        gap="40px"
        sx={{
          backgroundColor: "#1D1E33",
          px: { lg: "40px", xs: "10px" },
          gap: { lg: "40px", xs: "10px" },
        }}
      >
        <Typography
          variant="h6"
          pb="20px"
          mt="20px"
          mx="20px"
          sx={{ mx: { lg: "20px", xs: "0" } }}
        >
          2023
        </Typography>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="footer-link"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <Typography variant="h6" pb="20px" mt="20px">
            About
          </Typography>
        </Link>
        <a
          href="https://github.com/franklinnnn/fitness-app"
          target="__blank"
          className="footer-link"
        >
          <Typography variant="h6" pb="20px" mt="20px">
            GitHub
          </Typography>
        </a>
        <Typography
          variant="h6"
          pb="20px"
          mt="20px"
          sx={{
            color: "#fff",
            cursor: "pointer",
          }}
          className="footer-link"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Top
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
