import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice.jsx';
import authReducer from './authSlice.jsx';
import articlesReducer from './articlesSlice.jsx';  

export const store = configureStore({
    reducer: {
        auth: authReducer,
        students: studentReducer,
        articles: articlesReducer
    }
});