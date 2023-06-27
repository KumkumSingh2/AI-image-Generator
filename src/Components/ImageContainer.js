import React from "react";
import { motion } from "framer-motion";
import { CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "70%",

    "@media (min-width: 640px)": {
      width: "50%",
    },

    "@media (min-width: 1024px)": {
      width: "20%",
    },
  },
  errorMessage: {
    textAlign: "center",
  },
});

const ImageContainer = ({
  isError,
  errorMessage,
  isLoading,
  hasImage,
  imageUrl,
  userPrompt,
  imageLoaded,
  setImageLoaded,
}) => {
  const classes = useStyles();

  return (
    <>
      {isError ? (
        <motion.p
          initial={{ opacity: 0.5, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={classes.errorMessage}
        >
          {errorMessage}
        </motion.p>
      ) : isLoading ? (
        <CircularProgress data-testid="circular-progress" />
      ) : hasImage ? (
        <motion.img
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={classes.image}
          src={imageUrl}
          alt={userPrompt}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: "none" }}
        />
      ) : (
        <Typography> Generated image will appear here. </Typography>
      )}
    </>
  );
};

export default ImageContainer;
