import React, { useEffect } from "react";
import ProductBox from "components/ProductBox";
import { fetchProducts } from "@store/slices/productSlice";
import { dispatch, useSelector } from "@store";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);

  useEffect(() => {}, []);

  return (
    <div>
      <ProductBox></ProductBox>
    </div>
  );
};

export default ProductsList;
