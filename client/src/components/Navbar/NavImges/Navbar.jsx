import React, { useState } from 'react'
import { Box, Container, Grid, Hidden, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NavItems from './NavItems';
import NAV_LOGO from './nav-logo.svg'
import { Link } from 'react-router-dom'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Menu', 'About', 'Contact', 'Book Table'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
        
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <>

      <Box mt={4}>
        <Container>
          <Grid container>


            <Box sx={{
              flexGrow: 1,
            }}>
              <img src={NAV_LOGO} style={{

              }} alt="" />
            </Box>
            <Hidden smDown>
              <Box sx={{
                display: { xs: 'none', sm: 'none', md: "flex" },


              }}>
                {
                  NavItems.map((item, ind) => {

                    return (
                      <>
                        <Typography sx={{
                          margin: "0px 0.8rem",

                        }} key={ind}>
                          <Link style={{
                            color: "#3f3c3c",
                            fontSize: "1.2rem",
                            fontFamily: "Poppins",
                            textDecoration: "none",
                            fontWeight: 600,
                            padding: "0.5em"

                          }} to={item.Link}>
                            {item.title}
                          </Link>
                        </Typography>
                      </>
                    )





                  })
                }
                <Box>
                  <Typography>
                    <Link style={{
                      margin: "0px 1rem",
                      padding: "0.8rem 2rem",
                      background: "#26643b",
                      color: "#e8e8e8",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "1.2rem"

                    }} to='booking'>
                      Book Table
                    </Link>
                  </Typography>
                </Box>

              </Box>
            </Hidden>
            <Hidden mdUp>
              <div>
                {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={toggleDrawer(anchor, true)}
                      sx={{ mr: 2, display: { md: "none" } }}
                    >
                      <MenuIcon />
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

    </>
  )
}

export default Navbar