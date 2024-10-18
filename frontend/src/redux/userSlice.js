import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    _id:null,
    username:null,
    email:null,
    token:null,
    loading:false,
    error:false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
                state.loading = true;
        },
        loginSuccess:(state,action)=>{
            state.loading = false;
            state._id = action.payload._id
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        loginFalure:(state)=>{
            state.error = true;
            state.loading = false;
        },
        logout:(state)=>{
            state.loading = false;
            state.userName = null;
            state.email = null;
            state.token = null;
        }
    }
})

export const {loginStart,loginFalure,loginSuccess,logout} = userSlice.actions;

export default userSlice.reducer;