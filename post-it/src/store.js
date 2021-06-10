import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import postItsReducer from './reducers/postIts.js'

export default configureStore({
    reducer:{
        postIts: postItsReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});