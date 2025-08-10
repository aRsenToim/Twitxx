import { createSlice } from "@reduxjs/toolkit";
import type { IPost } from "./types";

interface IinitialState {
    posts: null | IPost[]
    error: string
    postsUsers: null | IPost[]
}

const initialState: IinitialState = {
    posts: null,
    error: "",
    postsUsers: null
}

const postsSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload.reverse()
        },
        setError(state, action) {
            state.error = action.payload
        },
        setPostsUser(state, action) {
            state.postsUsers = action.payload.reverse()
        }
    }
})

export default postsSlice.reducer
export const { setError, setPosts, setPostsUser } = postsSlice.actions