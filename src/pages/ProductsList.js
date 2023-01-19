import React, { useEffect, useMemo, useState } from "react";
import ProductBox from "components/ProductBox";
import {
  fetchProducts,
  fetchAllCategories,
  fetchProductsByCategory,
} from "@store/slices/productSlice";
import { dispatch, useSelector } from "@store";
import { Grid, Iconify, Typography } from "@components";
import PagesLayout from "components/PagesLayout";
import ProductSkeleton from "components/ProductBox/ProductSkeleton";
import ProductFilter from "components/ProductFilter";
import { SettingsContext, useContext } from "@context";

const ProductsList = () => {
  const { search } = useContext(SettingsContext);
  const { products, isLoading } = useSelector((state) => state.products);
  const [sort, setSort] = useState("default");
  const [limit, setLimit] = useState(12);
  const [category, setCategory] = useState("all");

  const scrollHandler = () => {
    const scH = document.documentElement.scrollHeight;
    const scT = document.documentElement.scrollTop;
    const winH = window.innerHeight;
    if (winH + scT + 1 >= scH) {
      setLimit((prev) => prev + 4);
    }
  };

  useEffect(() => {
    dispatch(fetchAllCategories());

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (category === "all") {
      if (!isLoading && products.length < 20) {
        dispatch(fetchProducts({ limit, sort }));
      }
    } else {
      dispatch(fetchProducts({ limit, sort }));
    }
  }, [limit]); // eslint-disable-line

  useEffect(() => {
    if (category !== "all") {
      dispatch(fetchProductsByCategory({ category, sort }));
    } else {
      dispatch(fetchProducts({ limit, sort }));
    }
  }, [category]); // eslint-disable-line

  useEffect(() => {
    if (sort !== "default") {
      if (category !== "all") {
        dispatch(fetchProductsByCategory({ category, sort }));
      } else {
        dispatch(fetchProducts({ limit, sort }));
      }
    }
  }, [sort]); // eslint-disable-line

  const filteredProduct = useMemo(() => {
    let prodList = [...products];

    // if (sort === "asc") {
    //   prodList.sort((a, b) => {
    //     return a.price - b.price;
    //   });
    // } else if (sort === "desc") {
    //   prodList.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    // }

    if (search.trim()) {
      prodList = prodList.filter(
        (item) =>
          search.trim() &&
          item.title &&
          item.title.toLowerCase().match(String(search.trim()).toLowerCase())
      );
    }

    return prodList;
  }, [products, search]);

  return (
    <PagesLayout>
      <ProductFilter
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={(e) => {
          setSort(e.target.value);
        }}
      ></ProductFilter>
      <Grid container spacing={2}>
        {filteredProduct.length > 0 &&
          filteredProduct.map((item, x) => {
            return (
              <Grid item key={x} xs={12} sm={4} md={3}>
                <ProductBox product={item}></ProductBox>
              </Grid>
            );
          })}

        {products.length > 0 && filteredProduct.length === 0 && (
          <Grid
            item
            xs={12}
            sx={{
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Gösterilecek ürün bulunamadı</Typography>
          </Grid>
        )}
        {products.length < 1 &&
          [...Array(20).keys()].map((item, i) => {
            return (
              <Grid item key={i} xs={12} sm={4} md={3}>
                <ProductSkeleton></ProductSkeleton>
              </Grid>
            );
          })}
        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
          {isLoading && (
            <Iconify
              icon={"line-md:downloading-loop"}
              sx={{ fontSize: 48, color: "orange" }}
            ></Iconify>
          )}
        </Grid>
      </Grid>
    </PagesLayout>
  );
};

export default React.memo(ProductsList);
