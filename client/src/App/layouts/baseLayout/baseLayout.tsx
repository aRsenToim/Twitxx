import { useEffect, type FC } from 'react'
import s from './baseLayout.module.scss'
import Navbar from '../../../widgets/navbar/navbar'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../AppStore'
import { getProfile } from '../../../entities/Auth'


const BaseLayout: FC = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.AuthSlice.isAuth)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getProfile())
        }
    }, [])

    return <div className={s.BaseLayout}>
        <Navbar isAuth={isAuth}/>
        <div className={s.BaseLayout__content}>
            <Outlet />
        </div>
    </div>
}


export default BaseLayout