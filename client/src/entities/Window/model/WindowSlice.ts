import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    isWindowEditProfile: boolean
}

const initialState: IInitialState = {
    isWindowEditProfile: false
}

const WindowSlice = createSlice({
    name: "WindowSlice",
    initialState,
    reducers: {
        setWindowEditProfile(state){
            state.isWindowEditProfile = !state.isWindowEditProfile
        }
    }
})


export default WindowSlice.reducer
export const {setWindowEditProfile} = WindowSlice.actions