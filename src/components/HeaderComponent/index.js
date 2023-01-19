import React from "react";
import { Grid, TextField, Iconify, IconButton } from "@components";
import styles from "modules/Header.module.scss";

import { SettingsContext, useContext } from "@context";

const HeaderComponent = () => {
  const { search, updateSearch, toggle, setToggle } =
    useContext(SettingsContext);

  return (
    <Grid container className={styles.header}>
      <Grid item xs={3} sm={1} className={styles["header__logo"]}>
        <a href="/" aria-label="Ana sayfa linki">
          <img src="/logo.png" alt="square logo" />
        </a>
      </Grid>
      <Grid item xs={9} sm={9} className={styles["header__searchbox"]}>
        <TextField
          placeholder="Search In Products"
          color="secondary"
          size={"small"}
          fullWidth
          value={search}
          onChange={(e) => {
            updateSearch(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={9} sm={11} md={2} className={styles["header__controls"]}>
        <div style={{ height: 40 }}>
          <IconButton aria-label="User Profile" size={"small"}>
            <Iconify
              color={"orange"}
              icon={"mdi:user-circle-outline"}
            ></Iconify>
          </IconButton>
          <IconButton aria-label="Favorites" size={"small"}>
            <Iconify
              color={"orange"}
              icon={"material-symbols:favorite-rounded"}
            ></Iconify>
          </IconButton>
          <IconButton
            aria-label="Shopping Cart"
            onClick={() => {
              setToggle(!toggle);
            }}
            size={"small"}
          >
            <Iconify
              color={"orange"}
              icon={"material-symbols:shopping-cart"}
            ></Iconify>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default React.memo(HeaderComponent);
