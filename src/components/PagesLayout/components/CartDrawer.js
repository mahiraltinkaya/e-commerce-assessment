import React from "react";
import { Box, Card, CardContent, Iconify, IconButton } from "@components";
import styles from "modules/CartDrawer.module.scss";
import { useSelector } from "@store";

const CartDrawer = ({ setToggle }) => {
  const { cart } = useSelector((state) => state.users);

  console.log(cart);
  return (
    <Box className={styles.drawer}>
      <Card elevation={0} sx={{ borderRadius: 0 }}>
        <CardContent className={styles["drawer__shopping-title"]}>
          <strong>Shopping Cart</strong>
          <IconButton
            onClick={() => {
              setToggle(false);
            }}
          >
            <Iconify icon={"ri:close-fill"} sx={{ color: "white" }}></Iconify>
          </IconButton>
        </CardContent>
        <CardContent className={styles["drawer__no-item"]}>
          There is no item in the cart.
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(CartDrawer);
