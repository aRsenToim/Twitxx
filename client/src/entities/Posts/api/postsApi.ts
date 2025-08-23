import { instance } from "../../../App/AppApi"
import type { ILike, IPost } from "../model/types"




export const postsApi = {
    async getPosts() {
        const data = await instance.get<IPost[]>('/posts')
        return data.data
    },
    async createPost(title: string, content: string, toAnswer?: string) {
        const data = await instance.post<IPost>('/posts',
            { title, content, toAnswer },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        return data.data
    },
    async getPostsUsers(userId: string) {

        const data = await instance.get<IPost[]>(`/posts?userId=${userId}`)

        return data.data
    },
    async changePost(idPost: string, fix?: boolean) {
        const data = await instance.patch('/posts/', {
            idPost,
            fix
        })
        return data.data
    },
    async deletePost(idPost: string) {
        const data = await instance.delete(`/posts?idPost=${idPost}`)
        return data.data
    },
    async likePost(idPost: string) {
        const data = await instance.post('/likes', { idPost }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        return data.data
    },
    async getLikes() {
        const data = await instance.get<ILike[]>('/likes', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        return data.data
    },
    async unLike(idPost: string) {
        const data = await instance.delete(`/likes?idPost=${idPost}`,)
        return data.data
    },
    async changeGlobalPost(idpost: string, global: boolean) {
        const data = await instance.patch('/posts/global', { idpost, global }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        return data.data
    }
}