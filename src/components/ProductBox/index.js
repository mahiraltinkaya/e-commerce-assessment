import React from "react";
import { Card, CardContent, CardActions } from "@components";
import styles from "./ProductBox.module.scss";

const ProductBox = () => {
  return (
    <Card className={styles.card}>
      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default React.memo(ProductBox);
