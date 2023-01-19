import React from "react";
import {
  Box,
  Card,
  CardContent,
  Iconify,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
} from "@components";
import styles from "modules/CartDrawer.module.scss";
import { dispatch, useSelector } from "@store";
import useTruncate from "hooks/useTruncute";
import useCartTotals from "hooks/useCartTotals";

import { deleteCart } from "@store/slices/userSlice";

const CartDrawer = ({ setToggle }) => {
  const cartTotals = useCartTotals();
  const truncate = useTruncate();
  const { cart } = useSelector((state) => state.users);

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
        {cart && cart.length === 0 && (
          <CardContent className={styles["drawer__no-item"]}>
            There is no item in the cart.
          </CardContent>
        )}

        {cart &&
          cart.length > 0 &&
          cart.map((prod, i) => (
            <Box key={i}>
              <List>
                <ListItem>
                  <ListItemAvatar size={24}>
                    <Avatar src={prod.image}></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    {truncate(prod.title, 20)}
                    <br></br>
                    <span style={{ fontSize: 12 }}> {prod.qty} pcs. </span>
                  </ListItemText>
                  <ListItemButton
                    onClick={() => {
                      dispatch(deleteCart(prod));
                    }}
                  >
                    <Iconify
                      icon={"material-symbols:delete-forever-outline-rounded"}
                      size={22}
                      sx={{ color: "red" }}
                    ></Iconify>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          ))}

        {cartTotals().total > 0 && (
          <Box
            sx={{ padding: 2, fontWeight: "bold", fontSize: 22 }}
            className={styles["drawer__shopping-title"]}
          >
            Cart Total : ${cartTotals().total}
          </Box>
        )}

        {cart && cart.length > 0 && (
          <Box>
            <Button
              fullWidth
              variant={"outlined"}
              color={"success"}
              size={"large"}
            >
              <Iconify icon={"ic:twotone-shopping-cart-checkout"}></Iconify>
              Checkout
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default React.memo(CartDrawer);
