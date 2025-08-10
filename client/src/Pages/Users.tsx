import { useEffect, type FC } from "react";
import { getUserItemsFetch, UserCard } from "../entities/Users";
import { useAppDispatch, useAppSelector } from "../App/AppStore";



const Users: FC = () => {
    const dispatch = useAppDispatch()
    const userItems = useAppSelector(state => state.usersSlice.userItems)
    const profile = useAppSelector(state => state.AuthSlice.profile)

    useEffect(() => {
        if(!userItems){
            dispatch(getUserItemsFetch())
        }
    }, [])

    return <div>
        <h1>Users:</h1>
        {userItems?.map(item => <UserCard link={profile?.id == item.id ? "/profile" : `/users/${item.id}`} id={item.id} name={item.name} key={item.id} email={item.email} avatar={item.avatar}/>)}    
    </div>
}


export default Users