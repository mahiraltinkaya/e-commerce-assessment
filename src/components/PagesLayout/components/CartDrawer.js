import React from "react";
import {
  Box,
  Card,
  CardContent,
  Iconify,
  IconButton,
  Button,
} from "@components";
import styles from "modules/CartDrawer.module.scss";
import { useSelector } from "@store";

import useCartTotals from "hooks/useCartTotals";

import { useNavigate } from "react-router-dom";
import CartProductList from "./CartProductList";

const CartDrawer = ({ setToggle }) => {
  const navigate = useNavigate();
  const cartTotals = useCartTotals();

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

        {cart.length > 0 && <CartProductList cart={cart}></CartProductList>}
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
                setToggle(false);
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
