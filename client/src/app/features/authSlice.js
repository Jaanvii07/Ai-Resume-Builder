import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:'auth',
    initialState:{
        token:null,
        user:null,
        loading:true
    },
    reducers:{
        login:(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
        },
        logut:(state)=>{
            state.token='',
            state.user=null,
            localStorage.removeItem('token')
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
    }
})

export const {login,logut,setLoading}=authSlice.actions

export default authSlice.reducer