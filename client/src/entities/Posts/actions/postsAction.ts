import type { AppDispatch } from "../../../App/AppStore";
import { postsApi } from "../api/postsApi";
import { setError, setLikes, setPosts, setPostsUser } from "../model/postsSlice";




export function getPosts() {
    return (dispatch: AppDispatch) => {
        postsApi.getPosts().then((data) => {
            dispatch(setPosts(data))
        }).catch(err => {
            dispatch(setError(err.message))
        })
    }
}

export function createPost(title: string, content: string, userId: string, toAnswer?: string) {
    return (dispatch: AppDispatch) => {
        postsApi.createPost(title, content, toAnswer).then(() => {
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

export function changePost(profileID: string, idPost: string, fix?: boolean) {
    return (dispatch: AppDispatch) => {
        postsApi.changePost(idPost, fix).then(() => {
            dispatch(getUsersPosts(profileID))
        })
    }
}

export function deletePost(profileId: string, idPost: string) {
    
    return (dispatch: AppDispatch) => {
        postsApi.deletePost(idPost).then(() => {
            dispatch(getUsersPosts(profileId))
        })
    }
}

export function getLikesFetch(){
    return (dispatch: AppDispatch) => {
        postsApi.getLikes().then((data) => {
            dispatch(setLikes(data))
        })
    }
}

export function likePost(idPost: string, userId: string){
    return (dispatch: AppDispatch) => {
        postsApi.likePost(idPost).then(() => {            
            dispatch(getPosts())
            dispatch(getUsersPosts(userId))
            dispatch(getLikesFetch())
        })
    }
}
export function unlikePost(idPost: string, userId: string){
    return (dispatch: AppDispatch) => {
        postsApi.unLike(idPost).then(() => {            
            dispatch(getPosts())
            dispatch(getUsersPosts(userId))
            dispatch(getLikesFetch())
        })
    }
}