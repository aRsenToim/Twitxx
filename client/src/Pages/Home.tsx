import { useEffect, useState, type FC } from "react";
import { createPost, CreatePost, getPosts, likePost, PostBlock, setToAnswer, unlikePost, } from "../entities/Posts";
import { useAppDispatch, useAppSelector } from "../App/AppStore";
import { NoItems } from "../widgets/banners";
import { Navigate } from "react-router-dom";



const Home: FC = () => {
    const { posts, toAnswer, likes } = useAppSelector(state => state.postsSlice)
    const { profile, isAuth } = useAppSelector(state => state.AuthSlice)
    const [isRedirect, setIsRedirect] = useState<boolean>()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!posts) {
            dispatch(getPosts())
        }
    }, [])

    if (isRedirect) {
        return <Navigate to={`/login`} />
    }

    return <div>
        <h1>Home</h1>
        {profile ? <CreatePost toAnswer={toAnswer} setToAnswer={() => { dispatch(setToAnswer("")) }} createPost={(title: string, content: string) => {
            if (toAnswer) {
                dispatch(createPost(title, content, profile?.id, toAnswer))
            } else {
                dispatch(createPost(title, content, profile?.id))
            }
        }} /> : undefined}
        {posts?.length ? undefined : <NoItems />}
        {posts?.map(post => <PostBlock
            isGlobal={post.isGlobal}
            unlikePost={() => dispatch(unlikePost(post.id, profile?.id ?? ""))}
            likePost={() => {
                if (!profile) {
                    setIsRedirect(true)
                }
                dispatch(likePost(post.id, profile?.id ?? ""))
            }}
            isLike={likes ? Boolean(likes?.find(item => item.postId == post.id)) : false} toAnswer={post.toAnswer}
            AnswerPost={() => {
                if (!profile) {
                    setIsRedirect(true)
                }
                dispatch(setToAnswer(post.id))
            }}
            isProfile={false} key={post.id} title={post.Title}
            content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
            date={post.date}
        />)}
    </div>
}


export default Home