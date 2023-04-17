import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { ErrorText } from "../helper/ErrorTestDisplayer";
import { ExpandCircleDown } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { signUpHandle } from "../../RTK/slice/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
const SignUp = () => {
  const { signUp } = useSelector((store) => store.userSlice);
  const dispatch = useDispatch();
  const [actorRole, setActorRole] = useState('')
  const {
    register,
    handleSubmit,

    // reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    if (data.Confirmpassword === data.password) {

      dispatch(
        signUpHandle({
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          phonenumber: data.phoneNumber,
          address: data.address,
          password: data.password,
          confirmpassword: data.Confirmpassword,
        })
      )
      toast.success('user registerd', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      document.getElementById("signUp").reset();
      navigate("/login");

    } else {
      toast.error("password not matched", {
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

    console.log(data, " usman");
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (signUp) {

    }
  }, [signUp]);
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            id="signUp"
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={errors.firstName}
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]{1,}$/,
                  })}
                />
                {errors.firstName && (
                  <>
                    {errors.firstName.type === "pattern"
                      ? ErrorText("Minimum Length 3 characters!")
                      : ErrorText("First Name is Required!")}
                  </>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={errors.lastName}
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]{1,}$/,
                  })}
                />
                {errors.lastName && (
                  <>
                    {errors.lastName.type === "pattern"
                      ? ErrorText("Minimum Length 3 characters!")
                      : ErrorText("Last Name is Required!")}
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                      ? ErrorText("Enter a valid email address!")
                      : ErrorText("Email Address is Required!")}
                  </>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone-Number"
                  type="phoneNumber"
                  id="password"
                  autoComplete="new-password"
                  error={errors.phoneNumber}
                  {...register("phoneNumber", {
                    required: true,
                    pattern:
                      /([0-9\s-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                  })}
                />
                {errors.email && (
                  <>
                    {errors.email.type === "pattern"
                      ? ErrorText("Enter a valid phone number!")
                      : ErrorText("Phone Number is Required!")}
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  error={errors.address}
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <>
                    {errors.address.type === "address"
                      ? ErrorText("enter valid address")
                      : ErrorText("Address is Requird")}
                  </>
                )}
              </Grid>

              <Grid item xs={12}>
                <FormControl error={errors.actorRole} fullWidth required>
                  <InputLabel id="registration-role">
                    Account Role
                  </InputLabel>
                  <Select
                    fullWidth
                    required
                    {...register('actorRole', { required: true })}
                    onChange={(e) => setActorRole(e.target.value)}
                    error={errors.actorRole}
                    labelId="registration-role"
                    name="actorRole"
                    value={actorRole}
                    label="actorRole"
                    displayEmpty

                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <ExpandCircleDown />
                  //   </InputAdornment>
                  // }
                  >
                    <MenuItem value={''}>  </MenuItem>
                    <MenuItem value={'seller'}>  Seller </MenuItem>
                    <MenuItem value={'buyer'}>  Buyer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


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
              <Grid item xs={12}>
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
            </Grid>
            <Button
              type="submit"
              variant="button"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                px: 10,
                py: 2,
                color: "#FFFFFF",
                clipPath:
                  "polygon(21% 0, 94% 0, 100% 20%, 79% 100%, 6% 100%, 0 80%)",
                background:
                  " radial-gradient(241.67% 3206.67% at -4.58% -26.67%, #AD00FF 8.51%, #0029FF 90%)",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item md={12}>
                <Box>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Box>
                <Box>
                  <Link href="#" variant="body2">
                    Reset Password
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
