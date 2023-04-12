import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import IMG from "./paydayIMG/side.png";

const Payday = () => {
  return (
    <div>
      <Box
        mt={12}
        sx={{
          background:
            "linear-gradient(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%);",
          padding: "2rem",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={IMG} width="100%" alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  transform: " matrix(1, -0.03, 0.03, 1, 0, 0);",
                  width: "60%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "29px", md: "80px" },
                    fontWeight: 900,
                    fontFamily: "Poppins",
                    transform: "rotate(2deg)",
                    color: "#000000",
                  }}
                >
                  PAYDAY
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "29px", md: "80px" },
                  fontWeight: 900,
                  fontFamily: "Poppins",

                  color: "#000000",
                }}
              >
                SALE NOW
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  fontSize: "30px",
                  color: "#231300",
                }}
              >
                Spend minimal $100 get 30% off voucher code for your next
                purchase
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontFamily: "Poppins",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "30px",
                }}
              >
                1 June - 10 June 2021
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Poppins",
                  color: "#000000",
                  fontSize: "30px",
                }}
              >
                *Terms & Conditions apply
              </Typography>
              <Button
                sx={{
                  background: "#000000",
                  width: "120px",
                  height: "50px",
                  color: "#FFFFFF",

                  marginTop: "1rem",
                  "&:hover": {
                    background: "#000000",
                  },
                }}
              >
                Shop Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Payday;
