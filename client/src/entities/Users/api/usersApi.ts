import { instance } from "../../../App/AppApi"
import type { IUser, IUserItem } from "../model/types"



export const usersApi = {
    async getUserItems(){
        const data = await instance.get<IUserItem[]>('/users')
        return data.data
    },
    async getUser(id: string){
        const data = await instance.get<IUser>(`/users?id=${id}`)
        return data.data
    }
}