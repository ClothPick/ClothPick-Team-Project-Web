import { createSlice } from '@reduxjs/toolkit';
import UserMethod from '../apis/Test/UserMethod';
const userinfo = () => {
    return UserMethod.ReturnUserInfo();
}
const initialState = {
    LoginState: false,
    username: "abc",
    userNickName: "abcd",
    userId: 0,
    userDOB: "2022-11-02",
    userGender: "1",
    userRole: "abcde",
    userupdateAT: "지금"
}
export const userSlice = createSlice({
    name: "userinfo",
    initialState,
    reducers: {
        login: (state, action) => {
            userinfo()

            state.LoginState = action.payload.LoginState;
            state.username = action.payload.username;
            state.userNickName = action.payload.userNickName;
            state.userId = action.payload.userId;
            state.userDOB = action.payload.userDOB;
            state.userGender = action.payload.userGender;
            state.userRole = action.payload.userRole;
            state.userupdateAT = action.payload.userupdateAT;
        }
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
