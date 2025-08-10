import type { AppDispatch } from "../../../App/AppStore"
import { usersApi } from "../api/usersApi"
import { setUser, setUserItems } from "../model/usersSlice"






export const getUserItemsFetch = () => {
    return (dispatch: AppDispatch) => {
        usersApi.getUserItems().then(data => {
            dispatch(setUserItems(data))
        })
    }
}


export const getUserFetch = (id: string) => {
    return (dispatch: AppDispatch) => {
        usersApi.getUser(id).then(data => {
            dispatch(setUser(data))
        })
    }
}