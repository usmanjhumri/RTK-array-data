import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import NAV_LOGO from "./NavImges/Logo.png";
import { NavLink, Outlet, Navigate, useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { logoutUser } from '../../RTK/slice/userSlice'
import MenuIcon from "@mui/icons-material/Menu";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux'

const Navbars = () => {
  const { isLoggedIn, user } = useSelector((store) => store.userSlice)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logoutUser())
    // window.location.href = '/signup';
  }

  const handleAddbtn = () => {

  }
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box mt={3}
      pl={10}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        margin: "auto",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["CATALOGUE", "FASHION", "FAVOURITE", "LIFESTYLE", "SIGN UP"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{}}>
        <Container>
          <Grid container sx={{}}>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={NAV_LOGO}
                style={{
                  width: "150px",
                  // background:"green"
                }}
                alt=""
              />
            </Box>

            <Hidden smDown>
              <Box
                mt={0.5}
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },

                  gap: 1,
                }}
              >
                <Box>
                  <Typography sx={{}}>
                    <NavLink className="links" to="/">
                      CATALOGUE
                    </NavLink>
                  </Typography>
                </Box>

                {
                  isLoggedIn && (
                    <>
                      <Box>
                        <Typography>
                          <NavLink className="links" to="/addproduct">
                            Add Product
                          </NavLink>
                        </Typography>
                      </Box>
                    </>
                  )
                }

                <Box>
                  <Typography>
                    <NavLink className="links" to="/favourite">
                      FAVOURITE
                    </NavLink>
                  </Typography>
                </Box>

                <Box>
                  <Typography>
                    <NavLink className="links" to="/lifestyle">
                      LIFESTYLE
                    </NavLink>
                  </Typography>
                </Box>

                {
                  !isLoggedIn && (
                    <>
                      <Box>
                        <Typography>
                          <NavLink className="links white" to="/signup">
                            SIGN UP
                          </NavLink>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          <NavLink className="links white" to="/login">
                            Login
                          </NavLink>
                        </Typography>
                      </Box>
                    </>
                  )
                }



                {
                  isLoggedIn && (
                    <>
                      <Box sx={{ minWidth: 130, }}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-label">{user.firstname}</InputLabel>
                          <Select labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label={user.firstname}>
                            <MenuItem>

                              <NavLink onClick={handleLogout} className="links white" to="/signup">
                                Logout
                              </NavLink>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </>
                  )
                }


              </Box>
            </Hidden>

            <Hidden mdUp>
              <div>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={toggleDrawer(anchor, true)}
                      sx={{ mr: 2, display: { md: "none" } }}
                    >
                      <MenuIcon
                        sx={{
                          color: "#000000",
                        }}
                      />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            </Hidden>
          </Grid>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbars;
