import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import parameterReducer from './settings'

export default configureStore({
    reducer:{
        counter : counterReducer,
        parameter : parameterReducer,
    },
})