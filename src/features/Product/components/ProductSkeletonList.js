import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";

function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={1}>
              <Box padding={1}>
                <Skeleton variant="rectangular" width={"100%"} height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

ProductSkeletonList.propTypes = {};

export default ProductSkeletonList;
