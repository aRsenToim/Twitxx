import { useEffect, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../App/AppStore";
import { AuthorizedProfile } from "../shared/hoc/authorizedProfile";
import { ProfileHeader, ProfileID } from "../entities/profile";
import { changePost, createPost, CreatePost, deletePost, getUsersPosts, PostBlock } from "../entities/Posts";
import { changeProfile, LogOut } from "../entities/Auth";
import { setWindowEditProfile } from "../entities/Window";



const Profile: FC = () => {
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const dispatch = useAppDispatch()
    const postsUsers = useAppSelector(state => state.postsSlice.postsUsers)


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
            {profile && <ProfileHeader isProfile
                logout={() => {dispatch(LogOut())}} editProfileWindow={() => dispatch(setWindowEditProfile())}
                setDesc={(desc: string) => {dispatch(changeProfile(profile.id, profile.name, desc))}}
                name={profile?.name} avatar={profile.avatar} background={profile.background} desc={profile.desc} id={profile.id} />}
            {profile ? <CreatePost createPost={(title: string, content: string) => {
                dispatch(createPost(title, content, profile?.id))
            }} /> : undefined}
            <h1>Your twitxxers: </h1>
            {postsUsers?.map(post => <PostBlock isProfile={true} pinPost={() => {
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