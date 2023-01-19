import React from "react";
import {
  Box,
  Iconify,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
} from "@components";
import useParseLayout from "hooks/useParseLayout";
import { deleteCart } from "@store/slices/userSlice";
import useTruncate from "hooks/useTruncute";
import { dispatch } from "@store";

const CartProductList = ({ cart }) => {
  const floatParse = useParseLayout();
  const truncate = useTruncate();

  return (
    <Box>
      <List>
        {cart.map((prod, i) => (
          <ListItem key={i} sx={{ borderBottom: ".5px solid #d9d9d9" }}>
            <ListItemAvatar size={24}>
              <Avatar src={prod.image}></Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ width: "100%" }}>
              {truncate(prod.title, 30)}
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
                icon={"ic:outline-clear"}
                size={24}
                sx={{ color: "red" }}
              ></Iconify>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CartProductList;
