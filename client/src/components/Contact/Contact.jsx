import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#E5C643",
          textAlign: "center",
          padding: "4rem",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontWeight: { md: 900, xs: 600 },
                  fontSize: { xs: "18px", md: "50px" },
                  fontFamily: "Poppins",
                  color: "#FFFFFF",
                  textAlign: { xs: "center", md: "auto" },
                }}
              >
                JOIN SHOPPING COMMUNITY TO
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "15px", md: "50px" },
                  fontFamily: "Poppins",
                  color: "#FFFFFF",
                }}
              >
                GET MONTHLY PROMO
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "18px", md: "25px" },
                  fontFamily: "Poppins",
                  color: "#FFFCF8",
                  letterSpacing: "0.03em",
                }}
              >
                Type your email down below and be young wild generation
              </Typography>

              <TextField
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  //   border: "1px solid",
                  background: "#FFFFFF",
                  width: { sm: "150px", md: "380px" },
                  "& fieldset": { border: "none" },
                  marginTop: "1rem",
                  input: {
                    color: "#000000",
                  },
                  borderRadius: 2,
                }}
                placeholder="Add your email here"
                InputProps={{
                  endAdornment: (
                    <Button
                      sx={{
                        background: "#000000",
                        color: "#FFFFFF",
                        fontFamily: "Poppins",
                        fontSize: { md: "20px", xs: "14px" },
                        fontWeight: 500,
                        width: { md: "150px", xs: "50px" },
                        height: "45px",
                      }}
                    >
                      send
                    </Button>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
