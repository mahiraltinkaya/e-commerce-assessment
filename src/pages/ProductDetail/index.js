import React, { useEffect } from "react";
import PagesLayout from "components/PagesLayout";
import { fetchProductById } from "@store/slices/productSlice";
import { dispatch, useSelector } from "@store";
import { useParams } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  Button,
  Iconify,
} from "@components";
import styles from "modules/ProductDetails.module.scss";

import { addCart, addFavorites } from "@store/slices/userSlice";

import { useContext, SettingsContext } from "@context";

const ProductDetail = () => {
  const { setToggle } = useContext(SettingsContext);
  const params = useParams();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, [params.id]);

  return (
    <PagesLayout>
      {product && (
        <Box className={styles.wrapper}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              className={styles["wrapper__left-section"]}
            >
              <Card>
                <CardContent>
                  <img src={product.image} alt={product.title} />
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              className={styles["wrapper__right-section"]}
            >
              <Typography variant={"h6"}>{product.title}</Typography>

              <Box className={styles["product-category"]}>
                {product.category.toUpperCase()}
              </Box>
              <Box>
                <Rating
                  precision={0.5}
                  readOnly
                  value={product.rating.rate}
                  size={"small"}
                  getLabelText={() => product.rating.count}
                  label={product.rating.count}
                />
              </Box>
              <Box className={styles["product-price"]}>${product.price}</Box>
              <Box className={styles["product-description"]}>
                <p>{product.description}</p>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <Button
                  variant={"outlined"}
                  onClick={() => {
                    dispatch(addCart({ ...product, qty: 1 }));
                    setToggle(true);
                  }}
                  sx={{ mr: 1, minWidth: 200 }}
                >
                  <Iconify
                    icon={"ic:outline-add-shopping-cart"}
                    size={18}
                  ></Iconify>
                  Add To Cart
                </Button>
                <Button
                  variant={"outlined"}
                  onClick={() => {
                    dispatch(addFavorites({ ...product, qty: 1 }));
                    setToggle(true);
                  }}
                  sx={{ mr: 1, minWidth: 200 }}
                  color={"secondary"}
                >
                  <Iconify
                    icon={"material-symbols:favorite-rounded"}
                    size={18}
                  ></Iconify>
                  Add To Wishlist
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </PagesLayout>
  );
};

export default ProductDetail;
