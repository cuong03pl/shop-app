import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Register from "features/Auth/components/Register/Register";
import Login from "features/Auth/components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import { logout } from "features/Auth/userSlice";
const cx = classNames.bind(styles);
const theme = createTheme({});
const MODE = {
  login: "login",
  register: "register",
};
function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.login);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ShoppingBagIcon sx={{ marginRight: "10px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link>Shop App</Link>
            </Typography>
            {isLoggedIn && (
              <AccountCircleIcon onClick={(e) => handleClick(e)} />
            )}
            {!isLoggedIn && (
              <Button onClick={handleClickOpen} color="inherit">
                Đăng nhập
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
        <Dialog disableEscapeKeyDown={true} open={open} onClose={handleClose}>
          <DialogContent sx={{ padding: "8px 24px", minWidth: "400px" }}>
            {mode === MODE.register && (
              <>
                <Register onCloseDialog={handleClose} />
                <Box margin={"10px 0"}>
                  <Button fullWidth onClick={() => setMode(MODE.login)}>
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.login && (
              <>
                <Login onCloseDialog={handleClose} />
                <Box margin={"10px 0"}>
                  <Button fullWidth onClick={() => setMode(MODE.register)}>
                    Dont have an account. Register here
                  </Button>
                </Box>
              </>
            )}
            {}

            <DialogActions>{/*  close */}</DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}
export default Header;
