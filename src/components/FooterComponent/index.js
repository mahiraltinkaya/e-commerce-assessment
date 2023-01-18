import React from "react";
import { Grid } from "@components";

const FooterComponent = () => {
  return (
    <Grid container>
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
    </Grid>
  );
};

export default React.memo(FooterComponent);
