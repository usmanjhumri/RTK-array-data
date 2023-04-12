import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { resetHandle } from "../../RTK/slice/Slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const ForgotPaswrd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.Confirmpassword === data.password) {
      dispatch(
        resetHandle({
          email: data.email,
          password: data.password,
        })
      );
    } else {
      toast.error("password and confirm password must be same", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log(data);
  };

  return (
    <div>
      <Grid mt={6} mb={6} container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  error={errors.password}
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && (
                  <>
                    {errors.password.type === "password"
                      ? ErrorText("Minimum Length 8 Characters")
                      : ErrorText("Password is Requird")}
                  </>
                )}
              </Grid>
              <Grid item xs={12} mt={4}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="password"
                  label="Confirm-Password"
                  name="Confirmpassword"
                  autoComplete="password"
                  error={errors.Confirmpassword}
                  {...register("Confirmpassword", {
                    required: true,
                    minLength: 7,
                  })}
                />
                {errors.Confirmpassword && (
                  <>
                    {errors.Confirmpassword.type === "Confirmpassword"
                      ? ErrorText("Minimum Length 7 Characters")
                      : ErrorText("Password is Requird")}
                  </>
                )}
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPaswrd;
