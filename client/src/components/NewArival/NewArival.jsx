import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BG from "./NewArivalImage/BG.png";
import NewArivalArray from "./NewArivalArray";
const NewArival = () => {
  return (
    <div>
      <Box mt={12}>
        <Container>
          <Box
            sx={{
              width: { md: "30%", xs: "64%" },
              background: `url(${BG})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "200px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { md: "48px", xs: "30px" },
                color: "#000000",
                fontFamily: "Poppins",
              }}
            >
              NEW ARRIVALS
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {NewArivalArray.map((item) => {
              return (
                <>
                  <Grid item xs={12} md={4}>
                    <Box mt={4}>
                      <img src={item.img} style={{ width: "100%" }} alt="" />
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

export default NewArival;
