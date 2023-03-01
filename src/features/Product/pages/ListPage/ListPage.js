import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";
import productApi from "api/productApi";

function ListPage(props) {
  useEffect(() => {
    const fetchApi = async () => {
      const res = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log(res);
    };
    fetchApi();
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item width={"255px"}>
            <Paper elevation={0}>1</Paper>
          </Grid>
          <Grid item flex={"1 1 auto"}>
            <Paper elevation={0}>2</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
