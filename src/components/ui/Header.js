import React, { useState } from "react";
import { logout } from "../auth/Logout";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import BedIcon from "@mui/icons-material/Bed";

import Box from "@mui/material/Box";
// import Avatar from '@mui/material/Avatar';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useLoggedInStatus } from "../../contexts/userLoggedInStatus";

export const Header = () => {
  const { isLoggedIn, setLoggedIn } = useLoggedInStatus();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    setLoggedIn(false);
    logout();
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__icon">Logo</div>
        </Link>
      </div>

      <div className="header__center">
        <input
          placeholder="Search..."
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header__right">
        <p>
          <Link to="/search">Become a host</Link>
        </p>
        <LanguageIcon />
        <Avatar
          onClick={handleClick}
          className="header__userIcon"
          sx={{ bgcolor: "#717171" }}
        />

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className="header__menuItem">
            <Avatar /> Profile
          </MenuItem>
          <MenuItem className="header__menuItem">
            <Avatar /> My Trips
          </MenuItem>
          <MenuItem className="header__menuItem">
            <BedIcon style={{ marginRight: "12.5px" }} />
            <Link to="/search">Houses</Link>
          </MenuItem>
          <Divider />
          {/* <MenuItem className="header__menuItem">
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
          <MenuItem className="header__menuItem">
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={logoutHandler} className="header__menuItem">
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
