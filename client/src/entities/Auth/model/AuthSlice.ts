import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProfile } from "./types";

interface iinitialState {
    profile: IProfile | null
    isAuth: boolean
    error: string
}

const initialState: iinitialState = {
    profile: null,
    isAuth: false,
    error: ""
}


const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<IProfile>){
            state.profile = action.payload
            state.isAuth = true
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        LogOut(state){
            state.profile = null
            state.isAuth = false
            localStorage.removeItem('token')
        }
    }
})


export default AuthSlice.reducer
export const {setError, setProfile, LogOut} = AuthSlice.actions