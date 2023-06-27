import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function GenerateImageHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        className="generateImageHeading"
        sx={{
          fontFamily: "Founders Grotesk, Arial Black, sans-serif",
          fontWeight: {
            xs: 200, // Default font weight for xs breakpoint
            sm: 300, // Default font weight for sm breakpoint
            md: 700, // Font weight for md breakpoint
            lg: 700, // Font weight for lg breakpoint
          },          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          background:
            "linear-gradient(to right, #d8b5ff, #1eae98)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}
      >
       Image Generative AI
      </Typography>
    </motion.div>
  );
}

export default GenerateImageHeading;
