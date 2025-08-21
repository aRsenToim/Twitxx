import { useEffect, type FC } from 'react'
import s from './baseLayout.module.scss'
import Navbar from '../../../widgets/navbar/navbar'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../AppStore'
import { getProfile } from '../../../entities/Auth'
import { EditProfile } from '../../../entities/Window'
import { getLikesFetch } from '../../../entities/Posts'


const BaseLayout: FC = () => {
    const dispatch = useAppDispatch()
    const {isAuth, profile} = useAppSelector(state => state.AuthSlice)
    const isWindowEditProfile = useAppSelector(state => state.WindowSlice.isWindowEditProfile)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getProfile())
        }
    }, [])
    useEffect(() => {
        if(profile){
            dispatch(getLikesFetch())
        }
    }, [profile])

    return <>
        {isWindowEditProfile && <EditProfile />}
        <div className={s.BaseLayout}>
            <Navbar isAuth={isAuth} />
            <div className={s.BaseLayout__content}>
                <Outlet />
            </div>
        </div>
    </>
}


export default BaseLayout