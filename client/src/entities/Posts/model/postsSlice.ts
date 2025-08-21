import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ILike, IPost } from "./types";

interface IinitialState {
    posts: null | IPost[]
    error: string
    postsUsers: null | IPost[]
    toAnswer: string
    likes: ILike[] | null
}

const initialState: IinitialState = {
    posts: null,
    error: "",
    postsUsers: null, 
    toAnswer: "",
    likes: null
}

const postsSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload.reverse()
        },
        setError(state, action) {
            state.error = action.payload
        },
        setPostsUser(state, action: PayloadAction<IPost[]>) {
            action.payload = action.payload.reverse()
            let noFixed: IPost[] = []
            let fixed: IPost[] = []
            action.payload.forEach(item => {
                if(item.toFix){
                    fixed.push(item)
                }else{
                    noFixed.push(item)
                }
            })
            
            state.postsUsers = [...fixed, ...noFixed]
        },
        setToAnswer(state, action: PayloadAction<string>){
            state.toAnswer = action.payload
        },
        setLikes(state, action: PayloadAction<ILike[]>){
            state.likes = action.payload
        }
    }
})

export default postsSlice.reducer
export const { setError, setPosts, setPostsUser, setToAnswer, setLikes } = postsSlice.actions