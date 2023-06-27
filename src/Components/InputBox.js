import React from "react";
import { Box,  Typography } from "@mui/material";

export const InputBox = ({ label, setAttribute }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: 2,
          fontWeight: 600,
          marginTop: 3,
        }}
      >
        {label}
      </Typography>
      <textarea
        className="input"
        onChange={(e) => setAttribute(e.target.value)}
        placeholder="Enter your prompt for image generation here"
        style={{
          height: "160px",
          width: "340px",
          border: "1px solid #353640",
          borderRadius: "6px",
          fontSize: "14px",
          backgroundColor: "#444654",
          fontFamily: "Founders Grotesk, Arial Black, sans-serif",
          color: "white",
          resize: "none",
          padding: "10px",
        }}
      />

    </Box>
  );
};
