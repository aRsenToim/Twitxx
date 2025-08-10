import type { AppDispatch } from "../../../App/AppStore";
import { postsApi } from "../api/postsApi";
import { setError, setPosts, setPostsUser } from "../model/postsSlice";




export function getPosts(){
    return (dispatch: AppDispatch) => {
        postsApi.getPosts().then((data) => {
            dispatch(setPosts(data))
        }).catch(err => {
            dispatch(setError(err.message))
        })
    }
}

export function createPost(title: string, content: string, userId: string){
    return (dispatch: AppDispatch) => {
        postsApi.createPost(title, content).then(() => {
            dispatch(getPosts())
            dispatch(getUsersPosts(userId))
        })
    }
}

export function getUsersPosts(userId: string) {
    return (dispatch: AppDispatch) => {
        postsApi.getPostsUsers(userId).then((data) => {
            dispatch(setPostsUser(data))
        })
    }
}