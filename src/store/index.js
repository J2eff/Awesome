export {default as userSlice} from './user'
import user from  './user'
import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        user,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
