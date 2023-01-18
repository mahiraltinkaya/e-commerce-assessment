import React from "react";
import { Skeleton, Card, CardContent, Divider, CardActions } from "@components";
import styles from "./ProductBox.module.scss";

const ProductSkeleton = () => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles["image-wrapper"]}>
        <Skeleton height={240}></Skeleton>
      </CardContent>
      <Divider></Divider>
      <CardContent className={styles["product-title"]}>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={80}></Skeleton>
      </CardContent>
      <CardActions className={styles["add-cart"]}>
        <Skeleton width="20%" height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </CardActions>
    </Card>
  );
};

export default ProductSkeleton;
