import {createSlice} from '@reduxjs/toolkit' 

const INITIAL_STATE = {
    user: {
        email: '', 
    }
} 

export const authSlice = createSlice({
    name: 'auth', 
    initialState: INITIAL_STATE, 
    reducers: {
        changeAuthMode: (state, action) => { 
            state.user = {
                email: action.payload.email, 
            }
        }, 
        logOut: (state, action) => {
            state.user.email = ''
        }
    }
}) 

export const {changeAuthMode, logOut} = authSlice.actions 
export default authSlice.reducer