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
import { NavLink, useNavigate, Link, Outlet } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import { useForm } from "react-hook-form";
import { ErrorText } from "../helper/ErrorTestDisplayer";
import { loginHandle } from "../../RTK/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'


const Login = () => {
  const { loading, user } = useSelector((store) => store.userSlice);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(
      loginHandle({
        email: data.email,
        password: data.password,
      })
    );
    if (user) {
      navigate('/')
      toast.success('Loggedin Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })



    } else {
      toast.error('email or password is incorrect ', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    console.log(data);
  };

  // if (user) {
  //   navigate("/");
  // }
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
              <Grid item xs={12} md={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={errors.email}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && (
                  <>
                    {errors.email.type === "pattern"
                      ? ErrorText("Enter valid email")
                      : ErrorText("Emial is Requird")}
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errors.password}
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && (
                  <>
                    {errors.password.type === "password"
                      ? ErrorText("Minimum Length 8 Characters")
                      : ErrorText("password is requird")}
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
                Sign In
              </Button>
              <Grid container margin="auto">
                <Grid item xs={12}>
                  <Link
                    to="/login/forgotpassword"
                    variant="body2"
                    style={{ textAlign: "center" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={12} mt={2}>
                  <Link
                    to="signup"
                    variant="body2"
                    onClick={() => navigate(<SignUp />)}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
};

export default Login;
