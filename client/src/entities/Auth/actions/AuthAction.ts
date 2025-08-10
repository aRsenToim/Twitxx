import type { AppDispatch } from "../../../App/AppStore"
import { getPosts, getUsersPosts } from "../../Posts"
import AuthApi from "../api/AuthApi"
import { setProfile } from "../model/AuthSlice"



export const createProfile = (email: string, name: string, password: string) => {
    return (dispatch: AppDispatch) => {
        AuthApi.regist(email, name, password).then((data) => {

            dispatch(setProfile(data.user))
            localStorage.setItem('token', data.token)
        })
    }
}

export const getProfile = () => {
    return (dispatch: AppDispatch) => {
        AuthApi.auth().then((data) => {
            dispatch(setProfile(data.user))
            localStorage.setItem('token', data.token)
        }).catch(err => {
            localStorage.removeItem('token')
        })
    }
}

export const login = (email: string, password: string) => {

    return (dispatch: AppDispatch) => {
        AuthApi.login(email, password).then(data => {
            dispatch(setProfile(data.user))

            localStorage.setItem('token', data.token)
        }).catch(err => {
        })
    }
}

export const changeProfile = (userId: string, userName?: string, desc?: string,) => {
    return (dispatch: AppDispatch) => {

        AuthApi.change(userName, desc).then(data => {
            dispatch(setProfile(data))
            dispatch(getUsersPosts(userId))
            dispatch(getPosts())
        })
    }
}

export const changePicture = (userId: string, avatar: File, background: File) => {
    return (dispatch: AppDispatch) => {
        AuthApi.changePicture(avatar, background).then((data) => {
            dispatch(setProfile(data))
            dispatch(getPosts())
            dispatch(getUsersPosts(userId))
        })
    }
}