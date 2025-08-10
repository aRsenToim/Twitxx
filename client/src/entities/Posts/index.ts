import { createPost, getPosts, getUsersPosts } from "./actions/postsAction"
import postsSlice from "./model/postsSlice"
import CreatePost from "./ui/CreatePost/CreatePost"
import PostBlock from "./ui/PostBlock/postBlock"



export {
    CreatePost,
    PostBlock,
    postsSlice,
    getPosts,
    createPost,
    getUsersPosts
}