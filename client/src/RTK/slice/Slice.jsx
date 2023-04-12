// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axios from "axios";

// // thunk functions
// // for signup
// export const signUpHandle = createAsyncThunk(
//   "mainSlice/singUpHandle",
//   async ({
//     firstname,
//     lastname,
//     email,
//     phonenumber,
//     address,
//     password,
//     confirmpassword,
//   }) => {
//     const data = await axios.post("http://localhost:8000/singup", {
//       firstname,
//       lastname,
//       email,
//       phonenumber,
//       address,
//       password,
//       confirmpassword,
//     });
//     return data.data;
//   }
// );

// // for loging

// export const loginHandle = createAsyncThunk(
//   "mainSlice/loginHandle",
//   async ({ email, password }) => {
//     const data = await axios.post("http://localhost:8000/login", {
//       email,
//       password,
//     });
//     return data.data;
//   }
// );

// export const resetHandle = createAsyncThunk(
//   "mainSlice/resetHandle",
//   async ({ password, confirmpassword }) => {
//     const data = await axios.post("http://localhost:8000/reset", {
//       password,
//       confirmpassword,
//     });
//     return data.data;
//   }
// );

// const Toaster = () => {
//   toast.loading("Loading ....", {
//     position: "top-right",
//     autoClose: false,
//     hideProgressBar: true,
//   });
// };

// let initialState = {
//   loading: false,
//   user: null,
//   signUp: false,
//   reset: false,
// };

// export const mainSlice = createSlice({
//   name: "mainSlice",
//   initialState,
//   reducers: {
//     LOG_OUT: (state) => {
//       toast.dismiss();
//       state.user = null;
//     },
//   },
//   // thunk reducers reponse
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginHandle.pending, (state) => {
//         Toaster();
//       })
//       .addCase(loginHandle.fulfilled, (state, { payload }) => {
//         toast.dismiss();
//         if (payload.success) {
//           console.log(payload, " payload");
//           state.user = payload.user;
//           toast.success(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         } else {
//           toast.error(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//       })
//       .addCase(loginHandle.rejected, (state, error) => {
//         toast.dismiss();
//       })

//       //   for singup
//       .addCase(signUpHandle.pending, (state) => {
//         Toaster();
//       })
//       .addCase(signUpHandle.fulfilled, (state, { payload }) => {
//         toast.dismiss();
//         if (payload.success) {
//           state.signUp = true;
//           toast.success(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         } else {
//           toast.error(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//       })
//       .addCase(signUpHandle.rejected, (state, error) => {
//         toast.dismiss();
//       })
//       .addCase(resetHandle.pending, (state) => {
//         Toaster();
//       })
//       .addCase(resetHandle.fulfilled, (state, { payload }) => {
//         state.reset = true;
//         if (payload.success) {
//           toast.success(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         } else {
//           toast.error(payload.message, {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             draggable: true,
//             pauseOnHover: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//       })
//       .addCase(resetHandle.rejected, (state, error) => {
//         toast.dismiss();
//       });
//   },
// });

// export const LOG_OUT = mainSlice.actions;

// //---------------- all asyn getter setter reducers export------------------------//
// export const mainReducer = mainSlice.reducer;
