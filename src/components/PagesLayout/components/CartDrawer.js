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
import useParseLayout from "hooks/useParseLayout";
import { deleteCart } from "@store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ setToggle }) => {
  const floatParse = useParseLayout();
  const navigate = useNavigate();
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

        <Box>
          <List>
            {cart &&
              cart.length > 0 &&
              cart.map((prod, i) => (
                <ListItem key={i} sx={{ borderBottom: ".5px solid #d9d9d9" }}>
                  <ListItemAvatar size={24}>
                    <Avatar src={prod.image}></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    {truncate(prod.title, 20)}
                    <div style={{ fontSize: 12, fontWeight: "bold" }}>
                      ${floatParse(prod.price * prod.qty)}
                    </div>
                    <div style={{ fontSize: 10 }}> {prod.qty} pcs. </div>
                  </ListItemText>
                  <ListItemButton
                    onClick={() => {
                      dispatch(deleteCart(prod));
                    }}
                  >
                    <Iconify
                      icon={"material-symbols:delete-forever-outline-rounded"}
                      size={28}
                      sx={{ color: "red" }}
                    ></Iconify>
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>

        {cart && cart.length > 0 && (
          <Box sx={{ position: "absolute", width: 300, bottom: 0 }}>
            {cartTotals().total > 0 && (
              <>
                <Box
                  sx={{ padding: 2, fontWeight: "bold", fontSize: 22 }}
                  className={styles["drawer__shopping-title"]}
                >
                  <div>Cart Total : ${cartTotals().total}</div>
                  <div style={{ fontSize: 12, fontWeight: "bold" }}>
                    ({cartTotals().pieces} total pcs.)
                  </div>
                </Box>
              </>
            )}
            <Button
              fullWidth
              variant={"outlined"}
              color={"success"}
              size={"large"}
              onClick={() => {
                navigate("/checkout");
              }}
              sx={{ height: 70 }}
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
