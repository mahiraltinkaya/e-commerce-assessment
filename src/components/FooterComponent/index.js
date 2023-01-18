import React from "react";
import { Grid } from "@components";

const FooterComponent = () => {
  return (
    <Grid container display={"flex"} justifyContent="center">
      <Grid item xs={12} md={4}></Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          flexDirection: "column",
        }}
      >
        <img src="/logo.png" alt="square logo" width={70} />
      </Grid>
      <Grid item xs={6} md={4}></Grid>
      <Grid item xs={8} sx={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi
        eum minus laboriosam animi aspernatur saepe corrupti dolor ipsam
        voluptate sunt officiis quod quasi repellendus accusantium consequatur
        deserunt, voluptatibus nihil, culpa id architecto labore quia. Ipsum
        deserunt deleniti dicta sit corporis placeat labore accusantium, commodi
        dignissimos accusamus provident nemo libero.
      </Grid>
      <Grid item xs={8} sx={{ textAlign: "center", height: 40 }}>
        <a
          rel="noreferrer"
          href="https://github.com/mahiraltinkaya/e-commerce-assessment"
          target={"_blank"}
          style={{
            textDecoration: "none",
            color: "orange",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >{`${new Date().getFullYear()} | repository`}</a>
      </Grid>
    </Grid>
  );
};

export default React.memo(FooterComponent);
