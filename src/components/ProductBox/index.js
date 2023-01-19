import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Iconify,
  IconButton,
  Typography,
  Rating,
  Box,
} from "@components";
import styles from "modules/ProductBox.module.scss";
import useTruncate from "hooks/useTruncute";
import { useNavigate } from "react-router-dom";

import { dispatch } from "@store";
import { addCart, addFavorites } from "@store/slices/userSlice";
import { SettingsContext, useContext } from "@context";

const ProductBox = ({ product }) => {
  const { setToggle } = useContext(SettingsContext);
  const truncate = useTruncate();
  const navigate = useNavigate();

  return (
    <Card
      className={styles.card}
      elevation={1}
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      <CardContent className={styles["image-wrapper"]}>
        <IconButton
          className={styles["add-favorite"]}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addFavorites({ ...product, qty: 1 }));
          }}
        >
          <Iconify icon={"material-symbols:favorite-outline-rounded"}></Iconify>
        </IconButton>
        <img src={product.image} alt={product.title} />
      </CardContent>
      <Divider></Divider>
      <CardContent className={styles["product-title"]}>
        <Typography variant="body-1"> {truncate(product.title, 30)}</Typography>
        <Box className={styles["rating-text"]}>
          <Rating
            precision={0.5}
            readOnly
            value={product.rating.rate}
            size={"small"}
          ></Rating>
        </Box>
      </CardContent>
      <CardActions className={styles["add-cart"]}>
        <Typography
          variant="body-1"
          sx={{ fontWeight: "bold", color: "darkorange" }}
        >
          ${product.price}
        </Typography>
        <IconButton
          size={"small"}
          sx={{ background: "orange", color: "white" }}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addCart({ ...product, qty: 1 }));
            setToggle(true);
          }}
        >
          <Iconify
            icon={"material-symbols:add-shopping-cart-outline-rounded"}
            size={22}
          ></Iconify>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default React.memo(ProductBox);
