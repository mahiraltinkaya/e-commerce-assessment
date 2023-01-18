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
import styles from "./ProductBox.module.scss";
import useTruncute from "hooks/useTruncute";

const ProductBox = ({ product }) => {
  const truncate = useTruncute();

  return (
    <Card className={styles.card} elevation={1}>
      <CardContent className={styles["image-wrapper"]}>
        <IconButton className={styles["add-favorite"]}>
          <Iconify icon={"material-symbols:favorite-outline-rounded"}></Iconify>
        </IconButton>
        <img src={product.image} alt={product.title} />
      </CardContent>
      <Divider></Divider>
      <CardContent className={styles["product-title"]}>
        <Typography variant="body-1"> {truncate(product.title)}</Typography>
        <Box className={styles["rating-text"]}>
          <Rating
            precision={0.5}
            readOnly
            value={product.rating.rate}
            size={"small"}
          />
        </Box>
      </CardContent>
      <CardActions className={styles["add-cart"]}>
        <Typography
          variant="body-1"
          sx={{ fontWeight: "bold", color: "darkorange" }}
        >
          ${product.price}
        </Typography>
        <IconButton>
          <Iconify
            icon={"material-symbols:add-shopping-cart-outline-rounded"}
          ></Iconify>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default React.memo(ProductBox);
