import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import YoungsArray from "./YoungsArray";
import BG from "./YoungsImage/bg.png";

const Youngs = () => {
  return (
    <div>
      <Box mt={12}>
        <Container>
          <Box
            sx={{
              width: { md: "38%", xs: "60%" },
              background: `url(${BG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: { md: "bottom right", xs: "center" },
              backgroundSize: "300px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { md: "48px", xs: "20px" },
                color: "#000000",
                fontFamily: "Poppins",
                textAlign: "center",
                display: "flex",
              }}
            >
              Young’s Favourite
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {YoungsArray.map((item) => {
              return (
                <>
                  <Grid item xs={12} md={6}>
                    <Box mt={4}>
                      <img src={item.IMG} style={{ width: "100%" }} alt="" />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "24px",
                              fontFamily: "Poppins",
                              color: "#191919",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px",
                              fontFamily: "Poppins",
                              color: "#7F7F7F",
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                        <Box sx={{ fontSize: "1rem" }}>&#x2192;</Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Youngs;
