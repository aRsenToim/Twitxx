import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser, IUserItem } from "./types";

interface IinitialState {
    userItems: IUserItem[] | null
    user: IUser | null
}

const initialState: IinitialState = {
    userItems: null,
    user: null
}


const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>){
            state.user = action.payload
        },
        setUserItems(state, action: PayloadAction<IUserItem[]>){
            state.userItems = action.payload
        }
    }
})

export const {setUser, setUserItems} = usersSlice.actions
export default usersSlice.reducer