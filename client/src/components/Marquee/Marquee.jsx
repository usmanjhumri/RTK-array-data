import { Box, Container, Grid } from "@mui/material";
import React from "react";
import MD from "./MarqueeImage/mdScreen.png";

const Marquee = () => {
  return (
    <div>
      <Box
        mt={6}
        sx={{
          background: "#EBD96B",
          padding: "2rem",
        }}
      >
        <Container>
          <Grid container>
            <Box>
              <img src={MD} style={{ width: "100%" }} alt="" />
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Marquee;
