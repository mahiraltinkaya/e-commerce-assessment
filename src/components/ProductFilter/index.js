import React from "react";
import { Box, TextField, MenuItem } from "@components";

const ProductFilter = ({ sort = "default", setSort }) => {
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
        sx={{ width: 200 }}
        size={"small"}
        value={sort}
        onChange={setSort}
        placeholder="Sırala"
      >
        <MenuItem value={"default"} sx={{ fontSize: 12 }}>
          Önerilen
        </MenuItem>
        <MenuItem value={"asc"} sx={{ fontSize: 12 }}>
          Fiyat:Düşükten Yükseğe
        </MenuItem>
        <MenuItem value={"desc"} sx={{ fontSize: 12 }}>
          Fiyat:Yüksekten Düşüğe
        </MenuItem>
      </TextField>
    </Box>
  );
};

export default ProductFilter;
