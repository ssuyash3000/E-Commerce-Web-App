import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const INITIAL_STATE = { message: "hello" };

// create alert slice to handle start, pause, timer actions below
const notificationSlice = createSlice({
  name: "notification",
  initialState: INITIAL_STATE,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload;
    },
    resetAlert: (state, action) => {
      state.message = null;
    },
  },
  //   extraReducers: {
  //     "timer/startTimer": (state, action) => {
  //       state.message = "Timer has started.";
  //     },
  //     "timer/pauseTimer": (state, action) => {
  //       state.message = "Timer is paused.";
  //     },
  //     "timer/resetTimer": (state, action) => {
  //       state.message = "Timer set to 0.";
  //     },
  //   },
});

// export the alert reducer function here
export const alertReducer = notificationSlice.reducer;
// create and export alert selector function here
export const alertSelector = (state) => state.alertReducer;
export const resetAlert = notificationSlice.actions.resetAlert;
