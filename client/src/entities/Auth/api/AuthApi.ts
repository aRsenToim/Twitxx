import { instance } from "../../../App/AppApi"
import type { IProfile, IResponseGetIdName, IResponseProfile } from "../model/types"



const AuthApi = {
    async regist(email: string, name: string, password: string) {
        const data = await instance.post<IResponseProfile>('/auth/regist', {
            email,
            password,
            name
        })
        return data.data
    },
    async auth() {
        const data = await instance.get<IResponseProfile>('/auth/getAuth',
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        return data.data
    },
    async login(email: string, password: string) {
        const data = await instance.post<IResponseProfile>('/auth/login', { email, password })
        return data.data
    },
    async change(userName?: string, desc?: string,) {
        const data = await instance.patch<IProfile>('/auth/profile', {
            userName,
            desc,
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, } })
        return data.data
    },
    async changePicture(avatar?: File, background?: File) {
        const formData = new FormData();
        if (avatar) {
            formData.append('avatar', avatar);
        }
        if (background) {
            formData.append('background', background)
        }
        const data = await instance.post<IProfile>('/auth/profilePicture', formData,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'multipart/form-data' } })
        return data.data
    },
    async getIdNameStatus(idName: string) {
        const data = await instance.get<IResponseGetIdName>(`/auth/profileIdName?idName=${idName}`)
        return data.data
    },
    async changeIdName(idName: string) {
        const data = await instance.patch<IProfile>('/auth/profileIdName',
            { id_name: idName },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        return data.data
    }
}

export default AuthApi