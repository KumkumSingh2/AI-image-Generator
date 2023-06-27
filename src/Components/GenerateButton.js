import React from "react";
import Button from "@mui/material/Button";

 

const GenerateButton = ({ isLoading, handleImageGeneration }) => {
   

  return (
    <Button sx={{fontFamily: "Founders Grotesk, Arial Black, sans-serif",
    height: 32,
    fontSize: 14,
    width: "100%",
    border: 2,
    borderRadius: 6,
    borderColor: "#444654",
    backgroundColor: "#1eae98",
    color: "white",
    fontWeight: 600,
    "&:hover": {
      border: "2px solid white",
      transition: "border 0.3s",
    },
    "&:active": {
      opacity: 0.7,
      transition: "opacity 0.2s",
    },
    "&:disabled": {
      opacity: 0.5,
      transition: "opacity 0.2s",
      border: 0,
    }
  }}
      disabled={isLoading}
      
      onClick={handleImageGeneration}
    >
      Generate
    </Button>
  );
};

export default GenerateButton;
