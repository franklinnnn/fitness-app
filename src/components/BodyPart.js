import React from "react";
import { Stack, Typography } from "@mui/material";
import allIcon from "../assets/images/logo.png";
import { bodyPartIcons } from "../utils/bodyPartIcons";

const BodyPart = ({ item, bodyPart, setBodyPart, setResult }) => {
  let part = bodyPartIcons.find((part) => part.name === item);
  return (
    <Stack
      className="bodyPart-card"
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #95E06C" : "",
        backgroundColor: "#1D1E33",
        borderRadius: "0 0 10px 10px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        setResult(item);
        document
          .getElementById("exercises")
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img
        src={part.icon}
        alt="dumbbell"
        style={{ width: "80px", height: "80px" }}
        className="bodyPart-icon"
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#fff"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
