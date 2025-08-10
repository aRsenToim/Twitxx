import { instance } from "../../../App/AppApi"
import type { IPost } from "../model/types"




export const postsApi = {
    async getPosts(){
        const data = await instance.get<IPost[]>('/posts')
        return data.data
    },
    async createPost(title: string, content: string){
        const data = await instance.post<IPost>('/posts',
            {title, content},
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
        return data.data
    },
    async getPostsUsers(userId: string){
        
        const data = await instance.get<IPost[]>(`/posts?userId=${userId}`)
        
        return data.data
    }
}