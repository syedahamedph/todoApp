import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginDetails } from '../intefaces/interface';

const initialState: LoginDetails = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login') as string) : { userName: "", password: "" }


const loginSlice = createSlice({

    name: 'login',
    initialState: initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<LoginDetails>) => {

            const { userName, password } = action.payload

            return { ...state, userName, password }

        }
    }

});

export const { userLogin } = loginSlice.actions;

export default loginSlice.reducer
