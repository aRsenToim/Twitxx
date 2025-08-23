import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../App/AppStore"
import { useEffect } from "react"
import { getUserFetch } from "../entities/Users"
import { ProfileHeader, ProfileID } from "../entities/profile"
import { getUsersPosts, likePost, PostBlock, unlikePost } from "../entities/Posts"
import { HideProfile } from "../widgets/banners"



const User = () => {
    const { id } = useParams()
    const User = useAppSelector(state => state.usersSlice.user)
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const { postsUsers, toAnswer, likes } = useAppSelector(state => state.postsSlice)

    useEffect(() => {
        dispatch(getUsersPosts(User?.id ?? ""))
    }, [User])

    useEffect(() => {
        if (id) {
            dispatch(getUserFetch(id))
        }
    }, [id])

    return <div>
        {User && <ProfileID id={User.id_name} />}
        {User && <ProfileHeader isProfile={false}
            Hide={() => { }}
            setDesc={() => { }} logout={() => { }} editProfileWindow={() => { }}
            name={User?.name} avatar={User.avatar} background={User.background} desc={User.desc} id={User.id} />}
        {User?.isHide ? <>
            {postsUsers?.map(post => <PostBlock
                unlikePost={() => dispatch(unlikePost(post.id, profile?.id ?? ""))}
                likePost={() => { dispatch(likePost(post.id, profile?.id ?? "")) }}
                isLike={likes ? Boolean(likes?.find(item => item.postId == post.id)) : false}
                toAnswer={post.toAnswer}
                AnswerPost={() => { }}
                isProfile={false} key={post.id} title={post.Title}
                content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
                date={post.date}
            />)}
        </> : <HideProfile />
        }
    </div>
}

export default User