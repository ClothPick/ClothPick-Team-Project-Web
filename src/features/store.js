import { configureStore } from "@reduxjs/toolkit";

// import boardSlice from "./BoardSlice";
import userReducer from './UserInfo'
// configureStore를 통해 store생성
export const store = configureStore({
  // reducer 정의
  reducer: {
    userinfo: userReducer
  }
});