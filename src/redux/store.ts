import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './todoSlice'
import loginReducer from './loginSlice'

const store = configureStore({

    reducer: {
        todos: toDoReducer,
        login: loginReducer
    }
});

export default store