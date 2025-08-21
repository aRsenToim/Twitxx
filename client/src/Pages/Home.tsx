import { useEffect, type FC } from "react";
import { createPost, CreatePost, getPosts, likePost, PostBlock, setToAnswer, unlikePost, } from "../entities/Posts";
import { useAppDispatch, useAppSelector } from "../App/AppStore";



const Home: FC = () => {
    const { posts, toAnswer, likes } = useAppSelector(state => state.postsSlice)
    const { profile, isAuth } = useAppSelector(state => state.AuthSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!posts) {
            dispatch(getPosts())
        }
    }, [])
    
    return <div>
        <h1>Home</h1>
        {profile ? <CreatePost toAnswer={toAnswer} setToAnswer={() => { dispatch(setToAnswer("")) }} createPost={(title: string, content: string) => {
            if (toAnswer) {
                dispatch(createPost(title, content, profile?.id, toAnswer))
            } else {
                dispatch(createPost(title, content, profile?.id))
            }
        }} /> : undefined}
        {posts?.map(post => <PostBlock
        unlikePost={() => dispatch(unlikePost(post.id, profile?.id ?? ""))}
        likePost={() => {dispatch(likePost(post.id, profile?.id ?? ""))}}
         isLike={likes ? Boolean(likes?.find(item => item.postId == post.id)) : false} toAnswer={post.toAnswer}
            AnswerPost={() => { dispatch(setToAnswer(post.id)) }}
            isProfile={false} key={post.id} title={post.Title}
            content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
            date={post.date}
        />)}
    </div>
}


export default Home