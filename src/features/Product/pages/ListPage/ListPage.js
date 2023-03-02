import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import productApi from "api/productApi";
import ProductSkeletonList from "features/Product/components/ProductSkeletonList";
import ProductList from "features/Product/components/ProductList";

function ListPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 10,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  useEffect(() => {
    setIsLoading(false);
    const fetchApi = async () => {
      await productApi.getAll(filters).then((res) => {
        setProductList(res.data.data);
        setPagination(res.pagination);
      });
    };
    setIsLoading(false);
    fetchApi();
  }, [filters]);
  const handlePageChange = (e, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item width={"255px"}>
            <Paper elevation={0}>1</Paper>
          </Grid>
          <Grid item flex={"1 1 0"}>
            <Paper elevation={0}>
              {isLoading ? (
                <ProductSkeletonList length={6} />
              ) : (
                <ProductList data={productList} />
              )}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                  count={Math.ceil(pagination?.total / pagination?.limit)}
                  page={pagination?.page}
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
