import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
      tag: "Body Part",
    },
    {
      icon: targetImage,
      name: target,
      tag: "Target",
    },
    {
      icon: equipmentImage,
      name: equipment,
      tag: "Equipment",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          The <span style={{ textTransform: "capitalize" }}>{name}</span> is an
          effective {bodyPart} exercise that targets the {target}, using{" "}
          {equipment}.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#1D1E33",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
              className="detail-tag"
            >
              <img
                src={item.icon}
                alt={bodyPart}
                className="detail-tag-image"
              />
              <p className="detail-tag-text">{item.tag}</p>
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
