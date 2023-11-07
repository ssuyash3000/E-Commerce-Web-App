import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const INITIAL_STATE = {
  displayName: "",
  uId: "",
  userEmail: "",
  isLoggedIn: false,
};

// define and export comments async thunk below
export const userLogin = createAsyncThunk(
  "user/login",
  async (arg, thunkAPI) => {
    console.log(arg.userEmailInput, arg.userPasswordInput);
    signInWithEmailAndPassword(auth, arg.userEmailInput, arg.userPasswordInput)
      .then((userCredential) => {
        console.log(userCredential);
        thunkAPI.dispatch(
          setUser({
            displayName: userCredential.user.displayName,
            email: userCredential.user.email,
            id: userCredential.user.reloadUserInfo.localId,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
);
export const userSignUp = createAsyncThunk(
  "user/signup",
  async (arg, thunkAPI) => {
    return await createUserWithEmailAndPassword(auth, arg.email, arg.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: arg.name,
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
);

const useAuthSlice = createSlice({
  name: "userAuth",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.displayName = action.payload.displayName;
      state.user = action.payload.email;
      state.uId = action.payload.id;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = useAuthSlice.reducer;

export const { setUser } = useAuthSlice.actions;

export const authSelector = (state) => {
  return state.authReducer;
};
