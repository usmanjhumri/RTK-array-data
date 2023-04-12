import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpHandle: [
    {
      firstname: 'usman',
      lastname: 'latif',
      phonenumber: '03001234567',
      email: 'usman@gmail.com',
      address: 'chak jhumra fsd',
      password: 'password123',
      confirmpassword: 'password123'
    },
    {
      firstname: 'mehboob',
      lastname: 'raza',
      phonenumber: '03001234567',
      email: 'raza@gamil.com',
      address: 'rahim yar khan',
      password: 'password123',
      confirmpassword: 'password123'
    }
  ],
  loginHandle: [],
  product: [],
  signUp: false,
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signUpHandle: (state, action) => {
      console.log(action.payload, ' action payload');

      let value = state.signUpHandle
      value = [...value, action.payload]
      console.log(value, ' value');
      state.signUpHandle = value
      console.log(state.signUpHandle, ' state signuphandle');
    },
    loginHandle: (state, action) => {
      console.log(action.payload, ' login action');
      const { email, password } = action.payload
      console.log(email, password, ' email and password');

      const user = state.signUpHandle.find((user) => user.email === email && user.password === password)
      if (user) {
        state.user = user
        state.loginHandle.push(user)
      } else {
        state.user = null

      }

    },
    logoutUser: (state, action) => {
      state.loginHandle = state.loginHandle.filter(
        (user) => user.username !== action.payload
      );
    },
  },
});

export const { signUpHandle, logoutUser, loginHandle } = userSlice.actions;
export default userSlice.reducer;



