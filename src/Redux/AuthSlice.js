import {createSlice} from '@reduxjs/toolkit' 

const INITIAL_STATE = {
    user: {
        email: '', 
        role: ''
    }
} 

export const authSlice = createSlice({
    name: 'auth', 
    initialState: INITIAL_STATE, 
    reducers: {
        changeAuthMode: (state, action) => { 
            console.log(action.payload)
            state.user = {
                email: action.payload.email, 
                role: action.payload.role
            }
        }, 
        logOut: (state, action) => {
            state.user.email = '', 
            state.user.role = ''
        }
    }
}) 

export const {changeAuthMode, logOut} = authSlice.actions 
export default authSlice.reducer