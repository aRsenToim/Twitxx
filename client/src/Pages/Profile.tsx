import { useEffect, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../App/AppStore";
import { AuthorizedProfile } from "../shared/hoc/authorizedProfile";
import { ProfileHeader, ProfileID } from "../entities/profile";
import { changeGlobal, changePost, createPost, CreatePost, deletePost, getUsersPosts, likePost, PostBlock, setToAnswer, unlikePost } from "../entities/Posts";
import { changeHideProfile, changeProfile, LogOut } from "../entities/Auth";
import { setWindowEditProfile } from "../entities/Window";
import { NoItems } from "../widgets/banners";



const Profile: FC = () => {
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const dispatch = useAppDispatch()
    const { postsUsers, toAnswer, likes } = useAppSelector(state => state.postsSlice)


    useEffect(() => {
        if (!postsUsers && profile) {
            dispatch(getUsersPosts(profile?.id ?? ""))
        }
        if (postsUsers && postsUsers[0] && postsUsers[0].userId != profile?.id) {
            dispatch(getUsersPosts(profile?.id ?? ""))
        }
    }, [])

    return <AuthorizedProfile>
        <div>
            {profile && <ProfileID id={profile.id_name} />}
            {profile && <ProfileHeader
                Location={profile.Location}
                profession={profile.profession}
                dateCreate={profile.dateCreate}
                isHide={profile.isHide}
                Hide={() => {
                    if (profile.isHide) {
                        dispatch(changeHideProfile(false))
                        return
                    }
                    dispatch(changeHideProfile(true))
                }}
                isProfile
                logout={() => { dispatch(LogOut()) }} editProfileWindow={() => dispatch(setWindowEditProfile())}
                setDesc={(desc: string) => { dispatch(changeProfile(profile.id, profile.name, desc)) }}
                name={profile?.name} avatar={profile.avatar} background={profile.background} desc={profile.desc} id={profile.id} />}
            {profile ? <CreatePost toAnswer={toAnswer} setToAnswer={() => dispatch(setToAnswer(''))} createPost={(title: string, content: string) => {
                dispatch(createPost(title, content, profile?.id))
            }} /> : undefined}
            <h1>Your twitxxers: </h1>
            {postsUsers?.length ? undefined : <NoItems />}
            {postsUsers?.map(post => <PostBlock
                isGlobal={post.isGlobal}
                changeGlobal={() => {
                    if (post.isGlobal) {
                        dispatch(changeGlobal(profile?.id ?? "", post.id, false))
                        return
                    }
                    dispatch(changeGlobal(profile?.id ?? "", post.id, true))
                }}
                unlikePost={() => dispatch(unlikePost(post.id, profile?.id ?? ""))}
                likePost={() => { dispatch(likePost(post.id, profile?.id ?? "")) }}
                isLike={likes ? Boolean(likes?.find(item => item.postId == post.id)) : false}
                toAnswer={post.toAnswer}
                AnswerPost={() => { }}
                isProfile={true} pinPost={() => {
                    dispatch(changePost(profile?.id ?? "", post.id, !post.toFix))
                }}
                deletePost={() => {
                    dispatch(deletePost(profile?.id ?? "", post.id))
                }}
                toFix={post.toFix} key={post.id} title={post.Title}
                content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
                date={post.date}
            />)}
        </div>
    </AuthorizedProfile>
}


export default Profile