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
  products: [],
  signUp: false,
  isSeller: false,
  isBuyer: false,
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
      return state
    },

    //-------------------------------loginHandle---------------------------------//

    loginHandle: (state, action) => {
      console.log(action.payload, ' login action');
      const { email, password } = action.payload
      console.log(email, password, ' email and password');

      const user = state.signUpHandle.find((user) => user.email === email && user.password === password)

      console.log(user, "Found user");
      if (user) {
        state.isLoggedIn = true;
        state.user = user
      }
      return state

    },

    //-----------------------------Add Product-----------------------------------//

    product: (state, action) => {
      const { user, product } = action.payload
      console.log(user, product, ' user and product');
      state.user = user
      state.products.push(product)
      console.log(state.products.push(product), ' updated');
      return state
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

export const { signUpHandle, logoutUser, loginHandle, product } = userSlice.actions;

//---------------------------Exporting userSlice-------------------------//

export default userSlice.reducer;
