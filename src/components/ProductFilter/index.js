import React from "react";
import { Box, TextField, MenuItem } from "@components";
import { useSelector } from "@store";
import useTitleCase from "hooks/useTitleCase";

const ProductFilter = ({
  sort = "default",
  setSort,
  category = "all",
  setCategory,
}) => {
  const titleCase = useTitleCase();
  const { categories } = useSelector((state) => state.products);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        height: 80,
        alignItems: "center",
      }}
    >
      <TextField
        select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        size={"small"}
        color={"warning"}
      >
        <MenuItem value="all" sx={{ fontSize: 12 }}>
          All Categories
        </MenuItem>
        {categories.map((item, i) => {
          return (
            <MenuItem key={i} value={item} sx={{ fontSize: 12 }}>
              {titleCase(item)}
            </MenuItem>
          );
        })}
      </TextField>
      <Box sx={{ flex: 1 }}></Box>
      <TextField
        select
        sx={{ width: 150 }}
        size={"small"}
        value={sort}
        onChange={setSort}
        color={"warning"}
        placeholder="Sırala"
      >
        <MenuItem value={"default"} sx={{ fontSize: 12 }}>
          Suggested
        </MenuItem>
        <MenuItem value={"asc"} sx={{ fontSize: 12 }}>
          Low Price
        </MenuItem>
        <MenuItem value={"desc"} sx={{ fontSize: 12 }}>
          High Price
        </MenuItem>
      </TextField>
    </Box>
  );
};

export default React.memo(ProductFilter);
