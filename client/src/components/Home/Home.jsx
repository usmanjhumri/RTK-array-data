import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import IMG from "./Vector.png";
import SIDE_IMG from "./homepic.png";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box mt={12}>
        <Container>
          <Grid
            container
            sx={{
              background: "#F4F6F5",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <Grid item xs={12} md={5}>
              <Box>
                <Box
                  sx={{
                    background: "#FFFFFF",
                    transform: "rotate(-2deg)",
                    width: { md: "40%", xs: "70%" },
                    padding: "0px 0.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "60px",
                      fontWeight: 900,
                      fontFamily: "Poppins",
                      transform: "rotate(2deg) !important",
                    }}
                  >
                    LET’S
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "60px",
                    fontWeight: 900,
                    fontFamily: "Poppins",
                  }}
                >
                  EXPLORE
                </Typography>
                <Box
                  sx={{
                    background: "#EBD96B",
                    transform: "rotate(-2deg)",
                    width: { md: "60%", xs: "100%" },
                    padding: "0px 0.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "60px",
                      fontWeight: 900,
                      fontFamily: "Poppins",
                      transform: "rotate(2deg) !important",
                    }}
                  >
                    UNIQUE
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "60px",
                    fontWeight: 900,
                    fontFamily: "Poppins",
                  }}
                >
                  CLOTHES
                </Typography>
                <Typography
                  sx={{
                    color: "#191818",
                    fontWeight: 400,
                    fotnSize: "32px",
                    fontFamily: "Poppins",
                  }}
                >
                  Live for Influential and Innovative fashion!
                </Typography>

                <Box
                  mt={5}
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <img
                    src={IMG}
                    style={{
                      width: "30%",
                    }}
                    alt=""
                  />
                  <Button
                    sx={{
                      background: "#000000",
                      width: "120px",
                      height: "50px",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      "&:hover": {
                        background: "#000000",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box>
                <img
                  src={SIDE_IMG}
                  style={{
                    width: "100%",
                  }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
