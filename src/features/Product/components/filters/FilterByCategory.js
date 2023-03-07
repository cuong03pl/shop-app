import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import categoryApi from "api/categoryApi";

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      await categoryApi.getAll().then((res) => setCategoryList(res.data));
    };
    fetchApi();
  }, []);
  const handleChangeCategory = (item) => {
    if (onChange) {
      onChange(item.id);
    }
  };
  return (
    <Box>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {categoryList.map((item, index) => {
          return (
            <li
              style={{ cursor: "pointer", marginTop: "8px" }}
              key={index}
              onClick={() => handleChangeCategory(item)}
            >
              <Typography variant="body2">{item.name}</Typography>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

FilterByCategory.propTypes = {};

export default FilterByCategory;
