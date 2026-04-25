import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";

//const initialState = { value: [] }; //list of user is an object with empty array as initial value
const initialState = { value: UsersData, currentUser: "Anthony" }; //list of user is an object with empty array as initial value

export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload); //add the payload to the state;
    },
    deleteUser: (state, action) => {
      //create a new array with the value that excludes the user with the email value from the action payload, and assign the new array to the state.
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        //iterate the array and compare the email with the email from the payload;
        if (user.email === action.payload.email) {
          user.name = action.payload.name;
          user.password = action.payload.password;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions; //export the function
export default userSlice.reducer;
