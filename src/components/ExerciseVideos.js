import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box
      sx={{
        mt: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#95e06c", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{
          alignItems: {
            lg: "center",
            xs: "flex-start",
          },
          flexDirection: {
            lg: "row",
          },
          gap: { lg: "60px", xs: "10px" },
        }}
      >
        {exerciseVideos?.slice(0, 5).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#fff">
                {item.video.title.substring(0, 30) +
                  (item.video.title.length > 30 ? "..." : "")}
              </Typography>
              <Typography variant="h6" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
        <Typography variant="h5" color="#000">
          <a
            href={`https://www.youtube.com/results?search_query=${name}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            See more videos
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
