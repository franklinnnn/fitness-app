import { Email, GitHub, Twitter } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography variant="h2" mb="20px" color="#95e06c">
        About Stronk
      </Typography>
      <Stack direction="row">
        <img
          src="https://images.pexels.com/photos/14623740/pexels-photo-14623740.jpeg"
          alt="deadlift pic"
          className="about-img"
          loading="lazy"
        />
        <Stack direction="column" sx={{ gap: "20px" }}>
          <Typography variant="h5">
            Hello! Thanks for checking out this app.
          </Typography>
          <Typography variant="h5">
            Stronk is a fitness and exercise app containing hundreds of
            exercises, built using the{" "}
            <a
              href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb"
              target="__blank"
              className="about-link"
            >
              ExerciseDB API
            </a>
            . Individual exercises can be searched and are categorized by target
            muscle groups. Details of each exercise are presented with animated
            demonstrations, example videos, and similar exercises.
          </Typography>
          <Typography variant="h4">App Development</Typography>
          <Typography variant="h5">
            Stronk was built with React and Material UI. Styling was approached
            differently compared to my previous projects and relied mostly on
            customizing Material UI components and their sx prop. Additional
            styling outside of Material UI components was done with CSS.
            <br />
            Due to limited access to the API this app will only be able to
            search individual exercises and muscle groups. Further
            implementation would be to include the feature to explore and save
            exercise routines, weekly exercise plans, as well as custom routines
            and plans.
          </Typography>
          <Stack direction="row" gap="40px;">
            <Typography variant="h4">
              Repository <br />
              <a
                href="https://github.com/franklinnnn/fitness-app"
                target="__blank"
                className="about-link"
              >
                <GitHub fontSize="large" />
              </a>
            </Typography>
            <Typography variant="h4">
              Get in touch <br />
              <a
                href="https://twitter.com/franklin_assa"
                target="__blank"
                className="about-link"
              >
                <Twitter fontSize="large" />
              </a>{" "}
              <a
                href="mailto: franklin.assa@gmail.com"
                target="__blank"
                className="about-link"
              >
                <Email fontSize="large" />
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
