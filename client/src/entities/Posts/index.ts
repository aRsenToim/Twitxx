import { changePost, createPost, deletePost, getLikesFetch, getPosts, getUsersPosts, likePost, unlikePost } from "./actions/postsAction"
import postsSlice from "./model/postsSlice"
import CreatePost from "./ui/CreatePost/CreatePost"
import PostBlock from "./ui/PostBlock/postBlock"
import {setToAnswer} from './model/postsSlice'


export {
    CreatePost,
    PostBlock,
    postsSlice,
    getPosts,
    createPost,
    getUsersPosts,
    changePost,
    deletePost,
    setToAnswer,
    likePost,
    getLikesFetch,
    unlikePost
}