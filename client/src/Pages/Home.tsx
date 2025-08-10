import { useEffect, type FC } from "react";
import { createPost, CreatePost, getPosts, PostBlock } from "../entities/Posts";
import { useAppDispatch, useAppSelector } from "../App/AppStore";



const Home: FC = () => {
    const posts = useAppSelector(state => state.postsSlice.posts)
    const { profile, isAuth } = useAppSelector(state => state.AuthSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!posts) {
            dispatch(getPosts())
        }
    }, [])

    return <div>    
        <h1>Home</h1>
        {profile ? <CreatePost createPost={(title: string, content: string) => { 
            dispatch(createPost(title, content, profile?.id))
        }} /> : undefined}
        {posts?.map(post => <PostBlock key={post.id} title={post.Title}
            content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
            date={post.date}
        />)}
    </div>
}


export default Home