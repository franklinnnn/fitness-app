import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner2.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#95E06C" fontWeight="600" fontSize="26px">
        Stronk Fitness
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Be more than strong, <br /> be Stronk
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          backgroundColor: "#95E06C",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#1D1E33",
            color: "#95E06C",
          },
        }}
        onClick={() =>
          document
            .getElementById("exercises")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={700}
        color="#95E06C"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
        fontFamily="Nunito"
      >
        stronk
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
