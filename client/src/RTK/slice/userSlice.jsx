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
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,

  //----------------------Reducers-------------------------------//

  reducers: {

    //-------------------------------signUpHandle---------------------------------//

    signUpHandle: (state, action) => {
      console.log(action.payload, ' action payload');

      let value = state.signUpHandle
      value = [...value, action.payload]
      console.log(value, ' value');
      state.signUpHandle = value
      console.log(state.signUpHandle, ' state signuphandle');
    },

    //-------------------------------loginHanle---------------------------------//

    loginHandle: (state, action) => {
      console.log(action.payload, ' login action');
      const { email, password } = action.payload
      console.log(email, password, ' email and password');

      const user = state.signUpHandle.find((user) => user.email === email && user.password === password)

      console.log(user, "Found user");
      if (user) {
        state.isLoggedIn = true;
        state.user = user
        state.loginHandle.push(user)
      } else {
        state.isLoggedIn = false
        state.user = null

      }

    },

    //-----------------------------logoutUser------------------------------------//

    logoutUser: (state, action) => {

      state.isLoggedIn = false;
      state.user = null
      state.loginHandle = state.loginHandle.filter(
        (user) => user.username !== action.payload
      );
    },
  },
});

//----------------------------Exporting Reducers action-----------------------------------//

export const { signUpHandle, logoutUser, loginHandle } = userSlice.actions;

//---------------------------Exporting userSlice-------------------------//

export default userSlice.reducer;



