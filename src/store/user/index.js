import {createSlice} from '@reduxjs/toolkit';
import MMKVStorage from 'react-native-mmkv-storage';
export const storage = new MMKVStorage.Loader().initialize();


export const USER = 'USER';
export const TOKEN = 'TOKEN';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        // 로그인 유무
        isSignIn: !!storage.getString(TOKEN),
        // 회원가입 유무
        isSignUp: false,

        data: {},
    },
    reducers: {
        signIn: (state, action) => {
            const {payload} = action;
            const {access_token} = payload;
            storage.setString(TOKEN, access_token);
        },
        logOut: state =>{
            storage.setString(TOKEN, '');
            state.isSignIn = false;
            state.isRequireAuth = false;
            state.user = {};
            return true
        },
    },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
