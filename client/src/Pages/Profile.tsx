import { useEffect, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../App/AppStore";
import { AuthorizedProfile } from "../shared/hoc/authorizedProfile";
import { ProfileHeader, ProfileID } from "../entities/profile";
import { createPost, CreatePost, getUsersPosts, PostBlock } from "../entities/Posts";



const Profile: FC = () => {
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const dispatch = useAppDispatch()
    const postsUsers = useAppSelector(state => state.postsSlice.postsUsers)


    useEffect(() => {
        if (!postsUsers && profile) {
            dispatch(getUsersPosts(profile?.id ?? ""))
        }
        if(postsUsers && postsUsers[0] && postsUsers[0].userId != profile?.id){
            dispatch(getUsersPosts(profile?.id ?? ""))
        }
    }, [])

    return <AuthorizedProfile>
        <div>
            {profile && <ProfileID id={profile.id_name} />}
            {profile && <ProfileHeader name={profile?.name} avatar={profile.avatar} background={profile.background} desc={profile.desc} id={profile.id} />}
            {profile ? <CreatePost createPost={(title: string, content: string) => {
                dispatch(createPost(title, content, profile?.id))
            }} /> : undefined}
            <h1>Your twitxxers: </h1>
            {postsUsers?.map(post => <PostBlock key={post.id} title={post.Title}
                content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
                date={post.date}
            />)}
        </div>
    </AuthorizedProfile>
}


export default Profile