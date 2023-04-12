import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import NAV_LOGO from "./NavImges/Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

const Navbars = () => {
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
    <Box
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

                <Box>
                  <Typography>
                    <NavLink className="links" to="/fashion">
                      FASHION
                    </NavLink>
                  </Typography>
                </Box>

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
