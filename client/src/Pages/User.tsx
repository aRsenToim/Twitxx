import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../App/AppStore"
import { useEffect } from "react"
import { getUserFetch } from "../entities/Users"
import { ProfileHeader, ProfileID } from "../entities/profile"
import { getUsersPosts, PostBlock } from "../entities/Posts"



const User = () => {
    const { id } = useParams()
    const User = useAppSelector(state => state.usersSlice.user)
    const dispatch = useAppDispatch()
    const postsUsers = useAppSelector(state => state.postsSlice.postsUsers)

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
        setDesc={() => {}} logout={() => {}} editProfileWindow={() => {}}         
        name={User?.name} avatar={User.avatar} background={User.background} desc={User.desc} id={User.id} />}
        {postsUsers?.map(post => <PostBlock isProfile={false} key={post.id} title={post.Title}
            content={post.content} authorAvatar={post.authorAvatar} authorIdName={post.authorIdName} authorName={post.authorName}
            date={post.date}
        />)}
    </div>
}

export default User