import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";
import ProductItem from "./ProductItem";

function ProductList({ data = [] }) {
  return (
    <Box>
      <Grid container>
        {data?.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={1}>
              <ProductItem data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

ProductList.propTypes = {};

export default ProductList;
