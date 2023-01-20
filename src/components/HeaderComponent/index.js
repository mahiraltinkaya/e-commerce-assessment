import React from "react";
import { Grid, TextField, Iconify, Button, IconButton } from "@components";
import styles from "modules/Header.module.scss";

import { SettingsContext, useContext } from "@context";
import { setMode } from "@store/slices/userSlice";
import { useSelector, dispatch } from "@store";
import { destroySession } from "@store/slices/userSlice";

const HeaderComponent = () => {
  const { mode, token } = useSelector((state) => state.users);
  const { search, updateSearch, toggle, setToggle, setLoginModal } =
    useContext(SettingsContext);

  return (
    <Grid container className={styles.header}>
      <Grid
        item
        xs={12}
        className={styles["header__controls"]}
        sx={{ padding: 0 }}
      >
        <ul>
          <li>
            <a href="/">discounts</a>
          </li>
          <li>|</li>
          <li>
            <a href="/">becoma a seller</a>
          </li>
          <li>|</li>
          <li>
            <a href="/">easy return</a>
          </li>
          <li>|</li>

          <li>
            <a href="/">help</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={12} className={styles["header__logo"]}>
        <a href="/" aria-label="Ana sayfa linki">
          <img src="/logo.png" alt="square logo" />
        </a>
        <TextField
          placeholder="Search in all products"
          color="warning"
          size={"small"}
          fullWidth
          value={search}
          onChange={(e) => {
            updateSearch(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12} className={styles["header__controls"]}>
        <div style={{ height: 40 }}>
          {token && (
            <Button
              aria-label="User Profile"
              size={"small"}
              sx={{ mr: 1 }}
              color={"warning"}
              onClick={() => {
                dispatch(destroySession());
              }}
            >
              Logout <Iconify size={18} icon={"mdi:user-circle"}></Iconify>
            </Button>
          )}
          {!token && (
            <Button
              aria-label="User Profile"
              size={"small"}
              sx={{ mr: 1 }}
              color={"warning"}
              onClick={() => {
                setLoginModal(true);
              }}
            >
              Login <Iconify size={18} icon={"mdi:user-circle"}></Iconify>
            </Button>
          )}

          <Button
            aria-label="Shopping Cart"
            onClick={() => {
              setToggle(!toggle);
            }}
            size={"small"}
            sx={{ mr: 1 }}
            color={"warning"}
          >
            Cart{" "}
            <Iconify
              size={18}
              icon={"material-symbols:shopping-cart"}
            ></Iconify>
          </Button>
          <IconButton
            size={"small"}
            onClick={() => {
              dispatch(setMode(mode === "dark" ? "light" : "dark"));
            }}
            color={"warning"}
          >
            <Iconify
              size={22}
              icon={mode === "light" ? "mdi:weather-night" : "carbon:sun"}
            ></Iconify>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default React.memo(HeaderComponent);
