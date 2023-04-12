import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import IMG from "./DownloadImage/one.png";
import BTN from "./DownloadImage/btn.png";
import BTN1 from "./DownloadImage/btn1.png";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

// const myComponent = styled("p")({
//   fontFamily: "Poppins",
//   fontSize: "48px",
//   fontWeight: 900,
//   color: "#000000",
// });

// const useStyles = makeStyles({
//   root: {
//     fontFamily: "Poppins",
//     fontSize: "48px",
//     fontWeight: 900,
//     color: "#000000",
//   },
// });

const Download = () => {
  //   const classes = useStyles();
  return (
    <div>
      <Box mt={12}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6} margin="auto">
              {/* <myComponent> DOWNLOAD APP &</myComponent>
              <myComponent>GET THE VOUCHER!</myComponent> */}
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "24px", md: "48px" },
                  fontWeight: 900,
                  color: "#000000",
                }}
              >
                DOWNLOAD APP &
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "24px", md: "48px" },
                  fontWeight: 900,
                  color: "#000000",
                }}
              >
                GET THE VOUCHER!
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  color: "#7C7C7C",
                  letterSpacing: "-0.04em",
                }}
              >
                Get 30% off for first transaction using <br /> Rondovision
                mobile app for now.
              </Typography>
              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    width: "150px",
                  }}
                >
                  <img src={BTN} width="100%" alt="" />
                </Button>
                <Button
                  sx={{
                    width: "150px",
                  }}
                >
                  <img src={BTN1} width="100%" alt="" />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={IMG} width="100%" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Download;
