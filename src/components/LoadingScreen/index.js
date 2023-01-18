import React from "react";
import { Iconify, Box } from "@components";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <Box className={styles.loader}>
      <Iconify icon={"line-md:loading-twotone-loop"}></Iconify>
    </Box>
  );
};

export default LoadingScreen;
