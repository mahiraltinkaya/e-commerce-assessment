import React, { useEffect } from "react";
import ProductBox from "components/ProductBox";
import { fetchProducts } from "@store/slices/productSlice";
import { dispatch, useSelector } from "@store";
import { Box } from "@components";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.length > 0 &&
        products.map((item, x) => {
          return <ProductBox key={x} product={item}></ProductBox>;
        })}
    </Box>
  );
};

export default ProductsList;
