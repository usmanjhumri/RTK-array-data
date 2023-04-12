import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FaFacebookF, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#000000",
          padding: "4rem",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "40px",
                  fontFamily: "Poppins",
                  color: "#FFFFFF",
                  letterSpacing: " 0.03em",
                }}
              >
                FASHION
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: { md: "24px", xs: "18px" },
                  color: "#8E8E8E",
                }}
              >
                Complete your style with awesome <br /> clothes from us.
              </Typography>
              <Box
                sx={{
                  display: {
                    md: "auto",
                    xs: "flex",

                    // justifyContent: "center",
                    // alignItems: "center",
                  },
                  justifyContent: {
                    xs: "center",
                    alignItems: "center",
                    md: "left",
                  },
                }}
              >
                <Link
                  className="link"
                  to="https://www.facebook.com/profile.php?id=100006384960823"
                  target="_blank"
                >
                  <FaFacebookF
                    style={{
                      color: "#000000",
                      background: "#EBD96B",
                      margin: "14px",
                      borderRadius: "8px",

                      transition: "all .5s ease",
                      padding: "0.8rem",
                      fontSize: "3rem",
                    }}
                  />
                </Link>

                <Link
                  className="link"
                  to="https://www.facebook.com/profile.php?id=100006384960823"
                  target="_blank"
                >
                  <BsInstagram
                    style={{
                      color: "#000000",
                      background: "#EBD96B",
                      margin: "14px",
                      borderRadius: "8px",

                      transition: "all .5s ease",
                      padding: "0.8rem",
                      fontSize: "3rem",
                    }}
                  />
                </Link>

                <Link
                  className="link"
                  to="https://www.facebook.com/profile.php?id=100006384960823"
                  target="_blank"
                >
                  <IoLogoTwitter
                    style={{
                      color: "#000000",
                      background: "#EBD96B",
                      margin: "14px",
                      borderRadius: "8px",

                      transition: "all .5s ease",
                      padding: "0.8rem",
                      fontSize: "3rem",
                    }}
                  />
                </Link>

                <Link
                  className="link"
                  to="https://www.linkedin.com/in/muhammad-usman-97269b153/"
                  target="_blank"
                >
                  <FiLinkedin
                    style={{
                      color: "#000000",
                      background: "#EBD96B",
                      margin: "14px",
                      borderRadius: "8px",

                      transition: "all .5s ease",
                      padding: "0.8rem",
                      fontSize: "3rem",
                    }}
                  />
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography
                mb={5}
                sx={{
                  fontFamily: "Roboto",
                  fontSize: { md: "24px", xs: "18px" },
                  color: "#D9D9D9",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                }}
              >
                Company
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",
                    fontSize: { md: "20px", xs: "17px" },
                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Support
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Careers
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography
                mb={5}
                sx={{
                  fontFamily: "Roboto",
                  fontSize: { md: "24px", xs: "18px" },
                  color: "#D9D9D9",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                }}
              >
                Quick Link
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  fontSize: { md: "20px", xs: "18px" },
                  textAlign: "left",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Share Location
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Order Tracking
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Size Guid
                </Link>
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                  fontSize: { md: "20px", xs: "17px" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",

                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  FAQs
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                mb={5}
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  color: "#D9D9D9",
                  letterSpacing: "0.02em",
                  textAlign: "left",
                }}
              >
                Legal
              </Typography>
              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Terms & Condition
                </Link>
              </Typography>

              <Typography
                sx={{
                  margin: "1rem 0px",
                  textAlign: "left",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "#8E8E8E",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 400,
                    letterSpacing: " 0.02em",
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
